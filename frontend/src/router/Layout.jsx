import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ModalProvider, Modal } from "../context/Modal";
import { thunkRestoreUser } from "../redux/sessionReducer.js";
// import {thunkGetBranchesAll} from "../redux/branchesReducer.js"
import Navigation from "../components/Navigation/Navigation.jsx";
import SplashPage from "../components/Session/Splash.jsx";



function Layout() {

    const dispatch = useDispatch();
    const sessionUser = useSelector((store) => store.session.user);
    const [isLoaded, setIsLoaded] = useState(false);
    if(isLoaded);
    // console.log("isLoaded from Layout: ", isLoaded);

    useEffect(() => {
      dispatch(thunkRestoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    // useEffect(()=>{
    //   dispatch(thunkGetBranchesAll());
    // }, [])


    return (
      <>
        <ModalProvider>
          {sessionUser ? <Navigation /> : <SplashPage />}
          {sessionUser && <Outlet />}
          <Modal />
        </ModalProvider>
      </>
    );
  }


  export default Layout;
