//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "EmployeeDepartmentDetails";

import './EmployeeDepartmentDetails.css';

//==================PROGRAM IMPORTS=====================//
// import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function EmployeeDepartmentDetails(props){

    // const employee = useSelector(state => state.employees.employees[1])
    const employeeDepartment = props.employeeDepartment;

    // const employeeObjectKeys = Object.keys(employee);
    // const employeeObjectValues = Object.values(employee);
    // const employeeObjectEntries = Object.entries(employee);

    const infoDivider = ":";
    const nullReplacer = `- -`

//     function getKeyByValue(object, value) {
//         return Object.keys(object).find(key =>
//             object[key] === value);
//     }

//--------------------handleScroll-----------------------//

    const handleScroll = (e) => {
        e.preventDefault();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


//=================FUNCTION RETURN======================//
    return (<>

        <main id="EmployeeDepartmentDetailsMain">

                <div id='EmployeeDepartmentDetailsForm' >
{/* form section 1---------------------------------------------------------- */}

                    <section id="EmployeeDepartmentDetailsFormSection1">

                        <h4 id="EmployeeDepartmentDetailsFormSection1H4">Personal Information</h4>

                        <div id='nameContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"ID"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.id ? employeeDepartment.id : nullReplacer}</div>
                        </div>


                        <div id='nameContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"name"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.name ? employeeDepartment.name : nullReplacer}</div>
                        </div>

                        <div id='imageURLContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"imageURL"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.imageURL ? employeeDepartment.imageURL : nullReplacer}</div>
                        </div>




                    </section>

                    <hr className='EmployeeDepartmentDetailsHr'></hr>

{/* to top button---------------------------------------------------------- */}

                        <div id="EmployeeDepartmentDetailsButtonContainer">
                            <button
                                id="EmployeeDepartmentDetailsButton"
                                type="submit"
                                onClick={handleScroll}
                                >Back To Top
                            </button>
                        </div>

                </div> {/* form div end tag I think */}

        </main>

    </>)
}

//===================FUNCTION EXPORT====================//
export default EmployeeDepartmentDetails;
