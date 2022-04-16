import React from "react";
import { Link } from "react-router-dom";
import { sendSecret } from "../utils/secretBackend";
import './Style.css'
import secretImg from './secret.jpeg'

export const Home = (props) => {
    const [secret,setSecret] = React.useState('')
    const [url, setUrl] = React.useState('')
    const [validatioSecret,setValidationSecret] = React.useState('')
    
    const handleSecret = async (e) => {
        e.preventDefault()
        if(secret){
            const receivedSecret = await sendSecret(secret)
            if(receivedSecret.data && receivedSecret.data.url){
                props.setUrl(receivedSecret.data.url)
                setUrl(receivedSecret.data.url)
                window.localStorage.setItem('url',receivedSecret.data.url)
            }
            setSecret('')
            setValidationSecret('')
        }else{
            setValidationSecret('Aún no ha ingresado un secreto!')
        }
    }

    return(
        <div className="containerHome">
            <img src={secretImg} alt="Avatar" className="img"/>
            {validatioSecret && <h1>{validatioSecret}</h1>}
            <input placeholder="Escriba su secreto!" value={secret} onChange={e=>setSecret(e.target.value)}/>
            {url &&
                <section>
                    <span>Se ha generado un enlace, el cual puede utilizar para obtener el secreto. Tóme en cuenta que solo lo podra ver una véz</span>
                    <Link className="link" to={url}>{url}</Link>
                </section>       
            }
            <button onClick={handleSecret} >Generar enlance</button>
        </div>
    )
}