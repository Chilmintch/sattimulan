import React from 'react'
import { Button } from 'reactstrap';
import {auth} from "../firebase"

function SignOut() {
  return (
    <div>
        <Button style={{width:'100px',height:'50px'}} onClick={() => auth.signOut()}>Çıkış Yap</Button>
    </div>
  )
}

export default SignOut