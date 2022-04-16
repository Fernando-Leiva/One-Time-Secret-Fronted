import React from "react";
import { getSecret } from "../utils/secretBackend";
import './Style.css'

export const ShowSecret = ({url}) => {
    const [message,setMessage] = React.useState('') 

    React.useEffect(()=>{
        const hash = url.split('/')[3]
        getSecret(hash).then(result => {
            if(result.data !== null){
                setMessage(result.data)
            }else{
                setMessage('Lo sentimos el secreto ha sido eliminado!')
            }
        }).catch(error=>{
            console.error(error)
        }) 
    },[])
    
    return(
        <div className="containerUiSecret"> 
            <h1>{message}</h1>
        </div>
    )
} 