import Header from "./../Header"
export default function PrivatePublic({user, setIsAuth}){
    function handleLogout(){     
       localStorage.removeItem("user")
       setIsAuth(false)
    }
    return(
        <>
        <Header user={user}/>
        <main  className="flex justify-center items-center py-40">
           <button className="bg-facebook px-8 py-4 rounded-lg text-white text-xl" 
           onClick={ handleLogout}>
            Fazer Logout
           </button>
        </main>
        </>
    )
}