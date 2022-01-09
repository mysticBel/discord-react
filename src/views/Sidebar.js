import React , { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { ExpandMore, Mic, Add, Headset, Settings } from '@material-ui/icons';

import SidebarChannelList from "../components/SidebarChannelList";

import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc , collection, getDocs } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);




function Sidebar({ userGlobal, setchannelActive }){

 const [listChannels, setListChannels] = useState([]);

  function addingChannel() {
    const nameChannel = prompt("Please, enter a channel name 🧟‍♀️ ");
      if (nameChannel) {
        const docuRef = doc(firestore, `awesomeChannel_List/${nameChannel}`) ;
        setDoc(docuRef, {
          id: new Date().getTime(),
          name: nameChannel,
        });
      }
      getChannels();
  }

  async function getChannels(){
    const channelsArr = [];   

    const collectionRef = collection(firestore, "awesomeChannel_List");
    const encryptedChannels = await getDocs(collectionRef);
    encryptedChannels.forEach( encryptedChannel=>{
      channelsArr.push(encryptedChannel.data());
    } );
    console.log(channelsArr);
    setListChannels(channelsArr);

  }

  function convertLetterToNumber(str) {
    var out = 0, len = str.length;
    for (let pos = 0; pos < len; pos++) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
  }


  // [] empty means it will charge once, we want listChannels to charge when entering to app
  useEffect(() => { getChannels() }, [])

    return (
        <div className="sidebar">

          <div className="sidebar__top">
            <h3> ✨ My server  🦄 </h3>  
            < ExpandMore />
          </div> 

          <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
              <div className="sidebar__header">
                <ExpandMore />
                <h4>CHAT</h4>
              </div>

              <Add className="sidebar__addChannel" 
                  onClick={ addingChannel} />
            </div>

            <div className="sidebar__channelsList">
               { listChannels ? listChannels.map(channel => {
                  return  <div onClick={()=> setchannelActive(channel.name) }>
                    <SidebarChannelList name ={channel.name} id= {channel.id} />
                    </div>
                 
               }) : null }

               {/* { listChannels ? listChannels.map((channel) => {

               }): null} */}

            </div>
           </div>
           
            <div className="sidebar__profile">
              <Avatar src= { userGlobal.photoURL }/>
              <div className="sidebar__profileInfo">
                <h3> { userGlobal.displayName } </h3>
                <p>#{ convertLetterToNumber(userGlobal.uid.substring(0,2))}</p>
              </div>
              <div className="sidebar__profileIcons">
                <Mic />
                <Headset />
                <Settings onClick={() => signOut(auth)} />
              </div>
            
          </div> 
        </div>
    );
}

export default Sidebar;