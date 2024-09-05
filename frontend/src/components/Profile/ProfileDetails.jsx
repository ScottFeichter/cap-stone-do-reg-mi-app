//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "ProfileDetails";
import './ProfileDetails.css';
import ProfileInformationContainer from './ProfileInformationContainer/ProfileInformationContainer';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function ProfileDetails(props){

    const profile = props.profile;
    const profileObjectEntries = Object.entries(profile)




//=================FUNCTION RETURN======================//
return (<>


            <div id='ProfileDetailsForm' >
{/* form section 1---------------------------------------------------------- */}

                <section id="ProfileDetailsFormSection1">

                    <h4 id="ProfileDetailsFormSection1H4">Personal Information</h4>

                    {profileObjectEntries.map((arr)=> {
                        const k = arr[0];
                        const v = arr[1];
                        return <ProfileInformationContainer info={[k,v]} key={k}  />
                    })}

                </section>

                {/* <hr className='ProfileDetailsHr'></hr> */}


            </div> {/* form div end tag I think */}



</>)
}

//===================FUNCTION EXPORT====================//
export default ProfileDetails;
