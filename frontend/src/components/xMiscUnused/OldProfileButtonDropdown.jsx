//============CSS IMPORT AND BASE CLASS NAME============//

const BASE_CLASS_NAME = "OldProfileButtonDropdown";
import './OldProfileButtonDropdown.css';

//==================PROGRAM IMPORTS=====================//
import {useSelector} from 'react-redux'

//================COMPONENT IMPORTS=====================//
import LogoutButton from './LogOutButton/LogoutButton';
import ViewOldProfileButton from './ViewOldProfileButton/ViewOldProfileButton.jsx'


//===============FUNCTION DECLARATION===================//
function OldProfileButtonDropdown(){
   const sessionUser = useSelector((store) => store.session.user);






//=================FUNCTION RETURN======================//
    return (<>



          <ul className={`${BASE_CLASS_NAME}Ul`} >
              <li className={`${BASE_CLASS_NAME}Li`}>{sessionUser.username}</li>
              <li className={`${BASE_CLASS_NAME}Li`}>
                <ViewOldProfileButton />
              </li>
              <li className={`${BASE_CLASS_NAME}Li`}>
                <LogoutButton />
              </li>
            </ul>



    </>)
}

//===================FUNCTION EXPORT====================//
export default OldProfileButtonDropdown;
