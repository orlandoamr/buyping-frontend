import {Fragment} from 'react';
import { FiLogOut } from "react-icons/fi";
import NavBar from '../NavBar';


const Page = ({children, className, showHeader, showNavBar, title})=>{
  const onBtnClick =  (e)=> {
    e.preventDefault();
    e.stopPropagation();
    localStorage.clear();
    window.location.href='/login';
  };

  //JSX
  let classNames = ["page", className];
  let header = null;
  let navBar = null;
  if (showHeader) {
    classNames.push("with_header");
    header = (<div style={{minHeight:"64px"}} className="bg-green-600 text-2xl font-serif text-white flex justify-between sticky top-0 z-50"><div></div><h1 className="py-6">{title}</h1><button onClick={onBtnClick} className="mr-2"><FiLogOut/> </button>  </div>);
  }
  if (showNavBar) {
    classNames.push("with_navbar");
    //navBar = (<div style={{ backgroundColor: "#000", color: "#FFF", minHeight: "64px" }}></div>);
    navBar = (<NavBar/>);
  }

  return (
    <Fragment>
      {header}
      <section className={classNames.join(" ")}>
        {children}
      </section>
      {navBar}
    </Fragment>
  );
}

export default Page;