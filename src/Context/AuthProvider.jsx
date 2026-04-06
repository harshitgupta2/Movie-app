import { useState } from "react";
import AuthContext from "./AuthContext";
// import { useNavigate } from "react-router";




 export const Authprovider = ({children})=>{
    // const navigate = useNavigate()
    const[user,setUser]= useState(()=>{    
     try {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
    });

    
  const signInAsGuest = () => {
    const guest = { name: "Guest" };
    setUser(guest);
    localStorage.setItem("user", JSON.stringify(guest));
    // navigate('/')
    
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
return(
    <AuthContext.Provider value={{user,setUser,signInAsGuest,logout}}>
        {children}
    </AuthContext.Provider>
)
}

