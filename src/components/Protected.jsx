import { useContext } from "react"
import AuthContext from "../Context/AuthContext"
import { Navigate } from "react-router-dom"




 export const Protected = ({children})=>{
    const{user} = useContext(AuthContext);
      console.log("user",user);
    if(!user){
        console.log("user is not here");
         return <Navigate to={'/signup'} />
    }
  
    return children;
}
