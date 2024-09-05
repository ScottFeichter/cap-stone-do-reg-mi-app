//============CSS IMPORT AND BASE CLASS NAME============//

const BASE_CLASS_NAME = "ProfilePage";
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
        <h1 id={`${BASE_CLASS_NAME}H1`}>Your Profile </h1>
        <main id={`${BASE_CLASS_NAME}Main`}>

            {/* <nav id={`${BASE_CLASS_NAME}Nav`}>
              <button id={`${BASE_CLASS_NAME}EditButton`} onClick={handleClickEditProfile}>Edit Profile</button>

              <button id={`${BASE_CLASS_NAME}DeleteButton`} onClick={handleClickDeleteProfile}>Delete Profile</button>
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
