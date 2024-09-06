//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "FacilityDetails";

import './FacilityDetails.css';

//==================PROGRAM IMPORTS=====================//
import {useNavigate} from 'react-router-dom';
// import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function FacilityDetails(props){

    const navigate = useNavigate()

    // const academicDepartment = useSelector(state => state.facilities.facilities[1])
    const academicDepartment = props.academicDepartment;

    // const academicDepartmentObjectKeys = Object.keys(academicDepartment);
    // const academicDepartmentObjectValues = Object.values(academicDepartment);
    // const academicDepartmentObjectEntries = Object.entries(academicDepartment);

    const infoDivider = ":";
    const nullReplacer = `- -`

//     function getKeyByValue(object, value) {
//         return Object.keys(object).find(key =>
//             object[key] === value);
//     }

//--------------------handleScroll-----------------------//

    const handleScroll = (e) => {
        e.preventDefault();
        // document.body.scrollTop = 0; // For Safari
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        navigate('/departments')
    }


//=================FUNCTION RETURN======================//
    return (<>

        <main id="FacilityDetailsMain">

                <div id='FacilityDetailsForm' >
{/* form section 1---------------------------------------------------------- */}

                    <section id="FacilityDetailsFormSection1">

                        <h4 id="FacilityDetailsFormSection1H4">Information</h4>

                        <div id='nameContainer' className='FacilityDetailsFormLabelInputContainer'>
                                <div className='FacilityDetailsFormLabel'>{"ID"}</div>
                                <div className='FacilityDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='FacilityDetailsFormInput'>{academicDepartment.id ? academicDepartment.id : nullReplacer}</div>
                        </div>


                        <div id='nameContainer' className='FacilityDetailsFormLabelInputContainer'>
                                <div className='FacilityDetailsFormLabel'>{"name"}</div>
                                <div className='FacilityDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='FacilityDetailsFormInput'>{academicDepartment.name ? academicDepartment.name : nullReplacer}</div>
                        </div>


                        <div id='imageURLContainer' className='FacilityDetailsFormLabelInputContainer'>
                                <div className='FacilityDetailsFormLabel'>{"imageURL"}</div>
                                <div className='FacilityDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='FacilityDetailsFormInput'>{academicDepartment.imageURL ? academicDepartment.imageURL : nullReplacer}</div>
                        </div>


                    </section>

                    <hr className='FacilityDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}



                        <div id="FacilityDetailsButtonContainer">
                            <button
                                id="FacilityDetailsButton"
                                type="submit"
                                onClick={handleScroll}
                                >Back
                            </button>
                        </div>

                </div> {/* form div end tag I think */}

        </main>

    </>)
}

//===================FUNCTION EXPORT====================//
export default FacilityDetails;
