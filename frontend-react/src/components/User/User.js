import { useSelector } from "react-redux/es/exports"
export const User = ()=>{
    const user = useSelector(state=>state.myUserReducer.user)
    if (user.name == undefined){
        return ( 
            <>
                <h2> no user set </h2>        
            </>
        )
    }
    return ( <>
        <h2> UserName : {user.name}</h2>

    </>)
}