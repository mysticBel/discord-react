import React, { useState, useEffect, useRef } from 'react';



import { AddCircle, CreditCard, Gif, EmojiEmotions } from '@material-ui/icons';
import  HeaderChat  from '../components/HeaderChat';
import  Message from '../components/Message';
import  WelcomeMsg from '../components/Welcome';


import firebaseApp from "../firebase/credentials";
import { getFirestore, doc, setDoc , collection, getDocs} from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

function ChatScreen( {channelActive, user} ){

   const [ inputMessage, setInputMessage ] = useState('');
   const [ messageList, setMessageList ] = useState([]);


   const anchor = useRef();

   function filterContent(originalText) {
     const bannedWords = ["tonto", "hdp", "mk"];
 
     const array = originalText.split(" ");
     array.forEach((word, index) => {
       if (bannedWords.includes(word)) {
         array[index] = "****";
       }
     });
 
     return array.join(" ");
   }
 

   function  sendInputMsg(e) {
     e.preventDefault();
     const docuRef = doc(firestore, `awesomeChannel_List/${channelActive}/messages/${new Date().getTime()} `);
    
     const msgFiltered = filterContent(inputMessage);
     setDoc(docuRef, {
       photo:user.photoURL,
       username: user.displayName,
       message:msgFiltered,
       id:new Date().getTime() ,  
     });

     setInputMessage("");
     // we add getMessageList to see in real time the messages on ChatScreen
     getMessageList();
     anchor.current.scrollIntoView({ behavior: "smooth" });
   }

   async function getMessageList() {

    const msgsArr = [];

     const collectionRef = collection(firestore, `awesomeChannel_List/${channelActive}/messages`);
     // bringing back data from Firestore
     const messagesEncrypted =  await getDocs(collectionRef);  //a promise , it's encrypted, interpret it with data 
     messagesEncrypted.forEach( msg => {
       msgsArr.push(msg.data())
     });

     // updating our useState 
     setMessageList([...msgsArr]);
   }




   // it starts executing with an empty array.
   useEffect( ()=> { getMessageList()}, [channelActive] );

    return (
        <div className="chat">
         
         { channelActive ? <HeaderChat nameChannel={ channelActive } />: < WelcomeMsg />}
           

           <div className="chat__messages">
               {/* mapping messages from Firebase*/}
               { messageList ? messageList.map( msg => {
                 return <Message mensajeFirebase={ msg } />
               }) : null }

              <div ref={anchor} style={{ marginBottom: "75px" }}></div>
           </div>
           <div className="chat__input">
                < AddCircle fontSize= "large" />
                <form onSubmit={ sendInputMsg }>
                  <input type="text" value={ inputMessage } 
                   disabled= {channelActive ? false : true }
                   onChange= {(e)=> setInputMessage(e.target.value)} 
                   placeholder={`Message # ${ channelActive}`} />
                  <button className="chat__inputButton" type="submit" 
                  disabled= {channelActive ? false : true } >Send</button>
                </form>

                <div className="chat__inputIcons" >
                  < CreditCard fontSize= "large" />
                  < Gif fontSize= "large" />
                  < EmojiEmotions fontSize= "large" />
                </div>

           </div>

        </div>
    )
}

export default ChatScreen;