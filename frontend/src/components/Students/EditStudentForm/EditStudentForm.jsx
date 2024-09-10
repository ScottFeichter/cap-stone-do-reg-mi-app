import './EditStudentForm.css';
// const BASE_CLASS_NAME = "EditStudentForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';

import { TbPlayerSkipBackFilled } from "react-icons/tb";
// import { TbPlayerSkipForwardFilled } from "react-icons/tb";

import * as studentsActions from '../../../redux/studentsReducer.js';



function EditStudentForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const location = useLocation();
        const {studentToEdit} = location.state;

        console.log("studentToEdit : ", studentToEdit.id)

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsFirstName, setErrorsFirstName] = useState({});
        const [errorsLastName, setErrorsLastName] = useState({});
        const [errorsPhone, setErrorsPhone] = useState({});
        const [errorsFirstLang, setErrorsFirstLang] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});



        //-----must be integers
        const [errorsHousehold_Id, setErrorsHousehold_Id] = useState({})
        const [errorsLevel_Id, setErrorsLevel_Id ] = useState({})
        const [errorsYearlyIncome, setErrorsYearlyIncome] = useState({})




        //-----must be bools
        const [errorsHeadOfHousehold, setErrorsHeadOfHousehold ] = useState({})


        // const [isDisabled, setIsDisabled] = useState(false);


        let editedStudent = {

            // personal information form section 1----------------------------------------------------------
                        firstName	            :	null	,
                        nickName	            :	null	,
                        middleName	            :	null	,
                        lastName	            :	null	,
                        familyName	            :	null	,
                        email	                :	null	,
                        phone	                :	null	,
                        street	                :	null	,
                        city	                :	null	,
                        state	                :	null	,
                        zip	                    :	null	,
                        dob	                    :	null	,


            // account information form section 2----------------------------------------------------------
                        household_Id	        :	null	,
                        headOfHousehold	        :	null	,
                        yearlyIncome	        :	null	,
                        level_Id	            :	null	,


            // biographical information form section 3----------------------------------------------------------
                        firstLang	            :	null	,
                        secondLang	            :	null	,
                        thirdLang	            :	null	,
                        firstInst	            :	null	,
                        secondInst	            :	null	,
                        thirdInst	            :	null	,
                        biography	            :	null	,
                        notes	                :	null	,

            // additional information form section 4----------------------------------------------------------


                    }


            // personal information form section 1----------------------------------------------------------




            const [firstName, setFirstName] = useState(studentToEdit.firstName || "");
            const [nickName, setNickName] = useState(studentToEdit.nickName || "");
            const [middleName, setMiddleName] = useState(studentToEdit.middleName || "");
            const [lastName, setLastName] = useState(studentToEdit.lastName || "");
            const [familyName, setFamilyName] = useState(studentToEdit.familyName || "");
            const [email, setPersonalEmail] = useState(studentToEdit.email || "");
            const [phone, setPhone] = useState(studentToEdit.phone || "");
            const [street, setStreet] = useState(studentToEdit.street || "");
            const [city, setCity] = useState(studentToEdit.city || "");
            const [state, setState] = useState(studentToEdit.state || "");
            const [zip, setZip] = useState(studentToEdit.zip || "");
            const [dob, setDob] = useState(studentToEdit.dob || "");





            // account information form section 2----------------------------------------------------------

            const [household_Id, setHousehold_Id] = useState(studentToEdit.household_Id || "");
            const [headOfHousehold, setHeadOfHousehold] = useState(studentToEdit.headOfHousehold || "");
            const [yearlyIncome, setYearlyIncome] = useState(studentToEdit.yearlyIncome || "");
            const [level_Id, setLevel_Id] = useState(studentToEdit.level_Id || "");




            // biographical information form section 3----------------------------------------------------------


            const [firstLang, setFirstLang] = useState(studentToEdit.firstLang || "");
            const [secondLang, setSecondLang] = useState(studentToEdit.secondLang || "");
            const [thirdLang, setThirdLang] = useState(studentToEdit.thirdLang || "");
            const [firstInst, setFirstInst] = useState(studentToEdit.firstInst || "");
            const [secondInst, setSecondInst] = useState(studentToEdit.secondInst || "");
            const [thirdInst, setThirdInst] = useState(studentToEdit.thirdInst || "");
            const [biography, setBiography] = useState(studentToEdit.biography || "");
            const [notes, setNotes] = useState(studentToEdit.notes || "");



            // additional information section 4----------------------------------------------------------








// HELPERS FOR EditStudent Button handler---------------------------------------------------



// helper for handleSubmit check required fields
const checkRequired = () => {

    let firstNameBool = false;
    let lastNameBool = false;
    let phoneBool = false;
    let firstLangBool = false;



    if(!firstName) {
        firstNameBool = true;
        setErrorsFirstName({firstName: "First Name 1 is required"});
    } else {
        firstNameBool = false;
        setErrorsFirstName({});
    }

    if(!lastName) {
        lastNameBool = true;
        setErrorsLastName({lastName: "Last Name 1 is required"});
    } else {
        lastNameBool = false;
        setErrorsLastName({});
    }

    if(!phone) {
        phoneBool = true;
        setErrorsPhone({phone: "Personal Phone is required"});
    } else {
        phoneBool = false;
        setErrorsPhone({});
    }

    if(!firstLang) {
        firstLangBool = true;
        setErrorsFirstLang({firstLang: "First Language is required"});

    } else {
        firstLangBool = false;
        setErrorsFirstLang({})
    }



    if (
        (firstNameBool) ||
        (lastNameBool) ||
        (phoneBool) ||
        (firstLangBool)
    ) {
        return true
    } else {
        return false;
    }

}




// helper for handleSubmit check integer fields
const checkInteger = () => {

    let household_IdNum = parseInt(household_Id);
    let level_IdNum = parseInt(level_Id);
    let yearlyIncomeNum = parseInt(level_Id);



    let household_IdErrorBool = false;
    let level_IdErrorBool = false;
    let yearlyIncomeErrorBool = false;


    if(household_Id !== "" && (typeof household_IdNum !== "number" || isNaN(household_IdNum))) {
        household_IdErrorBool = true;
        setErrorsHousehold_Id({household_Id: "Student Department ID must be an integer"});
    } else {
        household_IdErrorBool = false;
        setErrorsHousehold_Id({});
    }



    if(level_Id !== "" && (typeof level_IdNum !== "number" || isNaN(level_IdNum))){
        level_IdErrorBool = true;
        setErrorsLevel_Id({level_Id: "Level ID must be an integer"});
    } else {
        level_IdErrorBool = false;
        setErrorsLevel_Id({});
    }

    // console.log("yearlyIncome: ", yearlyIncome, typeof yearlyIncome);
    if(yearlyIncome !== "" && (typeof yearlyIncomeNum !== "number" || isNaN(yearlyIncomeNum))){
        yearlyIncomeErrorBool = true;
        setErrorsYearlyIncome({yearlyIncome: "Yearly income must be an integer"});
    } else {
        yearlyIncomeErrorBool = false;
        setErrorsYearlyIncome({});
    }


    if (
        (household_IdErrorBool) ||
        (level_IdErrorBool)     ||
        (yearlyIncomeErrorBool)
    ) {
        return true;
    } else {
        return false;
    }
}



// helper for handleSubmit check bool fields
const checkBool = () => {


    let headOfHouseholdBool = parseInt(headOfHousehold);
    let headOfHouseholdErrorBool = false;



    if(headOfHousehold !== "" && (typeof !!headOfHouseholdBool !== "boolean")) {
        headOfHouseholdErrorBool = true;
        setErrorsHeadOfHousehold({headOfHousehold: "Head of Household must be True or False"});
    } else {
        headOfHouseholdErrorBool = false;
        setErrorsHeadOfHousehold({});
    }



    if (
        (headOfHouseholdErrorBool)
    ) {
        return true;
    } else {
        return false;
    }
}




// -----------------------------HANDLE SUBMIT -------------------------------//
        const handleSubmit = async (e) => {
            e.preventDefault();
            // console.log('HANDLE SUBMIT EDIT EMPLOYEE IS RUNNING');

        // -----------------CLIENT SIDE VALIDATIONS-----------------------//

            if(checkRequired()) {

                setRequiredFieldsMessage({message: "Required field must be complete - see errors above."});
                // console.log("HANDLE SUBMIT STOPPED DUE TO REQUIRED FIELD MISSING INFORMATION")
                return
            } else {
                setRequiredFieldsMessage({});
            }


            if(checkInteger()) {
                setRequiredFieldsMessage({message: "Field(s) must be integers - see errors above."});
                // console.log("HANDLE SUBMIT STOPPED DUE TO FIELD(S) MUST BE INTEGERS")
                return
            } else {
                setRequiredFieldsMessage({});
            }


            if(checkBool()) {
                setRequiredFieldsMessage({message: "Field(s) must be True or False - see errors above."});
                // console.log("HANDLE SUBMIT STOPPED DUE TO FIELD(S) MUST BE TRUE OR FALSE")
                return
            } else {
                setRequiredFieldsMessage({});
            }



         // ---------------REPLACING NEW EMPLOYEE OBJECT VALUES WITH USER INPUT IF EXISTS---------//


         if(	household_Id	)	editedStudent	.	household_Id	=	household_Id	;
         if(	headOfHousehold	)	editedStudent	.	headOfHousehold	=	headOfHousehold	;
         if(	level_Id	)	editedStudent	.	level_Id	=	level_Id	;
         if(	firstName	)	editedStudent	.	firstName	=	firstName	;
         if(	nickName	)	editedStudent	.	nickName	=	nickName	;
         if(	middleName	)	editedStudent	.	middleName	=	middleName	;
         if(	lastName	)	editedStudent	.	lastName	=	lastName	;
         if(	familyName	)	editedStudent	.	familyName	=	familyName	;
         if(	email	)	editedStudent	.	email	=	email	;
         if(	phone	)	editedStudent	.	phone	=	phone	;
         if(	street	)	editedStudent	.	street	=	street	;
         if(	city	)	editedStudent	.	city	=	city	;
         if(	state	)	editedStudent	.	state	=	state	;
         if(	zip	)	editedStudent	.	zip	=	zip	;
         if(	dob	)	editedStudent	.	dob	=	dob	;
         if(	yearlyIncome	)	editedStudent	.	yearlyIncome	=	yearlyIncome	;
         if(	firstLang	)	editedStudent	.	firstLang	=	firstLang	;
         if(	secondLang	)	editedStudent	.	secondLang	=	secondLang	;
         if(	thirdLang	)	editedStudent	.	thirdLang	=	thirdLang	;
         if(	firstInst	)	editedStudent	.	firstInst	=	firstInst	;
         if(	secondInst	)	editedStudent	.	secondInst	=	secondInst	;
         if(	thirdInst	)	editedStudent	.	thirdInst	=	thirdInst	;
         if(	biography	)	editedStudent	.	biography	=	biography	;
         if(	notes	)	editedStudent	.	notes	=	notes	;

         editedStudent.id = studentToEdit.id;

         console.log("editedStudent 423: ", editedStudent)

         // --------------------------MAKING THE DISPATCH---------------------//
            let studentId;
            let editedStudentDetails;
            if(editedStudentDetails);

            await dispatch(studentsActions.thunkEditStudent(editedStudent))
            .then(response => {
                dispatch(studentsActions.thunkGetStudentsAll())
                console.log("response 432: ", response, "response.payload", response.payload, "response.payload[0]", response.payload.id);
                studentId = response.payload.id
                return studentId
            }).catch(async (res) => {
                    // console.log("res 439", res);
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(studentsActions.thunkGetStudentById(studentId)).then(response => {
                editedStudentDetails = response;

                navigate(`/students/${studentToEdit.id}`)
                return response
            });

            console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }


// =====================TRANSPORT BUTTONS HANDLERS=========================

        // -----------------------------HANDLE BACK -------------------------------//
        const handleBackClick = async (e) => {
            e.preventDefault();
            // console.log('HANDLE BACK');
            navigate(`/students/${studentToEdit.id}`);
        }

        // -----------------------------HANDLE FORWARD -------------------------------//
        // const handleForthClick = async (e) => {
        //     e.preventDefault();
        //     // console.log('HANDLE FORTH');
        //     navigate('/createNewFacilityForm');
        // }







// return-----------------------------------
        return (
          <main id="EditStudentMain">

            <h1 id='EditStudentH1'>Edit Student</h1>


            <div id="EditStudentTransportContainer">

                <button  id='EditStudentBack' onClick={handleBackClick}>
                    <TbPlayerSkipBackFilled id={`EditStudentTbPlayerBack`} />Back To Details
                </button>


                {/* <button id='EditStudentForth' onClick={handleForthClick}>Forth
                    <TbPlayerSkipForwardFilled id={`EditStudentTbPlayerForth`} />
                </button> */}

            </div>


                    <form id='EditStudentForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditStudentFormSection1">

                        <h4 id="EditStudentFormSection1H4">Personal Information</h4>

<p id="EditStudentFormSection1P">
    Enter personal information for new student.
</p>
<h5 className='EditStudentH5'>* indicates required field</h5>



<div id='firstNameContainer' className='EditStudentFormLabelInputContainer'>

            <p className='EditStudentFormRequired'>{required}</p>
            <label className='EditStudentFormLabel'>
                First Name:

                <input
                className='EditStudentFormInput'
                id="firstName"
                name="firstName"
                type="text"
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                />
            </label>

</div>
{errorsFirstName.firstName && <p className='EditStudentErrors'>{errorsFirstName.firstName}</p>}


<div id='nickNameContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Nick Name:
                <input
                className='EditStudentFormInput'
                id="nickName"
                name="nickName"
                type="text"
                placeholder='Nick Name'
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}

                />
            </label>

</div>
{errors.nickName && <p className='EditStudentErrors'>{errors.nickName}</p>}


<div id='middleNameContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Middle Name:
                <input
                className='EditStudentFormInput'
                id="middleName"
                name="middleName"
                type="text"
                placeholder='Middle Name'
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}

                />
            </label>

</div>
{errors.middleName && <p className='EditStudentErrors'>{errors.middleName}</p>}




<div id='lastNameContainer' className='EditStudentFormLabelInputContainer'>

            <p className='EditStudentFormRequired'>{required}</p>
            <label className='EditStudentFormLabel'>
                Last Name:
                <input
                className='EditStudentFormInput'
                id="lastName"
                name="lastName"
                type="text"
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                />
            </label>


</div>
{errorsLastName.lastName && <p className='EditStudentErrors'>{errorsLastName.lastName}</p>}



<div id='familyNameContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Family Name :
                <input
                className='EditStudentFormInput'
                id="familyName"
                name="familyName"
                type="text"
                placeholder='Family Name'
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}

                />
            </label>


</div>
{errors.familyName && <p className='EditStudentErrors'>{errors.familyName}</p>}




<div id='emailContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Email:
                <input
                className='EditStudentFormInput'
                id="email"
                name="email"
                type="text"
                placeholder='Email'
                value={email}
                onChange={(e) => setPersonalEmail(e.target.value)}

                />
            </label>

</div>
{errors.email && <p className='EditStudentErrors'>{errors.email}</p>}



<div id='phoneContainer' className='EditStudentFormLabelInputContainer'>

            <p className='EditStudentFormRequired'>{required}</p>
            <label className='EditStudentFormLabel'>
                Phone:
                <input
                className='EditStudentFormInput'
                id="phone"
                name="phone"
                type="text"
                placeholder='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                />
            </label>


</div>
{errorsPhone.phone && <p className='EditStudentErrors'>{errorsPhone.phone}</p>}




<div id='streetContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Street:
                <input
                className='EditStudentFormInput'
                id="street"
                name="street"
                type="text"
                placeholder='Street'
                value={street}
                onChange={(e) => setStreet(e.target.value)}

                />
            </label>

</div>
{errors.street && <p className='EditStudentErrors'>{errors.street}</p>}



<div id='cityContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                City:
                <input
                className='EditStudentFormInput'
                id="city"
                name="city"
                type="text"
                placeholder='City'
                value={city}
                onChange={(e) => setCity(e.target.value)}

                />
            </label>

</div>
{errors.city && <p className='EditStudentErrors'>{errors.city}</p>}


<div id='stateContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                State:
                <input
                className='EditStudentFormInput'
                id="state"
                name="state"
                type="text"
                placeholder='State'
                value={state}
                onChange={(e) => setState(e.target.value)}

                />
            </label>

</div>
{errors.state && <p className='EditStudentErrors'>{errors.state}</p>}


<div id='zipContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Zip:
                <input
                className='EditStudentFormInput'
                id="zip"
                name="zip"
                type="text"
                placeholder='Zip'
                value={zip}
                onChange={(e) => setZip(e.target.value)}

                />
            </label>

</div>
{errors.zip && <p className='EditStudentErrors'>{errors.zip}</p>}




<div id='dobContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Date Of Birth  (mm/dd/yyyy):
                <input
                className='EditStudentFormInput'
                id="dob"
                name="dob"
                type="text"
                placeholder='Date Of Birth  (mm/dd/yyyy)'
                value={dob}
                onChange={(e) => setDob(e.target.value)}

                />
            </label>

</div>
{errors.dob && <p className='EditStudentErrors'>{errors.dob}</p>}






</section>

<hr className='EditStudentHr'></hr>
{/* form section 2---------------------------------------------------------- */}

<section id="EditStudentFormSection2">

<h4 id="EditStudentFormSection2H4">Account Information</h4>

<p id="EditStudentFormSection2P">
    Enter account information for new student.
</p>
<h5 className='EditStudentH5'>* indicates required field</h5>



<div id='household_IdContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Household ID:
                <input
                className='EditStudentFormInput'
                id="household_Id"
                name="household_Id"
                type="text"
                placeholder='Household ID'
                value={household_Id}
                onChange={(e) => setHousehold_Id(e.target.value)}

                />
            </label>

</div>
{errorsHousehold_Id.household_Id && <p className='EditStudentErrors'>{errorsHousehold_Id.household_Id}</p>}



<div id='headOfHouseholdContainer' className='EditStudentFormLabelInputContainer'>
            <p className='EditStudentFormRequired'>{required}</p>
            <label className='EditStudentFormLabel'>
                Head Of Household:
                <input
                className='EditStudentFormInput'
                id="headOfHousehold"
                name="headOfHousehold"
                type="text"
                placeholder='True or False'
                value={headOfHousehold}
                onChange={(e) => setHeadOfHousehold(e.target.value)}

                />
            </label>

</div>
{errorsHeadOfHousehold.headOfHousehold && <p className='EditStudentErrors'>{errorsHeadOfHousehold.headOfHousehold}</p>}


<div id='yearlyIncomeContainer' className='EditStudentFormLabelInputContainer'>

    <label className='EditStudentFormLabel'>
        Yearly Income:
        <input
        className='EditStudentFormInput'
        id="yearlyIncome"
        name="yearlyIncome"
        type="text"
        placeholder='Yearly Income'
        value={yearlyIncome}
        onChange={(e) => setYearlyIncome(e.target.value)}

        />
    </label>

</div>
{errorsYearlyIncome.yearlyIncome && <p className='EditStudentErrors'>{errorsYearlyIncome.yearlyIncome}</p>}



<div id='level_IdContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Level ID:
                <input
                className='EditStudentFormInput'
                id="level_Id"
                name="level_Id"
                type="text"
                placeholder='Level ID'
                value={level_Id}
                onChange={(e) => setLevel_Id(e.target.value)}

                />
            </label>

</div>
{errorsLevel_Id.level_Id && <p className='EditStudentErrors'>{errorsLevel_Id.level_Id}</p>}






</section>

<hr className='EditStudentHr'></hr>

{/* form section 3---------------------------------------------------------- */}

<section id="EditStudentFormSection3">

<h4 id="EditStudentFormSection3H4">Biographical Information</h4>

<p id="EditStudentFormSection3P">
    Enter biographical information for new student.
</p>
<h5 className='EditStudentH5'>* indicates required field</h5>



<div id='firstLangContainer' className='EditStudentFormLabelInputContainer'>

            <p className='EditStudentFormRequired'>{required}</p>
            <label className='EditStudentFormLabel'>
                First Language:
                <input
                className='EditStudentFormInput'
                id="firstLang"
                name="firstLang"
                type="text"
                placeholder='First Language'
                value={firstLang}
                onChange={(e) => setFirstLang(e.target.value)}
                required
                />
            </label>


</div>
{errorsFirstLang.firstLang && <p className='EditStudentErrors'>{errorsFirstLang.firstLang}</p>}



<div id='secondLangContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Second Language:
                <input
                className='EditStudentFormInput'
                id="secondLang"
                name="secondLang"
                type="text"
                placeholder='Second Language'
                value={secondLang}
                onChange={(e) => setSecondLang(e.target.value)}

                />
            </label>

</div>
{errors.secondLang && <p className='EditStudentErrors'>{errors.secondLang}</p>}


<div id='thirdLangContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Third Language:
                <input
                className='EditStudentFormInput'
                id="thirdLang"
                name="thirdLang"
                type="text"
                placeholder='Third Language'
                value={thirdLang}
                onChange={(e) => setThirdLang(e.target.value)}

                />
            </label>

</div>
{errors.thirdLang && <p className='EditStudentErrors'>{errors.thirdLang}</p>}



<div id='firstInstContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                First Instrument:
                <input
                className='EditStudentFormInput'
                id="firstInst"
                name="firstInst"
                type="text"
                placeholder='First Instrument'
                value={firstInst}
                onChange={(e) => setFirstInst(e.target.value)}

                />
            </label>

</div>
{errors.firstInst && <p className='EditStudentErrors'>{errors.firstInst}</p>}



<div id='secondInstContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Second Instrument:
                <input
                className='EditStudentFormInput'
                id="secondInst"
                name="secondInst"
                type="text"
                placeholder='Second Instrument'
                value={secondInst}
                onChange={(e) => setSecondInst(e.target.value)}

                />
            </label>

</div>
{errors.secondInst && <p className='EditStudentErrors'>{errors.secondInst}</p>}




<div id='thirdInstContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Third Instrument:
                <input
                className='EditStudentFormInput'
                id="thirdInst"
                name="thirdInst"
                type="text"
                placeholder='Third Instrument'
                value={thirdInst}
                onChange={(e) => setThirdInst(e.target.value)}

                />
            </label>

</div>
{errors.thirdInst && <p className='EditStudentErrors'>{errors.thirdInst}</p>}





<div id='biographyContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Biography:
                <textarea
                className='EditStudentFormInput'
                id="biography"
                name="biography"
                rows={8}
                cols={40}
                type="text-area"
                placeholder="Enter biography here"
                value={biography}
                onChange={(e) => setBiography(e.target.value)}

                />
            </label>
</div>
{errors.biography && <p className='EditStudentErrors'>{errors.biography}</p>}




<div id='notesContainer' className='EditStudentFormLabelInputContainer'>

            <label className='EditStudentFormLabel'>
                Notes:
                <textarea
                className='EditStudentFormInput'
                id="notes"
                name="notes"
                rows={8}
                cols={40}
                type="text-area"
                placeholder="Enter notes here"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}

                />
            </label>
</div>
{errors.notes && <p className='EditStudentErrors'>{errors.notes}</p>}





</section>

<hr className='EditStudentHr'></hr>


{/* form section 4---------------------------------------------------------- */}




{/* <section id="EditStudentFormSection4">

<h4 id="EditStudentFormSection4H4">Additional Information</h4>

<p id="EditStudentFormSection4P">
Enter additional information for new student.
</p>
<h5 className='EditStudentH5'>* indicates required field</h5>


</section>

<hr className='EditStudentHr'></hr> */}




{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='EditStudentRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="EditStudentButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Submit Edit
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default EditStudentForm;
