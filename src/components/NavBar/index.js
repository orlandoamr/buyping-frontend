import { Link } from "react-router-dom";
import { MdHome, MdLogin } from "react-icons/md"
import { useSelector } from "react-redux";

const NavBar = ()=>{
  const {isLogged} = useSelector(({security})=>security);
  const menu = isLogged ? 
  (<ul className="inline-flex">
      <li className="mx-6"><Link to="/home"> Home </Link> </li>
      <li className="mx-6"><Link to="/new"> Agregar Producto</Link></li>
      <li className="mx-6"><Link to="/myproduct">Mis Productos</Link></li>
    </ul>) :
  (<ul className="inline-flex">

      <li className="mx-6"><Link to="/login"> Login</Link></li>
      <li className="mx-6"><Link to="/signin">Signin</Link></li>
    </ul>);

  return (
    <nav className="w-full bg-green-600 text-center my-0 py-6 text-white h-20 sticky bottom-0 z-50">
      {menu}
    </nav>
  );
}

export default NavBar;