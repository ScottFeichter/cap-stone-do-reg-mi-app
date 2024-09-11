//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "EmployeeDetails";

import './EmployeeDetails.css';

//==================PROGRAM IMPORTS=====================//
// import { useSelector } from 'react-redux';


//================COMPONENT IMPORTS=====================//

// import camelCaseToTitleCase from "../../_Helpers/camelCaseToTitleCase/camelCaseToTitleCase.js";


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

                        <div className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"ID"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.id ? employee.id : nullReplacer}</div>
                        </div>


                        <div className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"First Name"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.firstName ? employee.firstName : nullReplacer}</div>
                        </div>

                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Nick Name"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.nickName ? employee.nickName : nullReplacer}</div>
                        </div>

                        <div className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Middle Name"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.middleName ? employee.middleName : nullReplacer}</div>
                        </div>

                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Last Name"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.lastName ? employee.lastName : nullReplacer}</div>
                        </div>

                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Family Name"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.familyName ? employee.familyName : nullReplacer}</div>
                        </div>

                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Email"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.email ? employee.email : nullReplacer}</div>
                        </div>

                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Phone"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.phone ? employee.phone : nullReplacer}</div>
                        </div>

                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Street"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.street ? employee.street : nullReplacer}</div>
                        </div>

                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"City"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.city ? employee.city : nullReplacer}</div>
                        </div>

                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"State"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.state ? employee.state : nullReplacer}</div>
                        </div>

                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Zip"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.zip ? employee.zip : nullReplacer}</div>
                        </div>

                        <div className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"DOB"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.dob ? employee.dob : nullReplacer}</div>
                        </div>



                        <div  className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"SSN"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.ssn ? employee.ssn : nullReplacer}</div>
                        </div>





                    </section>

                    <hr className='EmployeeDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                    <section id="EmployeeDetailsFormSection2">
                        <h4 id="EmployeeDetailsFormSection2H4">Employment Information</h4>




                        <div id='employeeDepartment_IdContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Employee Department ID"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.employeeDepartment_Id ? employee.employeeDepartment_Id : nullReplacer}</div>
                        </div>

                        <div id='academicDepartment_IdContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Academic Department ID"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.academicDepartment_Id ? employee.academicDepartment_Id : nullReplacer}</div>
                        </div>

                        <div id='level_IdContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Level ID"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.level_Id ? employee.level_Id : nullReplacer}</div>
                        </div>

                        <div id='primaryTitleContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Primary Title"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.primaryTitle ? employee.primaryTitle : nullReplacer}</div>
                        </div>

                        <div id='primaryStartDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Primary Start Date"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.primaryStartDate ? employee.primaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='primaryEndDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Primary End Date"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.primaryEndDate ? employee.primaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='primaryPayRateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Primary Pay Rate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.primaryPayRate ? employee.primaryPayRate : nullReplacer}</div>
                        </div>





                    </section>
                    <hr className='EmployeeDetailsHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                    <section id="EmployeeDetailsFormSection3">
                        <h4 id="EmployeeDetailsFormSection3H4">Biographical Information</h4>



                        <div id='firstLangContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"First Language"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.firstLang ? employee.firstLang : nullReplacer}</div>
                        </div>

                        <div id='secondLangContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Second Language"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondLang ? employee.secondLang : nullReplacer}</div>
                        </div>

                        <div id='thirdLangContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Third Language"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.thirdLang ? employee.thirdLang : nullReplacer}</div>
                        </div>

                        <div id='firstInstContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"First Instrument"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.firstInst ? employee.firstInst : nullReplacer}</div>
                        </div>

                        <div id='secondInstContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Second Instrument"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondInst ? employee.secondInst : nullReplacer}</div>
                        </div>

                        <div id='thirdInstContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Third Instrument"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.thirdInst ? employee.thirdInst : nullReplacer}</div>
                        </div>

                        <div id='biographyContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Biography"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.biography ? employee.biography : nullReplacer}</div>
                        </div>

                        <div id='notesContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Notes"}</div>
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
                                <div className='EmployeeDetailsFormLabel'>{"Secondary Title"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondaryTitle ? employee.secondaryTitle : nullReplacer}</div>
                        </div>

                        <div id='secondaryStartDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Secondary Start Date"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondaryStartDate ? employee.secondaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='secondaryEndDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Secondary End Date"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondaryEndDate ? employee.secondaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='secondaryPayRateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Secondary Pay Rate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.secondaryPayRate ? employee.secondaryPayRate : nullReplacer}</div>
                        </div>


         {/* ---------------------------------- TERTIARY -----------------------------*/}

                        <div id='tertiaryTitleContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Tertiary Title"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.tertiaryTitle ? employee.tertiaryTitle : nullReplacer}</div>
                        </div>

                        <div id='tertiaryStartDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Tertiary Start Date"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.tertiaryStartDate ? employee.tertiaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='tertiaryEndDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Tertiary End Date"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.tertiaryEndDate ? employee.tertiaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='tertiaryPayRateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Tertiary Pay Rate"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.tertiaryPayRate ? employee.tertiaryPayRate : nullReplacer}</div>
                        </div>




        {/* -------------------------------- QUARTERNARY -----------------------------*/}

                        <div id='quarternaryTitleContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Quarternary Title"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.quarternaryTitle ? employee.quarternaryTitle : nullReplacer}</div>
                        </div>

                        <div id='quarternaryStartDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Quarternary Start Date"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.quarternaryStartDate ? employee.quarternaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='quarternaryEndDateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Quarternary End Date"}</div>
                                <div className='EmployeeDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDetailsFormInput'>{employee.quarternaryEndDate ? employee.quarternaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='quarternaryPayRateContainer' className='EmployeeDetailsFormLabelInputContainer'>
                                <div className='EmployeeDetailsFormLabel'>{"Quarternary Pay Rate"}</div>
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
