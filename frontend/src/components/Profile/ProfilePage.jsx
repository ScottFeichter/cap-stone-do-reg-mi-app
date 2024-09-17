//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "ProfilePage";
import './ProfilePage.css';

//==================PROGRAM IMPORTS=====================//

// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';



//================COMPONENT IMPORTS=====================//

import ProfileDetails from './ProfileDetails';


//===============FUNCTION DECLARATION===================//
function ProfilePage(){

    // const navigate = useNavigate();
    const profile = useSelector(state => state.session.user);



  // const handleClickEditProfile = (e) => {
  //   e.preventDefault();
  //   navigate('/profiles/:profile_Id/editForm')
  // }

  // const handleClickDeleteProfile = (e) => {
  //   e.preventDefault();
  //   navigate('/profiles/:profile_Id/deleteModal')
  // }




//=================FUNCTION RETURN======================//
    return (<>
        <>
        <h1 id={`${BCIN}H1`}>Your Profile </h1>
        <main id={`${BCIN}Main`}>

            {/* <nav id={`${BCIN}Nav`}>
              <button id={`${BCIN}EditButton`} onClick={handleClickEditProfile}>Edit Profile</button>

              <button id={`${BCIN}DeleteButton`} onClick={handleClickDeleteProfile}>Delete Profile</button>
            </nav> */}


            <div>

              <ProfileDetails profile={profile}></ProfileDetails>





            </div>
        </main>
    </>

    </>)
}

//===================FUNCTION EXPORT====================//
export default ProfilePage;
