import React , { useState } from 'react';
import firebaseApp from './firebase/credentials';
import Login from './views/Login.js';
import ChatScreen from './views/ChatScreen.js';
import Sidebar from './views/Sidebar.js';

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const [userGlobal, setUserGlobal] = useState(null);
  const [channelActive, setchannelActive] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUserGlobal(userFirebase);
      console.log("you have signed in succesfully !");
    } else {
      setUserGlobal(null);
    }
  });

  return (
    <div className="app">
      {userGlobal ? (
        <>
          {" "}
          <Sidebar
            userGlobal={userGlobal}
            setchannelActive={setchannelActive}
          />{" "}
          <ChatScreen channelActive={channelActive} user={userGlobal} />{" "}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;