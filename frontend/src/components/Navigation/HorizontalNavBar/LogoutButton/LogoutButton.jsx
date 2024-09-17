//============CSS IMPORT AND BASE CLASS NAME============//
const BCIN = "LogoutButton";
import './LogoutButton.css';

//==================PROGRAM IMPORTS=====================//
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


//================COMPONENT IMPORTS=====================//

import * as sessionActions from '../../../../redux/sessionReducer';


//===============FUNCTION DECLARATION===================//
function LogoutButton(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // logout handler for the logout button in the drop down menu
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.thunkLogout());
        navigate('/')
    };



//=================FUNCTION RETURN======================//
    return (<>

                <button
                    id={`${BCIN}Button`}
                    onClick={logout}>
                    <FiLogOut id="LogoutButtonFiLogOut">Logout</FiLogOut>
                </button>

    </>)
}

//===================FUNCTION EXPORT====================//
export default LogoutButton;
