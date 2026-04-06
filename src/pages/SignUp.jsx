import React, { useContext } from 'react'
import AuthContext from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const { signInAsGuest } = useContext(AuthContext)

  const signIn = () => {
    signInAsGuest()
    navigate('/')
  }

  return (
    <div className="h-screen w-full bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9b6cbbf2-bg.jpg')] bg-cover bg-center flex items-center justify-center">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Card */}
      <div className="relative z-10 bg-black/75 p-10 rounded-2xl w-[320px] text-center text-white shadow-xl">
        <h1 className="text-red-600 text-3xl font-bold mb-6 tracking-wide">
          NetMovie
        </h1>
        <h2 className="text-xl mb-6">Welcome</h2>
        <button
          onClick={signIn}
          className="w-full py-3 rounded-full bg-red-600 hover:bg-red-700 transition duration-300 transform hover:scale-105"
        >
          Sign in as Guest
        </button>
      </div>
    </div>
  )
}

export default SignUp