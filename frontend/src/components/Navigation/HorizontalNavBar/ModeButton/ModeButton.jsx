//============CSS IMPORT AND BASE CLASS NAME============//

const BASE_CLASS_NAME = "ModeButton";
import './ModeButton.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//
import { IoInvertMode } from "react-icons/io5";




//===============FUNCTION DECLARATION===================//
function ModeButton(){


    const toggleMode = (e) => {
        e.preventDefault();

    };





//=================FUNCTION RETURN======================//
    return (<>
        <button
            id={`${BASE_CLASS_NAME}Button`}
            onClick={toggleMode}>
            <IoInvertMode id="ModeButtonIoInvertMode"/>
        </button>

    </>)
}

//===================FUNCTION EXPORT====================//
export default ModeButton;
