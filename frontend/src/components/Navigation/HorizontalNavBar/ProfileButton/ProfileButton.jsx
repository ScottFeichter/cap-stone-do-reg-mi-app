//============CSS IMPORT AND BASE CLASS NAME============//
const BASE_CLASS_NAME = "ProfileButton";
import './ProfileButton.css';

//==================PROGRAM IMPORTS=====================//

import { useNavigate } from "react-router-dom";
import { LuUserCircle2 } from "react-icons/lu";


//================COMPONENT IMPORTS=====================//




//===============FUNCTION DECLARATION===================//
function ProfileButton(){

    const navigate = useNavigate();


    const viewProfile = (e) => {
        e.preventDefault();
        navigate('/profile')
    };



//=================FUNCTION RETURN======================//
    return (<>

                <button
                    id={`${BASE_CLASS_NAME}Button`}
                    onClick={viewProfile}>
                    <LuUserCircle2 id="ProfileButtonLuUserCircle2"/>
                </button>

    </>)
}

//===================FUNCTION EXPORT====================//
export default ProfileButton;
