//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "AcademicDepartmentDetails";

import './AcademicDepartmentDetails.css';

//==================PROGRAM IMPORTS=====================//
import {useNavigate} from 'react-router-dom';
// import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function AcademicDepartmentDetails(props){

    const navigate = useNavigate()

    // const academicDepartment = useSelector(state => state.academicDepartments.academicDepartments[1])
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

        <main id="AcademicDepartmentDetailsMain">

                <div id='AcademicDepartmentDetailsForm' >
{/* form section 1---------------------------------------------------------- */}

                    <section id="AcademicDepartmentDetailsFormSection1">

                        <h4 id="AcademicDepartmentDetailsFormSection1H4">Information</h4>

                        <div id='nameContainer' className='AcademicDepartmentDetailsFormLabelInputContainer'>
                                <div className='AcademicDepartmentDetailsFormLabel'>{"ID"}</div>
                                <div className='AcademicDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='AcademicDepartmentDetailsFormInput'>{academicDepartment.id ? academicDepartment.id : nullReplacer}</div>
                        </div>


                        <div id='nameContainer' className='AcademicDepartmentDetailsFormLabelInputContainer'>
                                <div className='AcademicDepartmentDetailsFormLabel'>{"name"}</div>
                                <div className='AcademicDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='AcademicDepartmentDetailsFormInput'>{academicDepartment.name ? academicDepartment.name : nullReplacer}</div>
                        </div>



                        <div id='chairContainer' className='AcademicDepartmentDetailsFormLabelInputContainer'>
                                <div className='AcademicDepartmentDetailsFormLabel'>{"chair"}</div>
                                <div className='AcademicDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='AcademicDepartmentDetailsFormInput'>{academicDepartment.chair ? academicDepartment.chair : nullReplacer}</div>
                        </div>



                        <div id='imageURLContainer' className='AcademicDepartmentDetailsFormLabelInputContainer'>
                                <div className='AcademicDepartmentDetailsFormLabel'>{"imageURL"}</div>
                                <div className='AcademicDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='AcademicDepartmentDetailsFormInput'>{academicDepartment.imageURL ? academicDepartment.imageURL : nullReplacer}</div>
                        </div>


                    </section>

                    <hr className='AcademicDepartmentDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}



                        <div id="AcademicDepartmentDetailsButtonContainer">
                            <button
                                id="AcademicDepartmentDetailsButton"
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
export default AcademicDepartmentDetails;
