


function UserContainer(props){
    return(
        <div className="flex items-center gap-2">
            <img src={props.user?.avatar} alt={props.user?.name} className="h-8 w-8 object-cover rounded-full"/>
            <h2 className="text-lg">Olá, {props.user?.name}!</h2>
        </div>
    )
}



export default function Header({user}){
  
    return(
        <header className="flex justify-between items-center bg-facebook text-white px-[5vw] max-w-[1000px] py-4 text-2xl font-semibold">
            <h1>Facebook</h1>
           {user&& <UserContainer user={user}/>}
        </header>
    )
}