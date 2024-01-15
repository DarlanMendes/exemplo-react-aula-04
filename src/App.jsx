import FormLogin from "./components/FormLogin"
import PrivateContent from "./components/PrivateContent"
import PublicContent from "./components/PublicContent"
import { useEffect, useState } from "react"
function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")
    ))
  useEffect(()=>{  
    if(user){
      setIsAuth(true)
    }else{
      setIsAuth(false)
    }   
  },[])

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")))
  },[isAuth])

  return (
    <>
    {isAuth?
      <PrivateContent user={user} setIsAuth={setIsAuth}/>      
  :
  <PublicContent>
   <FormLogin setIsAuth={setIsAuth}/>   
  </PublicContent>}
    
    </>
  )
}

export default App
