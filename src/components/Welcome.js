import React from 'react';



function WelcomeMsg( { mensajeFirebase }) {

    return (
        <div className="welcome__chatScreen">

            <h1 className="welcome__title"> . . . Hey !   </h1>
            <h2>agrega canales y empieza a chatear !!</h2>
            <h2>Have a nice day ! </h2>
            <img className="welcome__gif" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a13db5d2-bd25-464d-b76d-0a07134ddf67/ddcohz1-04198bc7-cbc1-41bf-8f2a-7d5e0ed6d15d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExM2RiNWQyLWJkMjUtNDY0ZC1iNzZkLTBhMDcxMzRkZGY2N1wvZGRjb2h6MS0wNDE5OGJjNy1jYmMxLTQxYmYtOGYyYS03ZDVlMGVkNmQxNWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aKyAIN1r6ldMm_1j8-fV6ddCzt469-Y4_e7aTdiBgWI" alt="discord__logo" />
            <p>developer : <a href="https://github.com/mysticBel" >Maribel Maza (@mysticBel)</a>       </p>
        </div>
    )
}

export default WelcomeMsg;