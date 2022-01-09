import React, { useState, useEffect, useRef } from 'react';



import { AddCircle, CreditCard, Gif, EmojiEmotions } from '@material-ui/icons';
import  HeaderChat  from '../components/HeaderChat';

function ChatScreen( {channelActive} ){

   const [ inputMessage, setInputMessage ] = useState('');

    return (
        <div className="chat">
         
           <HeaderChat nameChannel={ channelActive } />

           <div className="chat__messages">
               {/* mapping messages from Firebase*/}
           </div>
           <div className="chat__input">
                < AddCircle fontSize= "large" />
                <form>
                  <input type="text" value={ inputMessage } disabled
                   onChange= {(e)=> setInputMessage(e.target.value)} 
                   placeholder={`Send message to # ${ channelActive}`} />
                  <button className="chat__inputButton" type="submit" >Send</button>
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