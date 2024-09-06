//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "EmployeeDepartmentDetails";

import './EmployeeDepartmentDetails.css';

//==================PROGRAM IMPORTS=====================//
// import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function EmployeeDepartmentDetails(props){

    // const employeeDepartment = useSelector(state => state.employeeDepartments.employeeDepartments[1])
    const employeeDepartment = props.employeeDepartment;

    // const employeeDepartmentObjectKeys = Object.keys(employeeDepartment);
    // const employeeDepartmentObjectValues = Object.values(employeeDepartment);
    // const employeeDepartmentObjectEntries = Object.entries(employeeDepartment);

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

                        <div id='firstNameContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"ID"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.id ? employeeDepartment.id : nullReplacer}</div>
                        </div>


                        <div id='firstNameContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"firstName"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.firstName ? employeeDepartment.firstName : nullReplacer}</div>
                        </div>

                        <div id='nickNameContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"nickName"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.nickName ? employeeDepartment.nickName : nullReplacer}</div>
                        </div>

                        <div id='middleNameContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"middleName"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.middleName ? employeeDepartment.middleName : nullReplacer}</div>
                        </div>

                        <div id='lastNameContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"lastName"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.lastName ? employeeDepartment.lastName : nullReplacer}</div>
                        </div>

                        <div id='familyNameContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"familyName"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.familyName ? employeeDepartment.familyName : nullReplacer}</div>
                        </div>

                        <div id='emailContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"email"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.email ? employeeDepartment.email : nullReplacer}</div>
                        </div>

                        <div id='phoneContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"phone"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.phone ? employeeDepartment.phone : nullReplacer}</div>
                        </div>

                        <div id='streetContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"street"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.street ? employeeDepartment.street : nullReplacer}</div>
                        </div>

                        <div id='cityContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"city"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.city ? employeeDepartment.city : nullReplacer}</div>
                        </div>

                        <div id='stateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"state"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.state ? employeeDepartment.state : nullReplacer}</div>
                        </div>

                        <div id='zipContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"zip"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.zip ? employeeDepartment.zip : nullReplacer}</div>
                        </div>

                        <div id='dobContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"dob"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.dob ? employeeDepartment.dob : nullReplacer}</div>
                        </div>

                        <div id='ageContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"age"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.age ? employeeDepartment.age : nullReplacer}</div>
                        </div>

                        <div id='ssnContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"ssn"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.ssn ? employeeDepartment.ssn : nullReplacer}</div>
                        </div>





                    </section>

                    <hr className='EmployeeDepartmentDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                    <section id="EmployeeDepartmentDetailsFormSection2">
                        <h4 id="EmployeeDepartmentDetailsFormSection2H4">Employment Information</h4>




                        <div id='employeeDepartment_IdContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"employeeDepartment_Id"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.employeeDepartment_Id ? employeeDepartment.employeeDepartment_Id : nullReplacer}</div>
                        </div>

                        <div id='academicDepartment_IdContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"academicDepartment_Id"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.academicDepartment_Id ? employeeDepartment.academicDepartment_Id : nullReplacer}</div>
                        </div>

                        <div id='level_IdContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"level_Id"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.level_Id ? employeeDepartment.level_Id : nullReplacer}</div>
                        </div>

                        <div id='primaryTitleContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"primaryTitle"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.primaryTitle ? employeeDepartment.primaryTitle : nullReplacer}</div>
                        </div>

                        <div id='primaryStartDateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"primaryStartDate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.primaryStartDate ? employeeDepartment.primaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='primaryEndDateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"primaryEndDate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.primaryEndDate ? employeeDepartment.primaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='primaryPayRateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"primaryPayRate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.primaryPayRate ? employeeDepartment.primaryPayRate : nullReplacer}</div>
                        </div>





                    </section>
                    <hr className='EmployeeDepartmentDetailsHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                    <section id="EmployeeDepartmentDetailsFormSection3">
                        <h4 id="EmployeeDepartmentDetailsFormSection3H4">Biographical Information</h4>



                        <div id='firstLangContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"firstLang"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.firstLang ? employeeDepartment.firstLang : nullReplacer}</div>
                        </div>

                        <div id='secondLangContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"secondLang"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.secondLang ? employeeDepartment.secondLang : nullReplacer}</div>
                        </div>

                        <div id='thirdLangContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"thirdLang"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.thirdLang ? employeeDepartment.thirdLang : nullReplacer}</div>
                        </div>

                        <div id='firstInstContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"firstInst"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.firstInst ? employeeDepartment.firstInst : nullReplacer}</div>
                        </div>

                        <div id='secondInstContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"secondInst"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.secondInst ? employeeDepartment.secondInst : nullReplacer}</div>
                        </div>

                        <div id='thirdInstContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"thirdInst"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.thirdInst ? employeeDepartment.thirdInst : nullReplacer}</div>
                        </div>

                        <div id='biographyContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"biography"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.biography ? employeeDepartment.biography : nullReplacer}</div>
                        </div>

                        <div id='notesContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"notes"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.notes ? employeeDepartment.notes : nullReplacer}</div>
                        </div>





                    </section>
                    <hr className='EmployeeDepartmentDetailsHr'></hr>



{/* form section 4---------------------------------------------------------- */}




                    <section id="EmployeeDepartmentDetailsFormSection4">
                        <h4 id="EmployeeDepartmentDetailsFormSection4H4">Additional Employment Information</h4>

        {/* -------------------------------- SECONDARY -----------------------------*/}

                        <div id='secondaryTitleContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"secondaryTitle"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.secondaryTitle ? employeeDepartment.secondaryTitle : nullReplacer}</div>
                        </div>

                        <div id='secondaryStartDateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"secondaryStartDate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.secondaryStartDate ? employeeDepartment.secondaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='secondaryEndDateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"secondaryEndDate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.secondaryEndDate ? employeeDepartment.secondaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='secondaryPayRateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"secondaryPayRate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.secondaryPayRate ? employeeDepartment.secondaryPayRate : nullReplacer}</div>
                        </div>


         {/* ---------------------------------- TERTIARY -----------------------------*/}

                        <div id='tertiaryTitleContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"tertiaryTitle"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.tertiaryTitle ? employeeDepartment.tertiaryTitle : nullReplacer}</div>
                        </div>

                        <div id='tertiaryStartDateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"tertiaryStartDate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.tertiaryStartDate ? employeeDepartment.tertiaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='tertiaryEndDateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"tertiaryEndDate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.tertiaryEndDate ? employeeDepartment.tertiaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='tertiaryPayRateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"tertiaryPayRate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.tertiaryPayRate ? employeeDepartment.tertiaryPayRate : nullReplacer}</div>
                        </div>




        {/* -------------------------------- QUARTERNARY -----------------------------*/}

                        <div id='quarternaryTitleContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"quarternaryTitle"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.quarternaryTitle ? employeeDepartment.quarternaryTitle : nullReplacer}</div>
                        </div>

                        <div id='quarternaryStartDateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"quarternaryStartDate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.quarternaryStartDate ? employeeDepartment.quarternaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='quarternaryEndDateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"quarternaryEndDate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.quarternaryEndDate ? employeeDepartment.quarternaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='quarternaryPayRateContainer' className='EmployeeDepartmentDetailsFormLabelInputContainer'>
                                <div className='EmployeeDepartmentDetailsFormLabel'>{"quarternaryPayRate"}</div>
                                <div className='EmployeeDepartmentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='EmployeeDepartmentDetailsFormInput'>{employeeDepartment.quarternaryPayRate ? employeeDepartment.quarternaryPayRate : nullReplacer}</div>
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
