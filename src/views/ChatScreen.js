import React, { useState, useEffect, useRef } from 'react';



import { AddCircle, CreditCard, Gif, EmojiEmotions } from '@material-ui/icons';
import  HeaderChat  from '../components/HeaderChat';
import  Message from '../components/Message';


import firebaseApp from "../firebase/credentials";
import { getFirestore, doc, setDoc , collection, getDocs} from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

function ChatScreen( {channelActive, user} ){

   const [ inputMessage, setInputMessage ] = useState('');
   const [ messageList, setMessageList ] = useState([]);

   function  sendInputMsg(e) {
     e.preventDefault();
     const docuRef = doc(firestore, `awesomeChannel_List/${channelActive}/messages/${new Date().getTime()} `);
     setDoc(docuRef, {
       photo:user.photoURL,
       username: user.displayName,
       message:inputMessage,
       id:new Date().getTime() ,  
     });

     setInputMessage("");

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
   useEffect( ()=> {
     getMessageList();
   }, [])

    return (
        <div className="chat">
         
           <HeaderChat nameChannel={ channelActive } />

           <div className="chat__messages">
               {/* mapping messages from Firebase*/}
               
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