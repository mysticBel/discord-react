import React , { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { ExpandMore, Mic, Add, Headser, Settings } from '@material-ui/icons';

function Sidebar(){
    return (
        <div className="sidebar">

          <div className="sidebar__top">
            <h3> Server </h3>  
            < ExpandMore />
          </div> 

          <div className="sidebar__channels">
            <div className="sidebar__channelsHeader">
              <div className="sidebar__header">
                <ExpandMore />
                <h4>CHAT</h4>
              </div>

              <Add className="sidebar__addChannel" />
            </div>

            <div className="sidebar__channelsList">
              
               {/* { listChannels ? listChannels.map((channel) => {

               }): null} */}

            </div>

            <div className="sidebar__profile">
              <Avatar />
              <div className="sidebar__profileInfo">
                <h3> Name </h3>
                <p>#number</p>

              </div>


            </div>

          </div> 



        </div>
    );
}

export default Sidebar;