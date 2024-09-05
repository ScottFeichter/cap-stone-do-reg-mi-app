//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "EmployeeDetails";

import './EmployeeDetails.css';

//==================PROGRAM IMPORTS=====================//
// import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function EmployeeDetails(props){

    // const employee = useSelector(state => state.employees.employees[1])
    const employee = props.employee;

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

        <main id="EmployeeDetailsMain">

                <div id='EmployeeDetailsForm' >
{/* form section 1---------------------------------------------------------- */}

                    <section id="EmployeeDetailsFormSection1">

                        <h4 id="EmployeeDetailsFormSection1H4">Personal Information</h4>

                        <div id='firstName1Container' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"ID"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.id ? employee.id : nullReplacer}</div>
                        </div>


                        <div id='firstName1Container' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"firstName1"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.firstName1 ? employee.firstName1 : nullReplacer}</div>
                        </div>

                        <div id='firstName2Container' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"firstName2"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.firstName2 ? employee.firstName2 : nullReplacer}</div>
                        </div>

                        <div id='middleNameContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"middleName"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.middleName ? employee.middleName : nullReplacer}</div>
                        </div>

                        <div id='lastName1Container' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"lastName1"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.lastName1 ? employee.lastName1 : nullReplacer}</div>
                        </div>

                        <div id='lastName2Container' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"lastName2"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.lastName2 ? employee.lastName2 : nullReplacer}</div>
                        </div>

                        <div id='personalEmailContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"personalEmail"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.personalEmail ? employee.personalEmail : nullReplacer}</div>
                        </div>

                        <div id='personalPhoneContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"personalPhone"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.personalPhone ? employee.personalPhone : nullReplacer}</div>
                        </div>

                        <div id='streetContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"street"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.street ? employee.street : nullReplacer}</div>
                        </div>

                        <div id='cityContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"city"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.city ? employee.city : nullReplacer}</div>
                        </div>

                        <div id='stateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"state"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.state ? employee.state : nullReplacer}</div>
                        </div>

                        <div id='zipContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"zip"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.zip ? employee.zip : nullReplacer}</div>
                        </div>

                        <div id='dobContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"dob"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.dob ? employee.dob : nullReplacer}</div>
                        </div>

                        <div id='ageContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"age"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.age ? employee.age : nullReplacer}</div>
                        </div>

                        <div id='ssnContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"ssn"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.ssn ? employee.ssn : nullReplacer}</div>
                        </div>





                    </section>

                    <hr className='EmployeeDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                    <section id="EmployeeDetailsFormSection2">
                        <h4 id="EmployeeDetailsFormSection2H4">Employment Information</h4>




                        <div id='employeeDepartment_IdContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"employeeDepartment_Id"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.employeeDepartment_Id ? employee.employeeDepartment_Id : nullReplacer}</div>
                        </div>

                        <div id='academicDepartment_IdContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"academicDepartment_Id"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.academicDepartment_Id ? employee.academicDepartment_Id : nullReplacer}</div>
                        </div>

                        <div id='userType_IdContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"userType_Id"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.userType_Id ? employee.userType_Id : nullReplacer}</div>
                        </div>

                        <div id='primaryTitleContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"primaryTitle"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.primaryTitle ? employee.primaryTitle : nullReplacer}</div>
                        </div>

                        <div id='primaryStartDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"primaryStartDate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.primaryStartDate ? employee.primaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='primaryEndDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"primaryEndDate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.primaryEndDate ? employee.primaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='primaryPayRateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"primaryPayRate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.primaryPayRate ? employee.primaryPayRate : nullReplacer}</div>
                        </div>





                    </section>
                    <hr className='EmployeeDetailsHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                    <section id="EmployeeDetailsFormSection3">
                        <h4 id="EmployeeDetailsFormSection3H4">Biographical Information</h4>



                        <div id='firstLangContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"firstLang"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.firstLang ? employee.firstLang : nullReplacer}</div>
                        </div>

                        <div id='secondLangContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"secondLang"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondLang ? employee.secondLang : nullReplacer}</div>
                        </div>

                        <div id='thirdLangContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"thirdLang"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.thirdLang ? employee.thirdLang : nullReplacer}</div>
                        </div>

                        <div id='firstInstContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"firstInst"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.firstInst ? employee.firstInst : nullReplacer}</div>
                        </div>

                        <div id='secondInstContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"secondInst"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondInst ? employee.secondInst : nullReplacer}</div>
                        </div>

                        <div id='thirdInstContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"thirdInst"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.thirdInst ? employee.thirdInst : nullReplacer}</div>
                        </div>

                        <div id='biographyContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"biography"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.biography ? employee.biography : nullReplacer}</div>
                        </div>

                        <div id='notesContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"notes"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.notes ? employee.notes : nullReplacer}</div>
                        </div>





                    </section>
                    <hr className='EmployeeDetailsHr'></hr>



{/* form section 4---------------------------------------------------------- */}




                    <section id="EmployeeDetailsFormSection4">
                        <h4 id="EmployeeDetailsFormSection4H4">Additional Employment Information</h4>

        {/* -------------------------------- SECONDARY -----------------------------*/}

                        <div id='secondaryTitleContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"secondaryTitle"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondaryTitle ? employee.secondaryTitle : nullReplacer}</div>
                        </div>

                        <div id='secondaryStartDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"secondaryStartDate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondaryStartDate ? employee.secondaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='secondaryEndDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"secondaryEndDate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondaryEndDate ? employee.secondaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='secondaryPayRateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"secondaryPayRate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondaryPayRate ? employee.secondaryPayRate : nullReplacer}</div>
                        </div>


         {/* ---------------------------------- TERTIARY -----------------------------*/}

                        <div id='tertiaryTitleContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"tertiaryTitle"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.tertiaryTitle ? employee.tertiaryTitle : nullReplacer}</div>
                        </div>

                        <div id='tertiaryStartDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"tertiaryStartDate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.tertiaryStartDate ? employee.tertiaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='tertiaryEndDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"tertiaryEndDate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.tertiaryEndDate ? employee.tertiaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='tertiaryPayRateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"tertiaryPayRate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.tertiaryPayRate ? employee.tertiaryPayRate : nullReplacer}</div>
                        </div>




        {/* -------------------------------- QUARTERNARY -----------------------------*/}

                        <div id='quarternaryTitleContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"quarternaryTitle"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.quarternaryTitle ? employee.quarternaryTitle : nullReplacer}</div>
                        </div>

                        <div id='quarternaryStartDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"quarternaryStartDate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.quarternaryStartDate ? employee.quarternaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='quarternaryEndDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"quarternaryEndDate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.quarternaryEndDate ? employee.quarternaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='quarternaryPayRateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"quarternaryPayRate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.quarternaryPayRate ? employee.quarternaryPayRate : nullReplacer}</div>
                        </div>




                    </section>
                    <hr className='EmployeeDetailsHr'></hr>



{/* to top button---------------------------------------------------------- */}

                        <div id="EmployeeDetailsButtonContainer">
                            <button
                                id="EmployeeDetailsButton"
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
export default EmployeeDetails;
