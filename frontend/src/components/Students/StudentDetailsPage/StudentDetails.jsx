//============CSS IMPORT AND BASE CLASS NAME============//

// const BCIN = "StudentDetails";

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
                                <div className='StudentDetailsFormLabel'>{"First Name"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.firstName ? student.firstName : nullReplacer}</div>
                        </div>

                        <div id='nickNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Nick Name"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.nickName ? student.nickName : nullReplacer}</div>
                        </div>

                        <div id='middleNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Middle Name"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.middleName ? student.middleName : nullReplacer}</div>
                        </div>

                        <div id='lastNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Last Name"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.lastName ? student.lastName : nullReplacer}</div>
                        </div>

                        <div id='familyNameContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Famil Name"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.familyName ? student.familyName : nullReplacer}</div>
                        </div>

                        <div id='emailContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Email"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.email ? student.email : nullReplacer}</div>
                        </div>

                        <div id='phoneContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Phone"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.phone ? student.phone : nullReplacer}</div>
                        </div>

                        <div id='streetContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Street"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.street ? student.street : nullReplacer}</div>
                        </div>

                        <div id='cityContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"City"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.city ? student.city : nullReplacer}</div>
                        </div>

                        <div id='stateContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"State"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.state ? student.state : nullReplacer}</div>
                        </div>

                        <div id='zipContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Zip"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.zip ? student.zip : nullReplacer}</div>
                        </div>

                        <div id='dobContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"DOB"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.dob ? student.dob : nullReplacer}</div>
                        </div>


                    </section>

                    <hr className='StudentDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                    <section id="StudentDetailsFormSection2">
                        <h4 id="StudentDetailsFormSection2H4">Account Information</h4>




                        <div id='household_IdContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Household ID"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.household_Id ? student.household_Id : nullReplacer}</div>
                        </div>

                        <div id='headOfHouseholdContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Head Of Household"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{
                                        student.headOfHousehold === null ? nullReplacer :
                                                ((student.headOfHousehold.toString() === "true")||
                                                (student.headOfHousehold.toString() === "false")) ? student.headOfHousehold.toString() : nullReplacer}</div>
                        </div>

                        <div id='yearlyIncomeContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Yearly Income"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.yearlyIncome ? student.yearlyIncome : nullReplacer}</div>
                        </div>

                        <div id='level_IdContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Level ID"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.level_Id ? student.level_Id : nullReplacer}</div>
                        </div>



                    </section>
                    <hr className='StudentDetailsHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                    <section id="StudentDetailsFormSection3">
                        <h4 id="StudentDetailsFormSection3H4">Biographical Information</h4>



                        <div id='firstLangContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"First Language"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.firstLang ? student.firstLang : nullReplacer}</div>
                        </div>

                        <div id='secondLangContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Second Language"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.secondLang ? student.secondLang : nullReplacer}</div>
                        </div>

                        <div id='thirdLangContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Third Language"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.thirdLang ? student.thirdLang : nullReplacer}</div>
                        </div>

                        <div id='firstInstContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"First Instrument"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.firstInst ? student.firstInst : nullReplacer}</div>
                        </div>

                        <div id='secondInstContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Second Instrument"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.secondInst ? student.secondInst : nullReplacer}</div>
                        </div>

                        <div id='thirdInstContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Third Instrument"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.thirdInst ? student.thirdInst : nullReplacer}</div>
                        </div>

                        <div id='biographyContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Biography"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.biography ? student.biography : nullReplacer}</div>
                        </div>

                        <div id='notesContainer' className='StudentDetailsFormLabelInputContainer'>
                                <div className='StudentDetailsFormLabel'>{"Notes"}</div>
                                <div className='StudentDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='StudentDetailsFormInput'>{student.notes ? student.notes : nullReplacer}</div>
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
