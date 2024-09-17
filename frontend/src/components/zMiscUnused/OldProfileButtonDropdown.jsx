//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "OldProfileButtonDropdown";
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



          <ul className={`${BCIN}Ul`} >
              <li className={`${BCIN}Li`}>{sessionUser.username}</li>
              <li className={`${BCIN}Li`}>
                <ViewOldProfileButton />
              </li>
              <li className={`${BCIN}Li`}>
                <LogoutButton />
              </li>
            </ul>



    </>)
}

//===================FUNCTION EXPORT====================//
export default OldProfileButtonDropdown;
