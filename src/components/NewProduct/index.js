import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewSale } from "../../Store/reducers/Sales/actions";
import { useNavigate } from "react-router";
import TextBox from "../UI/TextBox";
import Password from "../UI/txtPass";
import Blogin from "../Buttons/BLog";
import Page from "../Pages";
import txtFile from "../UI/txtFile";

const NewProduct = () =>{

    const [txtPrec, setTxtPrec] = useState("");
    const [txtName, setTxtName] = useState("");
    const [txtCant, setTxtCant] = useState("");
    const [txtDesc, setTxtDesc] = useState("");
    const [txtImg, setTxtImg] = useState([]);
    const [txtEst, setTxtEst] = useState("");
    const [txtContact, setTxtContact] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const onChangeHandler = (e)=>{
      e.preventDefault();
      e.stopPropagation();
      if (e.target.name === "txtName") {
          setTxtName(e.target.value);
      }else if(e.target.name === "txtPrec") {
        setTxtPrec(e.target.value);
      }else if(e.target.name === "txtCant") {
        setTxtCant(e.target.value);
      }else if(e.target.name === "txtEst") {
        setTxtEst(e.target.value);
      }else if(e.target.name === "txtDesc") {
          setTxtDesc(e.target.value);
      }else if(e.target.name === "txtImg") {
          setTxtImg(e.target.files[0]);
      }else if(e.target.name === "txtContact") {
        setTxtContact(e.target.value);
      }
    }


    const onBtnClick =  (e)=> {
        e.preventDefault();
        e.stopPropagation();
        addNewSale(dispatch, txtName, txtDesc, txtPrec, txtCant, txtEst, txtContact,txtImg,navigate,"/myproduct")

      };

    
    return(
        <Page showHeader={true} title="Crear Producto" showNavBar className="bg-green-100 m-0 p-0">
            <div className="text-center text-black">
                <h1 className="pt-20 font-serif font-semibold text-3xl">BUYPING</h1>
                
                <div className="mx-20">
                <h2 className="my-6 font-mono">Nombre:</h2>
                <TextBox placeholder="Nombre producto..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtName" onChange={onChangeHandler}/>
                <h2 className="my-6 font-mono">Precio:</h2>
                <TextBox placeholder="Precio..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtPrec" onChange={onChangeHandler}/>
                <h2 className="my-6 font-mono">Cantidad:</h2>
                <TextBox placeholder="Cantidad..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtCant" onChange={onChangeHandler}/>
                <h2 className="my-6 font-mono">Estado:</h2>
                <TextBox placeholder="Estado..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtEst" onChange={onChangeHandler}/>
                <h2 className="my-6 font-mono">Descripcion:</h2>
                <TextBox placeholder="Descripcion..." className="text-black border-b-4 border-yellow-400 w-52 bg-yellow-400" name="txtDesc" onChange={onChangeHandler} />
                <h2 className="my-6 font-mono">Contacto:</h2>
                <TextBox placeholder="url/telefono/correo..." className="text-black  border-b-4 border-yellow-400 w-52 bg-yellow-400 mb-16" name="txtContact" onChange={onChangeHandler} />
                <label className="my-12 font-mono">Imagen</label>
                <input type="file" accept="image/png, image/jpeg" onChange={onChangeHandler} name="txtImg"/>
                <Blogin onClick={onBtnClick} label="Crear Producto" type="button" className="font-mono text-white bg-blue-400 w-32 h-16 mx-10 my-16 align-middle justify-center hover:bg-blue-400 rounded-lg shadow-2xl"/>
                </div>

            </div>
            
        </Page>
    );
}

export default NewProduct;