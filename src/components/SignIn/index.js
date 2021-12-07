import { useState } from "react";
import {publicAxios} from '../../Store/utils/Axios';
import { useSelector, useDispatch } from "react-redux";

import TextBox from "../UI/TextBox";
import Password from "../UI/txtPass";
import Blogin from "../Buttons/BLog";
import Page from "../Pages";

const getSecurity = ({security}) => security;

const SignIn = () =>{

    const [txtCorreo, setTxtCorreo] = useState("");
    const [txtPassword, setTxtPassword] = useState("");
    const [txtName, setTxtName] = useState("");
    const [txtSecName, setTxtSecName] = useState("");
    const [txtPhone, setTxtPhone] = useState("");

    const security = useSelector(getSecurity);
    const dispatch = useDispatch();

    const onBtnClick =  (e)=> {
        e.preventDefault();
        e.stopPropagation();
        dispatch(
          {
            type:"SEC_SIGNIN_FETCH",
            payload: null,
          }
        );
        publicAxios.post(
          '/api/sec/signup',
          {
            email: txtCorreo,
            pswd: txtPassword,
            name: txtName,
            lname: txtSecName,
            phone: txtPhone
          }
        )
        .then(
          ({data}) => {
            console.log(data)
            dispatch(
              {
                type: "SEC_SIGNIN_SUCCESS"
              }
            );
          }
        )
        .catch(
          (err)=>{
            console.log(err);
            dispatch(
              {
                type: "SEC_SIGNIN_ERROR",
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
        } else if(e.target.name === "txtPassword") {
          setTxtPassword(e.target.value);
        }else if(e.target.name === "txtName") {
          setTxtName(e.target.value);
        }else if(e.target.name === "txtSecName") {
          setTxtSecName(e.target.value);
        }else if(e.target.name === "txtPhone") {
          setTxtPhone(e.target.value);
        }
      }

    return(
        <Page showHeader={true} title="Crear Cuenta" showNavBar className="bg-green-100 m-0 p-0">
            <div className="text-center">
                <h1 className="pt-20 font-serif font-semibold text-3xl">Nombre empresa</h1>
                
                <div className="mx-20">
                <h2 className="my-6 font-mono">Correo:</h2>
                <TextBox placeholder="Correo..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtCorreo" onChange={onChangeHandler}/>
                <h2 className="my-6 font-mono">Nombre:</h2>
                <TextBox placeholder="Nombre..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtName" onChange={onChangeHandler}/>
                <h2 className="my-6 font-mono">Apellido:</h2>
                <TextBox placeholder="Apellido..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtSecName" onChange={onChangeHandler}/>
                <h2 className="my-6 font-mono">Contraseña:</h2>
                <Password placeholder="Contraseña..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtPassword" onChange={onChangeHandler}/>
                <h2 className="my-6 font-mono">Telefono:</h2>
                <TextBox placeholder="Numero Telefono..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtPhone" onChange={onChangeHandler}/>
                <Blogin onClick={onBtnClick} label="Crear Cuenta" type="button" className="font-mono text-white bg-blue-400 w-32 h-16 mx-10 my-16 align-middle justify-center hover:bg-blue-400 rounded-lg shadow-2xl"/>
                </div>

            </div>
            
        </Page>
    );
}

export default SignIn;