import './DemoRegistrarLogin.css'
import { useDispatch } from 'react-redux';
import {thunkLogin} from '../../../redux/sessionReducer.js';

function DemoRegistrarLogin() {
    const dispatch = useDispatch();
    const handleClick = (e) =>
    {
        e.preventDefault;
        dispatch(thunkLogin({
          credential: "Demo-lition",
          password: "password",
        }));
        // window.store.dispatch(
        //       thunkLogin({
        //       credential: "Demo-lition",
        //       password: "password",
        //     })
        //   );
    }


    return(<>


        <button onClick={handleClick} id="DemoRegistrarLoginButton">Demo Registrar Login</button>


    </>)


}

export default DemoRegistrarLogin;
