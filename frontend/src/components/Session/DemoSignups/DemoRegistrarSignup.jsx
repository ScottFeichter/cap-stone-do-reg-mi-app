import './DemoRegistrarSignup.css'
import { useDispatch } from 'react-redux';
import {thunkSignup} from '../../../redux/sessionReducer.js';



function DemoRegistrarSignup() {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault;
        dispatch(thunkSignup({
            username: "DemoRegistrarSignupUser",
            firstName: "DemoRegistrarSignupUser",
            lastName: "DemoRegistrarSignupUser",
            email: "DemoRegistrarSignupUser@user.io",
            password: "password",
          })
        );
    }


    return(<>


        <button onClick={handleClick} id="DemoRegistrarSignupButton">Demo Registrar Signup</button>


    </>)


}

export default DemoRegistrarSignup;
