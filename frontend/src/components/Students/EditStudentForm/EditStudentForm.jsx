import './EditStudentForm.css';
// const BASE_CLASS_NAME = "EditStudentForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import * as studentsActions from '../../../redux/studentsReducer.js';



function EditStudentForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const location = useLocation();
        const {studentToEdit} = location.state;

        // console.log("studentToEdit : ", studentToEdit)

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsFirstName, setErrorsFirstName] = useState({});
        const [errorsLastName, setErrorsLastName] = useState({});
        const [errorsPersonalPhone, setErrorsPersonalPhone] = useState({});
        const [errorsFirstLang, setErrorsFirstLang] = useState({});
        const [errorsSsn, setErrorsSsn] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});



        //-----must be integers
        const [errorsStudentDepartment_Id, setErrorsStudentDepartment_Id] = useState({})
        const [errorsAcademicDepartment_Id, setErrorsAcademicDepartment_Id ] = useState({})
        const [errorsUserType_Id, setErrorsUserType_Id ] = useState({})
        const [errorsZip, setErrorsZip ] = useState({})
        const [errorsPrimaryPayRate, setErrorsPrimaryPayRate ] = useState({})
        const [errorsSecondaryPayRate, setErrorsSecondaryPayRate ] = useState({})
        const [errorsTertiaryPayRate, setErrorsTertiaryPayRate ] = useState({})
        const [errorsQuarternaryPayRate, setErrorsQuarternaryPayRate ] = useState({})


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
            ssn	                    :	null	,

// employment information form section 2----------------------------------------------------------
            studentDepartment_Id	:	null	,
            academicDepartment_Id	:	null	,
            level_Id	            :	null	,
            primaryTitle	        :	null	,
            primaryStartDate	    :	null	,
            primaryEndDate	        :	null	,
            primaryPayRate	        :	null	,

// biographical information form section 3----------------------------------------------------------
            firstLang	            :	null	,
            secondLang	            :	null	,
            thirdLang	            :	null	,
            firstInst	            :	null	,
            secondInst	            :	null	,
            thirdInst	            :	null	,
            biography	            :	null	,
            notes	                :	null	,

// additional employment information form section 2----------------------------------------------------------
            secondaryTitle	        :	null	,
            secondaryStartDate	    :	null	,
            secondaryEndDate	    :	null	,
            secondaryPayRate	    :	null	,
            tertiaryTitle	        :	null	,
            tertiaryStartDate	    :	null	,
            tertiaryEndDate	        :	null	,
            tertiaryPayRate	        :	null	,
            quarternaryTitle	    :	null	,
            quarternaryStartDate	:	null	,
            quarternaryEndDate	    :	null	,
            quarternaryPayRate	    :	null	,

        }



    const [studentDepartment_Id,setStudentDepartment_Id] = useState(studentToEdit.studentDepartment_Id||"")
    const [academicDepartment_Id,setAcademicDepartment_Id] = useState(studentToEdit.academicDepartment_Id||"")
    const [level_Id,setUserType_Id] = useState(studentToEdit.level_Id||"")
    const [firstName,setFirstName] = useState(studentToEdit.firstName||"")
    const [nickName,setNickName] = useState(studentToEdit.nickName||"")
    const [middleName,setMiddleName] = useState(studentToEdit.middleName||"")
    const [lastName,setLastName] = useState(studentToEdit.lastName||"")
    const [familyName,setFamilyName] = useState(studentToEdit.familyName||"")
    const [email,setPersonalEmail] = useState(studentToEdit.email||"")
    const [phone,setPersonalPhone] = useState(studentToEdit.phone||"")
    const [street,setStreet] = useState(studentToEdit.street||"")
    const [city,setCity] = useState(studentToEdit.city||"")
    const [state,setState] = useState(studentToEdit.state||"")
    const [zip,setZip] = useState(studentToEdit.zip||"")
    const [dob,setDob] = useState(studentToEdit.dob||"")
    const [ssn,setSsn] = useState(studentToEdit.ssn||"")
    const [firstLang,setFirstLang] = useState(studentToEdit.firstLang||"")
    const [secondLang,setSecondLang] = useState(studentToEdit.secondLang||"")
    const [thirdLang,setThirdLang] = useState(studentToEdit.thirdLang||"")
    const [firstInst,setFirstInst] = useState(studentToEdit.firstInst||"")
    const [secondInst,setSecondInst] = useState(studentToEdit.secondInst||"")
    const [thirdInst,setThirdInst] = useState(studentToEdit.thirdInst||"")
    const [primaryTitle,setPrimaryTitle] = useState(studentToEdit.primaryTitle||"")
    const [primaryStartDate,setPrimaryStartDate] = useState(studentToEdit.primaryStartDate||"")
    const [primaryEndDate,setPrimaryEndDate] = useState(studentToEdit.primaryEndDate||"")
    const [primaryPayRate,setPrimaryPayRate] = useState(studentToEdit.primaryPayRate||"")
    const [secondaryTitle,setSecondaryTitle] = useState(studentToEdit.secondaryTitle||"")
    const [secondaryStartDate,setSecondaryStartDate] = useState(studentToEdit.secondaryStartDate||"")
    const [secondaryEndDate,setSecondaryEndDate] = useState(studentToEdit.secondaryEndDate||"")
    const [secondaryPayRate,setSecondaryPayRate] = useState(studentToEdit.secondaryPayRate||"")
    const [tertiaryTitle,setTertiaryTitle] = useState(studentToEdit.tertiaryTitle||"")
    const [tertiaryStartDate,setTertiaryStartDate] = useState(studentToEdit.tertiaryStartDate||"")
    const [tertiaryEndDate,setTertiaryEndDate] = useState(studentToEdit.tertiaryEndDate||"")
    const [tertiaryPayRate,setTertiaryPayRate] = useState(studentToEdit.tertiaryPayRate||"")
    const [quarternaryTitle,setQuarternaryTitle] = useState(studentToEdit.quarternaryTitle||"")
    const [quarternaryStartDate,setQuarternaryStartDate] = useState(studentToEdit.quarternaryStartDate||"")
    const [quarternaryEndDate,setQuarternaryEndDate] = useState(studentToEdit.quarternaryEndDate||"")
    const [quarternaryPayRate,setQuarternaryPayRate] = useState(studentToEdit.quarternaryPayRate||"")
    const [biography,setBiography] = useState(studentToEdit.biography||"")
    const [notes,setNotes] = useState(studentToEdit.notes||"")






// HELPERS FOR EditStudent Button handler---------------------------------------------------



// helper for handleSubmit check required fields
const checkRequired = () => {

    let firstNameBool = false;
    let lastNameBool = false;
    let phoneBool = false;
    let firstLangBool = false;
    let ssnBool = false;


    if(!firstName) {
        firstNameBool = true;
        setErrorsFirstName({firstName: "First name is required"});
    } else {
        firstNameBool = false;
        setErrorsFirstName({});
    }

    if(!lastName) {
        lastNameBool = true;
        setErrorsLastName({lastName: "Last name  is required"});
    } else {
        lastNameBool = false;
        setErrorsLastName({});
    }

    if(!phone) {
        phoneBool = true;
        setErrorsPersonalPhone({phone: "Phone is required"});
    } else {
        phoneBool = false;
        setErrorsPersonalPhone({});
    }

    if(!firstLang) {
        firstLangBool = true;
        setErrorsFirstLang({firstLang: "First Language is required"});

    } else {
        firstLangBool = false;
        setErrorsFirstLang({})
    }

    if(!ssn) {
        ssnBool = true;
        setErrorsSsn({ssn: "SSN is required"});

    } else {
        ssnBool = false;
        setErrorsSsn({})
    }

    if (
        (firstNameBool) ||
        (lastNameBool) ||
        (phoneBool) ||
        (firstLangBool) ||
        (ssnBool)
    ) {
        return true
    } else {
        return false;
    }

}




// helper for handleSubmit check integer fields
const checkInteger = () => {

    let studentDepartment_IdNum = parseInt(studentDepartment_Id);
    let academicDepartment_IdNum = parseInt(academicDepartment_Id);
    let level_IdNum = parseInt(level_Id);
    let zipNum = parseInt(zip);
    let primaryPayRateNum = parseInt(primaryPayRate);
    let secondaryPayRateNum = parseInt(secondaryPayRate);
    let tertiaryPayRateNum = parseInt(tertiaryPayRate);
    let quarternaryPayRateNum = parseInt(quarternaryPayRate);


    let studentDepartment_IdErrorBool = false;
    let academicDepartment_IdErrorBool = false;
    let level_IdErrorBool = false;
    let zipErrorBool = false;
    let primaryPayRateErrorBool = false;
    let secondaryPayRateErrorBool = false;
    let tertiaryPayRateErrorBool = false;
    let quarternaryPayRateErrorBool = false;

    if(studentDepartment_Id !== "" && (typeof studentDepartment_IdNum !== "number" || isNaN(studentDepartment_IdNum))) {
        studentDepartment_IdErrorBool = true;
        setErrorsStudentDepartment_Id({studentDepartment_Id: "Student Department ID must be an integer"});
    } else {
        studentDepartment_IdErrorBool = false;
        setErrorsStudentDepartment_Id({});
    }


    if(academicDepartment_Id !== "" && (typeof academicDepartment_IdNum !== "number" || isNaN(academicDepartment_IdNum))) {
        academicDepartment_IdErrorBool = true;
        setErrorsAcademicDepartment_Id({academicDepartment_Id: "Academic Department ID must be an integer"});
    } else {
        academicDepartment_IdErrorBool = false;
        setErrorsAcademicDepartment_Id({});
    }


    if(level_Id !== "" && (typeof level_IdNum !== "number" || isNaN(level_IdNum))){
        level_IdErrorBool = true;
        setErrorsUserType_Id({level_Id: "User Type ID must be an integer"});
    } else {
        level_IdErrorBool = false;
        setErrorsUserType_Id({});
    }



    if(zip !== "" && (typeof zipNum !== "number" || isNaN(zipNum))){
        zipErrorBool = true;
        setErrorsZip({zip: "Zip must be an integer"});
    } else {
        zipErrorBool = false;
        setErrorsZip({});
    }


    if(primaryPayRate !== "" && (typeof primaryPayRateNum !== "number" || isNaN(primaryPayRateNum))){
        primaryPayRateErrorBool = true;
        setErrorsPrimaryPayRate({primaryPayRate: "Primary Pay Rate must be an integer"});
    } else {
        primaryPayRateErrorBool = false;
        setErrorsPrimaryPayRate({});
    }


    if(secondaryPayRate !== "" && (typeof secondaryPayRateNum !== "number" || isNaN(secondaryPayRateNum))){
        secondaryPayRateErrorBool = true;
        setErrorsSecondaryPayRate({secondaryPayRate: "Secondary Pay Rate must be an integer"});
    } else {
        secondaryPayRateErrorBool = false;
        setErrorsSecondaryPayRate({});
    }


    if(tertiaryPayRate !== "" && (typeof tertiaryPayRateNum !== "number" || isNaN(tertiaryPayRateNum))){
        tertiaryPayRateErrorBool = true;
        setErrorsTertiaryPayRate({tertiaryPayRate: "Tertiary Pay Rate must be an integer"});
    } else {
        tertiaryPayRateErrorBool = false;
        setErrorsTertiaryPayRate({});
    }


    if(quarternaryPayRate !== "" && (typeof quarternaryPayRateNum !== "number" || isNaN(quarternaryPayRateNum))){
        quarternaryPayRateErrorBool = true;
        setErrorsQuarternaryPayRate({quarternaryPayRate: "Quarternary Pay Rate must be an integer"});
    } else {
        quarternaryPayRateErrorBool = false;
        setErrorsQuarternaryPayRate({});
    }


    if (
        (studentDepartment_IdErrorBool) ||
        (academicDepartment_IdErrorBool) ||
        (level_IdErrorBool) ||
        (zipErrorBool) ||
        (primaryPayRateErrorBool) ||
        (secondaryPayRateErrorBool) ||
        (tertiaryPayRateErrorBool) ||
        (quarternaryPayRateErrorBool)
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



         // ---------------REPLACING NEW EMPLOYEE OBJECT VALUES WITH USER INPUT IF EXISTS---------//


         if(	studentDepartment_Id	)	editedStudent	.	studentDepartment_Id	=	studentDepartment_Id	;
         if(	academicDepartment_Id	)	editedStudent	.	academicDepartment_Id	=	academicDepartment_Id	;
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
         if(	ssn	)	editedStudent	.	ssn	=	ssn	;
         if(	firstLang	)	editedStudent	.	firstLang	=	firstLang	;
         if(	secondLang	)	editedStudent	.	secondLang	=	secondLang	;
         if(	thirdLang	)	editedStudent	.	thirdLang	=	thirdLang	;
         if(	firstInst	)	editedStudent	.	firstInst	=	firstInst	;
         if(	secondInst	)	editedStudent	.	secondInst	=	secondInst	;
         if(	thirdInst	)	editedStudent	.	thirdInst	=	thirdInst	;
         if(	primaryTitle	)	editedStudent	.	primaryTitle	=	primaryTitle	;
         if(	primaryStartDate	)	editedStudent	.	primaryStartDate	=	primaryStartDate	;
         if(	primaryEndDate	)	editedStudent	.	primaryEndDate	=	primaryEndDate	;
         if(	primaryPayRate	)	editedStudent	.	primaryPayRate	=	primaryPayRate	;
         if(	secondaryTitle	)	editedStudent	.	secondaryTitle	=	secondaryTitle	;
         if(	secondaryStartDate	)	editedStudent	.	secondaryStartDate	=	secondaryStartDate	;
         if(	secondaryEndDate	)	editedStudent	.	secondaryEndDate	=	secondaryEndDate	;
         if(	secondaryPayRate	)	editedStudent	.	secondaryPayRate	=	secondaryPayRate	;
         if(	tertiaryTitle	)	editedStudent	.	tertiaryTitle	=	tertiaryTitle	;
         if(	tertiaryStartDate	)	editedStudent	.	tertiaryStartDate	=	tertiaryStartDate	;
         if(	tertiaryEndDate	)	editedStudent	.	tertiaryEndDate	=	tertiaryEndDate	;
         if(	tertiaryPayRate	)	editedStudent	.	tertiaryPayRate	=	tertiaryPayRate	;
         if(	quarternaryTitle	)	editedStudent	.	quarternaryTitle	=	quarternaryTitle	;
         if(	quarternaryStartDate	)	editedStudent	.	quarternaryStartDate	=	quarternaryStartDate	;
         if(	quarternaryEndDate	)	editedStudent	.	quarternaryEndDate	=	quarternaryEndDate	;
         if(	quarternaryPayRate	)	editedStudent	.	quarternaryPayRate	=	quarternaryPayRate	;
         if(	biography	)	editedStudent	.	biography	=	biography	;
         if(	notes	)	editedStudent	.	notes	=	notes	;

         editedStudent.id = studentToEdit.id;

        //  console.log("editedStudent 423: ", editedStudent)

         // --------------------------MAKING THE DISPATCH---------------------//
            let studentId;
            let editedStudentDetails;
            if(editedStudentDetails);

            await dispatch(studentsActions.thunkEditStudent(editedStudent))
            .then(response => {
                dispatch(studentsActions.thunkGetStudentsAll())
                // console.log("response 432: ", response, "response.payload", response.payload, "response.payload[0]", response.payload.id);
                studentId = response.payload.id
                return studentId
            }).catch(async (res) => {
                    // console.log("res 439", res);
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(studentsActions.thunkGetStudentById(studentId)).then(response => {
                editedStudentDetails = response;

                navigate(`/students`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }




// return-----------------------------------
        return (
          <main id="EditStudentMain">

            <h1 id='EditStudentH1'>Edit Student</h1>


                    <form id='EditStudentForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditStudentFormSection1">

                            <h4 id="EditStudentFormSection1H4">Personal Information</h4>

                            <p id="EditStudentFormSection1P">
                                Edit personal information for existing student.
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



                            <div id='FamilyNameContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Family Name:
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
                                            onChange={(e) => setPersonalPhone(e.target.value)}
                                            required
                                            />
                                        </label>


                            </div>
                            {errorsPersonalPhone.phone && <p className='EditStudentErrors'>{errorsPersonalPhone.phone}</p>}




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
                            {errorsZip.zip && <p className='EditStudentErrors'>{errorsZip.zip}</p>}




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


                            <div id='ssnContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            SSN:
                                            <input
                                            className='EditStudentFormInput'
                                            id="ssn"
                                            name="ssn"
                                            type="text"
                                            placeholder='SSN'
                                            value={ssn}
                                            onChange={(e) => setSsn(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSsn.ssn && <p className='EditStudentErrors'>{errorsSsn.ssn}</p>}




                        </section>

                        <hr className='EditStudentHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                        <section id="EditStudentFormSection2">

                        <h4 id="EditStudentFormSection2H4">Employment Information</h4>

                            <p id="EditStudentFormSection2P">
                                Edit employment information for existing student.
                            </p>
                            <h5 className='EditStudentH5'>* indicates required field</h5>



                            <div id='studentDepartment_IdContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Student Department ID:
                                            <input
                                            className='EditStudentFormInput'
                                            id="studentDepartment_Id"
                                            name="studentDepartment_Id"
                                            type="text"
                                            placeholder='Student Department ID'
                                            value={studentDepartment_Id}
                                            onChange={(e) => setStudentDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsStudentDepartment_Id.studentDepartment_Id && <p className='EditStudentErrors'>{errorsStudentDepartment_Id.studentDepartment_Id}</p>}



                            <div id='academicDepartment_IdContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Academic Department ID:
                                            <input
                                            className='EditStudentFormInput'
                                            id="academicDepartment_Id"
                                            name="academicDepartment_Id"
                                            type="text"
                                            placeholder='Academic Department ID'
                                            value={academicDepartment_Id}
                                            onChange={(e) => setAcademicDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsAcademicDepartment_Id.academicDepartment_Id && <p className='EditStudentErrors'>{errorsAcademicDepartment_Id.academicDepartment_Id}</p>}



                            <div id='level_IdContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            User Type ID:
                                            <input
                                            className='EditStudentFormInput'
                                            id="level_Id"
                                            name="level_Id"
                                            type="text"
                                            placeholder='User Type ID'
                                            value={level_Id}
                                            onChange={(e) => setUserType_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsUserType_Id.level_Id && <p className='EditStudentErrors'>{errorsUserType_Id.level_Id}</p>}



                            <div id='primaryTitleContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Primary Title:
                                            <input
                                            className='EditStudentFormInput'
                                            id="primaryTitle"
                                            name="primaryTitle"
                                            type="text"
                                            placeholder='Primary Title'
                                            value={primaryTitle}
                                            onChange={(e) => setPrimaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryTitle && <p className='EditStudentErrors'>{errors.primaryTitle}</p>}



                            <div id='primaryStartDateContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Primary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='EditStudentFormInput'
                                            id="primaryStartDate"
                                            name="primaryStartDate"
                                            type="text"
                                            placeholder='Primary Start Date  (mm/dd/yyyy)'
                                            value={primaryStartDate}
                                            onChange={(e) => setPrimaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryStartDate && <p className='EditStudentErrors'>{errors.primaryStartDate}</p>}



                            <div id='primaryEndDateContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Primary End Date  (mm/dd/yyyy):
                                            <input
                                            className='EditStudentFormInput'
                                            id="primaryEndDate"
                                            name="primaryEndDate"
                                            type="text"
                                            placeholder='Primary End Date'
                                            value={primaryEndDate}
                                            onChange={(e) => setPrimaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryEndDate && <p className='EditStudentErrors'>{errors.primaryEndDate}</p>}



                            <div id='primaryPayRateContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Primary Pay Rate $ (USD):
                                            <input
                                            className='EditStudentFormInput'
                                            id="primaryPayRate"
                                            name="primaryPayRate"
                                            type="text"
                                            placeholder='Primary Pay Rate $ (USD)'
                                            value={primaryPayRate}
                                            onChange={(e) => setPrimaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsPrimaryPayRate.primaryPayRate && <p className='EditStudentErrors'>{errorsPrimaryPayRate.primaryPayRate}</p>}



                        </section>

                        <hr className='EditStudentHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                        <section id="EditStudentFormSection3">

                        <h4 id="EditStudentFormSection3H4">Biographical Information</h4>

                            <p id="EditStudentFormSection3P">
                                Edit biographical information for existing student.
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
                                            placeholder="Edit biography here"
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
                                            placeholder="Edit notes here"
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}

                                            />
                                        </label>
                            </div>
                            {errors.notes && <p className='EditStudentErrors'>{errors.notes}</p>}





                        </section>

                        <hr className='EditStudentHr'></hr>


{/* form section 4---------------------------------------------------------- */}


                        <section id="EditStudentFormSection4">

                        <h4 id="EditStudentFormSection4H4">Additional Employment Information</h4>

                            <p id="EditStudentFormSection4P">
                            Edit additional employment information for existing student.
                            </p>
                            <h5 className='EditStudentH5'>* indicates required field</h5>


{/* -------------------------------- SECONDARY -----------------------------*/}

                            <div id='secondaryTitleContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Secondary Title:
                                            <input
                                            className='EditStudentFormInput'
                                            id="secondaryTitle"
                                            name="secondaryTitle"
                                            type="text"
                                            placeholder='Secondary Title'
                                            value={secondaryTitle}
                                            onChange={(e) => setSecondaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryTitle && <p className='EditStudentErrors'>{errors.secondaryTitle}</p>}



                            <div id='secondaryStartDateContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Secondary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='EditStudentFormInput'
                                            id="secondaryStartDate"
                                            name="secondaryStartDate"
                                            type="text"
                                            placeholder='Secondary Start Date'
                                            value={secondaryStartDate}
                                            onChange={(e) => setSecondaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryStartDate && <p className='EditStudentErrors'>{errors.secondaryStartDate}</p>}



                            <div id='secondaryEndDateContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Secondary End Date  (mm/dd/yyyy):
                                            <input
                                            className='EditStudentFormInput'
                                            id="secondaryEndDate"
                                            name="secondaryEndDate"
                                            type="text"
                                            placeholder='Secondary End Date  (mm/dd/yyyy)  (mm/dd/yyyy)'
                                            value={secondaryEndDate}
                                            onChange={(e) => setSecondaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryEndDate && <p className='EditStudentErrors'>{errors.secondaryEndDate}</p>}



                            <div id='secondaryPayRateContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Secondary Pay Rate $ (USD):
                                            <input
                                            className='EditStudentFormInput'
                                            id="secondaryPayRate"
                                            name="secondaryPayRate"
                                            type="text"
                                            placeholder='Secondary Pay Rate $ (USD)'
                                            value={secondaryPayRate}
                                            onChange={(e) => setSecondaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSecondaryPayRate.secondaryPayRate && <p className='EditStudentErrors'>{errorsSecondaryPayRate.secondaryPayRate}</p>}






{/* -------------------------------- TERTIARY -----------------------------*/}




                            <div id='tertiaryTitleContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Tertiary Title:
                                            <input
                                            className='EditStudentFormInput'
                                            id="tertiaryTitle"
                                            name="tertiaryTitle"
                                            type="text"
                                            placeholder='Tertiary Title'
                                            value={tertiaryTitle}
                                            onChange={(e) => setTertiaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryTitle && <p className='EditStudentErrors'>{errors.tertiaryTitle}</p>}



                            <div id='tertiaryStartDateContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Tertiary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='EditStudentFormInput'
                                            id="tertiaryStartDate"
                                            name="tertiaryStartDate"
                                            type="text"
                                            placeholder='Tertiary Start Date  (mm/dd/yyyy)'
                                            value={tertiaryStartDate}
                                            onChange={(e) => setTertiaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryStartDate && <p className='EditStudentErrors'>{errors.tertiaryStartDate}</p>}



                            <div id='tertiaryEndDateContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Tertiary End Date  (mm/dd/yyyy):
                                            <input
                                            className='EditStudentFormInput'
                                            id="tertiaryEndDate"
                                            name="tertiaryEndDate"
                                            type="text"
                                            placeholder='Tertiary End Date  (mm/dd/yyyy)'
                                            value={tertiaryEndDate}
                                            onChange={(e) => setTertiaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryEndDate && <p className='EditStudentErrors'>{errors.tertiaryEndDate}</p>}




                            <div id='tertiaryPayRateContainer' className='EditStudentFormLabelInputContainer'>

                                        <label className='EditStudentFormLabel'>
                                            Tertiary Pay Rate $ (USD):
                                            <input
                                            className='EditStudentFormInput'
                                            id="tertiaryPayRate"
                                            name="tertiaryPayRate"
                                            type="text"
                                            placeholder='Tertiary Pay Rate $ (USD)'
                                            value={tertiaryPayRate}
                                            onChange={(e) => setTertiaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsTertiaryPayRate.tertiaryPayRate && <p className='EditStudentErrors'>{errorsTertiaryPayRate.tertiaryPayRate}</p>}




{/* -------------------------------- QUARTERNARY -----------------------------*/}






                            <div id='quarternaryTitleContainer' className='EditStudentFormLabelInputContainer'>

                            <label className='EditStudentFormLabel'>
                                Quarternary Title:
                                <input
                                className='EditStudentFormInput'
                                id="quarternaryTitle"
                                name="quarternaryTitle"
                                type="text"
                                placeholder='Quarternary Title'
                                value={quarternaryTitle}
                                onChange={(e) => setQuarternaryTitle(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryTitle && <p className='EditStudentErrors'>{errors.quarternaryTitle}</p>}



                            <div id='quarternaryStartDateContainer' className='EditStudentFormLabelInputContainer'>

                            <label className='EditStudentFormLabel'>
                                Quarternary Start Date  (mm/dd/yyyy):
                                <input
                                className='EditStudentFormInput'
                                id="quarternaryStartDate"
                                name="quarternaryStartDate"
                                type="text"
                                placeholder='Quarternary Start Date  (mm/dd/yyyy)'
                                value={quarternaryStartDate}
                                onChange={(e) => setQuarternaryStartDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryStartDate && <p className='EditStudentErrors'>{errors.quarternaryStartDate}</p>}



                            <div id='quarternaryEndDateContainer' className='EditStudentFormLabelInputContainer'>

                            <label className='EditStudentFormLabel'>
                                Quarternary End Date  (mm/dd/yyyy):
                                <input
                                className='EditStudentFormInput'
                                id="quarternaryEndDate"
                                name="quarternaryEndDate"
                                type="text"
                                placeholder='Quarternary End Date  (mm/dd/yyyy)'
                                value={quarternaryEndDate}
                                onChange={(e) => setQuarternaryEndDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryEndDate && <p className='EditStudentErrors'>{errors.quarternaryEndDate}</p>}




                            <div id='quarternaryPayRateContainer' className='EditStudentFormLabelInputContainer'>

                            <label className='EditStudentFormLabel'>
                                Quarternary Pay Rate $ (USD):
                                <input
                                className='EditStudentFormInput'
                                id="quarternaryPayRate"
                                name="quarternaryPayRate"
                                type="text"
                                placeholder='Quarternary Pay Rate $ (USD)'
                                value={quarternaryPayRate}
                                onChange={(e) => setQuarternaryPayRate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errorsQuarternaryPayRate.quarternaryPayRate && <p className='EditStudentErrors'>{errorsQuarternaryPayRate.quarternaryPayRate}</p>}



                        </section>

                        <hr className='EditStudentHr'></hr>




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
