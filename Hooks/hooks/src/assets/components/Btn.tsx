import React, { useState } from 'react'
import { Context } from '../../App'
function Btn() {
    //const [signedIn, setSignedIn] = useState(false);
    const {signedIn,setSignedIn}=React.useContext(Context)
  return (
    <div>
      <button onClick={()=>{setSignedIn(!signedIn)}}>{signedIn?'Sign out':'Sign in'}</button>
    </div>
  )
}

export default Btn
