import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { initiatedApp } from "./Store/reducers/app/action";
import Login from './components/Login';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Splash from './components/Splash';
import RequireAuth from './components/UI/RequireAuth';
import NewProduct from './components/NewProduct';
import MyProd from "./components/MyProd";
import { useEffect } from 'react';

const Private = ({ children }) => <RequireAuth redirectTo="/login">{children}</RequireAuth>

function App() {
  const {appInitiaded, loading} = useSelector(({app})=>app);
  const dispatch = useDispatch();
  useEffect(()=>{
    initiatedApp(dispatch);
  },[]);
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
                <Route path="/login"  element={<Login />} />
                <Route path="/signin"  element={<SignIn />} />
                <Route path="/"  element={<Splash />} />
                <Route path="/home"  element={<Private><Home /></Private>} />
                <Route path="/new"  element={<Private><NewProduct /></Private>} />
                <Route path="/myproduct"  element={<Private><MyProd /></Private>} />
              </Routes> 
        </div>
      </BrowserRouter>

  );

}

export default App;
