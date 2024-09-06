//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "StudentDetails";

import './StudentDetails.css';

//==================PROGRAM IMPORTS=====================//
// import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function StudentDetails(props){

    // const student = useSelector(state => state.students.students[1])
    const student = props.student;

    // const studentObjectKeys = Object.keys(student);
    // const studentObjectValues = Object.values(student);
    // const studentObjectEntries = Object.entries(student);

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

        <main id="StudentDetailsMain">

                <div id='StudentDetailsForm' >
{/* form section 1---------------------------------------------------------- */}

                    <section id="StudentDetailsFormSection1">

                        <h4 id="StudentDetailsFormSection1H4">Personal Information</h4>

                        <div id='firstNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"ID"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.id ? student.id : nullReplacer}</div>
                        </div>


                        <div id='firstNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"firstName"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.firstName ? student.firstName : nullReplacer}</div>
                        </div>

                        <div id='nickNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"nickName"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.nickName ? student.nickName : nullReplacer}</div>
                        </div>

                        <div id='middleNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"middleName"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.middleName ? student.middleName : nullReplacer}</div>
                        </div>

                        <div id='lastNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"lastName"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.lastName ? student.lastName : nullReplacer}</div>
                        </div>

                        <div id='familyNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"familyName"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.familyName ? student.familyName : nullReplacer}</div>
                        </div>

                        <div id='emailContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"email"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.email ? student.email : nullReplacer}</div>
                        </div>

                        <div id='phoneContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"phone"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.phone ? student.phone : nullReplacer}</div>
                        </div>

                        <div id='streetContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"street"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.street ? student.street : nullReplacer}</div>
                        </div>

                        <div id='cityContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"city"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.city ? student.city : nullReplacer}</div>
                        </div>

                        <div id='stateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"state"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.state ? student.state : nullReplacer}</div>
                        </div>

                        <div id='zipContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"zip"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.zip ? student.zip : nullReplacer}</div>
                        </div>

                        <div id='dobContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"dob"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.dob ? student.dob : nullReplacer}</div>
                        </div>

                        <div id='ageContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"age"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.age ? student.age : nullReplacer}</div>
                        </div>

                        <div id='ssnContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"ssn"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.ssn ? student.ssn : nullReplacer}</div>
                        </div>





                    </section>

                    <hr className='StudentDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                    <section id="StudentDetailsFormSection2">
                        <h4 id="StudentDetailsFormSection2H4">Employment Information</h4>




                        <div id='studentDepartment_IdContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"studentDepartment_Id"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.studentDepartment_Id ? student.studentDepartment_Id : nullReplacer}</div>
                        </div>

                        <div id='academicDepartment_IdContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"academicDepartment_Id"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.academicDepartment_Id ? student.academicDepartment_Id : nullReplacer}</div>
                        </div>

                        <div id='level_IdContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"level_Id"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.level_Id ? student.level_Id : nullReplacer}</div>
                        </div>

                        <div id='primaryTitleContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"primaryTitle"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.primaryTitle ? student.primaryTitle : nullReplacer}</div>
                        </div>

                        <div id='primaryStartDateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"primaryStartDate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.primaryStartDate ? student.primaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='primaryEndDateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"primaryEndDate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.primaryEndDate ? student.primaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='primaryPayRateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"primaryPayRate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.primaryPayRate ? student.primaryPayRate : nullReplacer}</div>
                        </div>





                    </section>
                    <hr className='StudentDetailsHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                    <section id="StudentDetailsFormSection3">
                        <h4 id="StudentDetailsFormSection3H4">Biographical Information</h4>



                        <div id='firstLangContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"firstLang"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.firstLang ? student.firstLang : nullReplacer}</div>
                        </div>

                        <div id='secondLangContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"secondLang"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.secondLang ? student.secondLang : nullReplacer}</div>
                        </div>

                        <div id='thirdLangContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"thirdLang"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.thirdLang ? student.thirdLang : nullReplacer}</div>
                        </div>

                        <div id='firstInstContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"firstInst"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.firstInst ? student.firstInst : nullReplacer}</div>
                        </div>

                        <div id='secondInstContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"secondInst"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.secondInst ? student.secondInst : nullReplacer}</div>
                        </div>

                        <div id='thirdInstContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"thirdInst"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.thirdInst ? student.thirdInst : nullReplacer}</div>
                        </div>

                        <div id='biographyContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"biography"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.biography ? student.biography : nullReplacer}</div>
                        </div>

                        <div id='notesContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"notes"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.notes ? student.notes : nullReplacer}</div>
                        </div>





                    </section>
                    <hr className='StudentDetailsHr'></hr>



{/* form section 4---------------------------------------------------------- */}




                    <section id="StudentDetailsFormSection4">
                        <h4 id="StudentDetailsFormSection4H4">Additional Employment Information</h4>

        {/* -------------------------------- SECONDARY -----------------------------*/}

                        <div id='secondaryTitleContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"secondaryTitle"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.secondaryTitle ? student.secondaryTitle : nullReplacer}</div>
                        </div>

                        <div id='secondaryStartDateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"secondaryStartDate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.secondaryStartDate ? student.secondaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='secondaryEndDateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"secondaryEndDate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.secondaryEndDate ? student.secondaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='secondaryPayRateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"secondaryPayRate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.secondaryPayRate ? student.secondaryPayRate : nullReplacer}</div>
                        </div>


         {/* ---------------------------------- TERTIARY -----------------------------*/}

                        <div id='tertiaryTitleContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"tertiaryTitle"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.tertiaryTitle ? student.tertiaryTitle : nullReplacer}</div>
                        </div>

                        <div id='tertiaryStartDateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"tertiaryStartDate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.tertiaryStartDate ? student.tertiaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='tertiaryEndDateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"tertiaryEndDate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.tertiaryEndDate ? student.tertiaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='tertiaryPayRateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"tertiaryPayRate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.tertiaryPayRate ? student.tertiaryPayRate : nullReplacer}</div>
                        </div>




        {/* -------------------------------- QUARTERNARY -----------------------------*/}

                        <div id='quarternaryTitleContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"quarternaryTitle"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.quarternaryTitle ? student.quarternaryTitle : nullReplacer}</div>
                        </div>

                        <div id='quarternaryStartDateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"quarternaryStartDate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.quarternaryStartDate ? student.quarternaryStartDate : nullReplacer}</div>
                        </div>

                        <div id='quarternaryEndDateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"quarternaryEndDate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.quarternaryEndDate ? student.quarternaryEndDate : nullReplacer}</div>
                        </div>

                        <div id='quarternaryPayRateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"quarternaryPayRate"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.quarternaryPayRate ? student.quarternaryPayRate : nullReplacer}</div>
                        </div>




                    </section>
                    <hr className='StudentDetailsHr'></hr>



{/* to top button---------------------------------------------------------- */}

                        <div id="StudentDetailsButtonContainer">
                            <button
                                id="StudentDetailsButton"
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
export default StudentDetails;
