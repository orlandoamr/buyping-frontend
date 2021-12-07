import { useState } from "react";
import {publicAxios} from '../../Store/utils/Axios';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import TextBox from "../UI/TextBox";
import Password from "../UI/txtPass";
import Blogin from "../Buttons/BLog";
import Page from "../Pages";

const getSecurity = ({security}) => security;

const Login = () =>{

    const [txtCorreo, setTxtCorreo] = useState("");
    const [txtPassword, setTxtPassword] = useState("");

    const security = useSelector(getSecurity);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onBtnClick =  (e)=> {
        e.preventDefault();
        e.stopPropagation();
        dispatch(
          {
            type:"SEC_LOGIN_FETCH",
            payload: null,
          }
        );
        publicAxios.post(
          '/api/sec/login',
          {
            email: txtCorreo,
            pswd: txtPassword,
          }
        )
        .then(
          ({data}) => {
            console.log(data)
            dispatch(
              {
                type: "SEC_LOGIN_SUCCESS",
                payload: data,
              }
            );
            navigate('/home',{replace:true});
          }
        )
        .catch(
          (err)=>{
            console.log(err);
            dispatch(
              {
                type: "SEC_LOGIN_ERROR",
                payload: err,
              }
            );
          }
        );
    
    
      };

    const onChangeHandler = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        if (e.target.name === "txtCorreo") {
          setTxtCorreo(e.target.value);
        } else {
          setTxtPassword(e.target.value);
        }
      }

      const { hasErrors } = security;
    
    return(
        <Page showHeader={true} title="Iniciar sesión" showNavBar className="bg-green-100 m-0 p-0 min-h-screen py-28">
            <div className="text-center">
                <h1 className="pt-20 font-serif font-semibold text-3xl">BUYPING</h1>
                
                <div className="mx-20">
                <h2 className="my-6 font-mono">Correo:</h2>
                <TextBox placeholder="Correo..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" value={txtCorreo} onChange={onChangeHandler} name="txtCorreo"/>
                <h2 className="my-6 font-mono">Contraseña:</h2>
                <Password placeholder="Contraseña..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" value={txtPassword} onChange={onChangeHandler} name="txtPassword"/>
                <Blogin onClick={onBtnClick} label="Iniciar sesion" type="button" className="font-mono text-white bg-blue-400 w-32 h-16 mx-10 my-16 align-middle justify-center hover:bg-blue-400 rounded-lg shadow-2xl"/>
                <div className="break-all">
                
                </div>
                </div>
                {hasErrors && (
                    <div className="bg-red-400 text-center text-xl border-2 border-red-800 w-36 h-36 mx-20">
                        Correo o Contraseña no validos. Intente de nuevo
                    </div>
                )}
            </div>
            
        </Page>
    );
}
//<Blogin label="Ingresar" type="button" className="font-mono text-white bg-indigo-700 w-32 h-16 mx-10 my-16 align-middle justify-center rounded-lg shadow-2xl"/>
export default Login;