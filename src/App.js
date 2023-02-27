import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { useEffect } from "react";
import './App.css';
import { act_login_header } from "./services/actions";
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    let loginAcc = JSON.parse(localStorage.getItem("LOGIN_USER"));
    if (loginAcc != null) {
      dispatch(act_login_header(loginAcc.status));  
    }
  },[])
  return <RouterProvider router={router} />;
}

export default App;
