import React from 'react';

import { Avatar } from '@material-ui/core';


function Message( { mensajeFirebase }) {

    return (
        <div className="message">

            <Avatar src={ mensajeFirebase.photo } />
            <div className="message__info">
                 <h4>
                     { mensajeFirebase.user }
                     <span className="message__timestamp"> {new Date(mensajeFirebase.id).toLocalString } </span>        
                 </h4>
                 <p> { mensajeFirebase.message } </p>
            </div>
           
        </div>
    )
}

export default Message;