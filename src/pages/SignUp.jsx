import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'

const SignUp = () => {
    const {signInAsGuest} = useContext(AuthContext)
  return (
    <div className='container'>
        <div className='signup-container'>
            <button onClick={signInAsGuest}>SignIn as guest</button>
        </div>
    </div>
  )
}

export default SignUp