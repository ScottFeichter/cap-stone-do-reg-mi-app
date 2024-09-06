import './CreateNewStudentForm.css';
// const BASE_CLASS_NAME = "CreateNewStudentForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import * as studentsActions from '../../../redux/studentsReducer.js';



function CreateNewStudentForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsFirstName, setErrorsFirstName] = useState({});
        const [errorsLastName, setErrorsLastName] = useState({});
        const [errorsPhone, setErrorsPhone] = useState({});
        const [errorsFirstLang, setErrorsFirstLang] = useState({});
        const [errorsSsn, setErrorsSsn] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});



        //-----must be integers
        const [errorsStudentDepartment_Id, setErrorsStudentDepartment_Id] = useState({})
        const [errorsAcademicDepartment_Id, setErrorsAcademicDepartment_Id ] = useState({})
        const [errorsLevel_Id, setErrorsLevel_Id ] = useState({})
        const [errorsZip, setErrorsZip ] = useState({})
        const [errorsPrimaryPayRate, setErrorsPrimaryPayRate ] = useState({})
        const [errorsSecondaryPayRate, setErrorsSecondaryPayRate ] = useState({})
        const [errorsTertiaryPayRate, setErrorsTertiaryPayRate ] = useState({})
        const [errorsQuarternaryPayRate, setErrorsQuarternaryPayRate ] = useState({})


        // const [isDisabled, setIsDisabled] = useState(false);


        let newStudent = {

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




// personal information form section 1----------------------------------------------------------




        const [firstName, setFirstName] = useState("");
        const [nickName, setNickName] = useState("");
        const [middleName, setMiddleName] = useState("");
        const [lastName, setLastName] = useState("");
        const [familyName, setFamilyName] = useState("");
        const [email, setPersonalEmail] = useState("");
        const [phone, setPhone] = useState("");
        const [street, setStreet] = useState("");
        const [city, setCity] = useState("");
        const [state, setState] = useState("");
        const [zip, setZip] = useState("");
        const [dob, setDob] = useState("");
        const [ssn, setSsn] = useState("");




// employment information form section 2----------------------------------------------------------

        const [studentDepartment_Id, setStudentDepartment_Id] = useState("");
        const [academicDepartment_Id, setAcademicDepartment_Id] = useState("");
        const [level_Id, setLevel_Id] = useState("");
        const [primaryTitle, setPrimaryTitle] = useState("");
        const [primaryStartDate, setPrimaryStartDate] = useState("");
        const [primaryEndDate, setPrimaryEndDate] = useState("");
        const [primaryPayRate, setPrimaryPayRate] = useState("");




// biographical information form section 3----------------------------------------------------------


        const [firstLang, setFirstLang] = useState("");
        const [secondLang, setSecondLang] = useState("");
        const [thirdLang, setThirdLang] = useState("");
        const [firstInst, setFirstInst] = useState("");
        const [secondInst, setSecondInst] = useState("");
        const [thirdInst, setThirdInst] = useState("");
        const [biography, setBiography] = useState("");
        const [notes, setNotes] = useState("");



// states form section 4----------------------------------------------------------

        const [secondaryTitle, setSecondaryTitle] = useState("");
        const [secondaryStartDate, setSecondaryStartDate] = useState("");
        const [secondaryEndDate, setSecondaryEndDate] = useState("");
        const [secondaryPayRate, setSecondaryPayRate] = useState("");
        const [tertiaryTitle, setTertiaryTitle] = useState("");
        const [tertiaryStartDate, setTertiaryStartDate] = useState("");
        const [tertiaryEndDate, setTertiaryEndDate] = useState("");
        const [tertiaryPayRate, setTertiaryPayRate] = useState("");
        const [quarternaryTitle, setQuarternaryTitle] = useState("");
        const [quarternaryStartDate, setQuarternaryStartDate] = useState("");
        const [quarternaryEndDate, setQuarternaryEndDate] = useState("");
        const [quarternaryPayRate, setQuarternaryPayRate] = useState("");







// HELPERS FOR CreateNewStudent Button handler---------------------------------------------------



// helper for handleSubmit check required fields
const checkRequired = () => {

    let firstNameBool = false;
    let lastNameBool = false;
    let phoneBool = false;
    let firstLangBool = false;
    let ssnBool = false;


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
        setErrorsLevel_Id({level_Id: "User Type ID must be an integer"});
    } else {
        level_IdErrorBool = false;
        setErrorsLevel_Id({});
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
            // console.log('HANDLE SUBMIT NEW EMPLOYEE IS RUNNING');

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


         if(	studentDepartment_Id	)	newStudent	.	studentDepartment_Id	=	studentDepartment_Id	;
         if(	academicDepartment_Id	)	newStudent	.	academicDepartment_Id	=	academicDepartment_Id	;
         if(	level_Id	)	newStudent	.	level_Id	=	level_Id	;
         if(	firstName	)	newStudent	.	firstName	=	firstName	;
         if(	nickName	)	newStudent	.	nickName	=	nickName	;
         if(	middleName	)	newStudent	.	middleName	=	middleName	;
         if(	lastName	)	newStudent	.	lastName	=	lastName	;
         if(	familyName	)	newStudent	.	familyName	=	familyName	;
         if(	email	)	newStudent	.	email	=	email	;
         if(	phone	)	newStudent	.	phone	=	phone	;
         if(	street	)	newStudent	.	street	=	street	;
         if(	city	)	newStudent	.	city	=	city	;
         if(	state	)	newStudent	.	state	=	state	;
         if(	zip	)	newStudent	.	zip	=	zip	;
         if(	dob	)	newStudent	.	dob	=	dob	;
         if(	ssn	)	newStudent	.	ssn	=	ssn	;
         if(	firstLang	)	newStudent	.	firstLang	=	firstLang	;
         if(	secondLang	)	newStudent	.	secondLang	=	secondLang	;
         if(	thirdLang	)	newStudent	.	thirdLang	=	thirdLang	;
         if(	firstInst	)	newStudent	.	firstInst	=	firstInst	;
         if(	secondInst	)	newStudent	.	secondInst	=	secondInst	;
         if(	thirdInst	)	newStudent	.	thirdInst	=	thirdInst	;
         if(	primaryTitle	)	newStudent	.	primaryTitle	=	primaryTitle	;
         if(	primaryStartDate	)	newStudent	.	primaryStartDate	=	primaryStartDate	;
         if(	primaryEndDate	)	newStudent	.	primaryEndDate	=	primaryEndDate	;
         if(	primaryPayRate	)	newStudent	.	primaryPayRate	=	primaryPayRate	;
         if(	secondaryTitle	)	newStudent	.	secondaryTitle	=	secondaryTitle	;
         if(	secondaryStartDate	)	newStudent	.	secondaryStartDate	=	secondaryStartDate	;
         if(	secondaryEndDate	)	newStudent	.	secondaryEndDate	=	secondaryEndDate	;
         if(	secondaryPayRate	)	newStudent	.	secondaryPayRate	=	secondaryPayRate	;
         if(	tertiaryTitle	)	newStudent	.	tertiaryTitle	=	tertiaryTitle	;
         if(	tertiaryStartDate	)	newStudent	.	tertiaryStartDate	=	tertiaryStartDate	;
         if(	tertiaryEndDate	)	newStudent	.	tertiaryEndDate	=	tertiaryEndDate	;
         if(	tertiaryPayRate	)	newStudent	.	tertiaryPayRate	=	tertiaryPayRate	;
         if(	quarternaryTitle	)	newStudent	.	quarternaryTitle	=	quarternaryTitle	;
         if(	quarternaryStartDate	)	newStudent	.	quarternaryStartDate	=	quarternaryStartDate	;
         if(	quarternaryEndDate	)	newStudent	.	quarternaryEndDate	=	quarternaryEndDate	;
         if(	quarternaryPayRate	)	newStudent	.	quarternaryPayRate	=	quarternaryPayRate	;
         if(	biography	)	newStudent	.	biography	=	biography	;
         if(	notes	)	newStudent	.	notes	=	notes	;

        //  console.log("newStudent 448: ", newStudent)

         // --------------------------MAKING THE DISPATCH---------------------//
            let studentId;
            let newStudentDetails;
            if(newStudentDetails);

            await dispatch(studentsActions.thunkCreateStudent(newStudent))
            .then(response => {
                return response
            })
            .then(response => {
                studentId = response.payload[0].id;
                dispatch(studentsActions.thunkGetStudentsAll());
                return studentId;
            }).catch(async (res) => {
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(studentsActions.thunkGetStudentsAll()).then((response) => {
                dispatch(studentsActions.thunkGetStudentById(studentId));
                return response
            }).then(response => {
                dispatch(studentsActions.thunkGetStudentsAll())
                return response
            }).then(response => {
                newStudentDetails = response;
                navigate(`/students/${studentId}`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }




// return-----------------------------------
        return (
          <main id="CreateNewStudentMain">

            <h1 id='CreateNewStudentH1'>Create A New Student</h1>


                    <form id='CreateNewStudentForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="CreateNewStudentFormSection1">

                            <h4 id="CreateNewStudentFormSection1H4">Personal Information</h4>

                            <p id="CreateNewStudentFormSection1P">
                                Enter personal information for new student.
                            </p>
                            <h5 className='CreateNewStudentH5'>* indicates required field</h5>



                            <div id='firstNameContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <p className='CreateNewStudentFormRequired'>{required}</p>
                                        <label className='CreateNewStudentFormLabel'>
                                            First Name 1:

                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            placeholder='First Name 1'
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                            />
                                        </label>

                            </div>
                            {errorsFirstName.firstName && <p className='CreateNewStudentErrors'>{errorsFirstName.firstName}</p>}


                            <div id='nickNameContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            First Name 2:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="nickName"
                                            name="nickName"
                                            type="text"
                                            placeholder='First Name 2'
                                            value={nickName}
                                            onChange={(e) => setNickName(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.nickName && <p className='CreateNewStudentErrors'>{errors.nickName}</p>}


                            <div id='middleNameContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Middle Name:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="middleName"
                                            name="middleName"
                                            type="text"
                                            placeholder='Middle Name'
                                            value={middleName}
                                            onChange={(e) => setMiddleName(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.middleName && <p className='CreateNewStudentErrors'>{errors.middleName}</p>}




                            <div id='lastNameContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <p className='CreateNewStudentFormRequired'>{required}</p>
                                        <label className='CreateNewStudentFormLabel'>
                                            Last Name 1:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            placeholder='Last Name 1'
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                            />
                                        </label>


                            </div>
                            {errorsLastName.lastName && <p className='CreateNewStudentErrors'>{errorsLastName.lastName}</p>}



                            <div id='familyNameContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Last Name 2:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="familyName"
                                            name="familyName"
                                            type="text"
                                            placeholder='Last Name 2'
                                            value={familyName}
                                            onChange={(e) => setFamilyName(e.target.value)}

                                            />
                                        </label>


                            </div>
                            {errors.familyName && <p className='CreateNewStudentErrors'>{errors.familyName}</p>}




                            <div id='emailContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Personal Email:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder='Personal Email'
                                            value={email}
                                            onChange={(e) => setPersonalEmail(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.email && <p className='CreateNewStudentErrors'>{errors.email}</p>}



                            <div id='phoneContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <p className='CreateNewStudentFormRequired'>{required}</p>
                                        <label className='CreateNewStudentFormLabel'>
                                            Personal Phone:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            placeholder='Personal Phone'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                            />
                                        </label>


                            </div>
                            {errorsPhone.phone && <p className='CreateNewStudentErrors'>{errorsPhone.phone}</p>}




                            <div id='streetContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Street:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="street"
                                            name="street"
                                            type="text"
                                            placeholder='Street'
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.street && <p className='CreateNewStudentErrors'>{errors.street}</p>}



                            <div id='cityContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            City:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="city"
                                            name="city"
                                            type="text"
                                            placeholder='City'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.city && <p className='CreateNewStudentErrors'>{errors.city}</p>}


                            <div id='stateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            State:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="state"
                                            name="state"
                                            type="text"
                                            placeholder='State'
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.state && <p className='CreateNewStudentErrors'>{errors.state}</p>}


                            <div id='zipContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Zip:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="zip"
                                            name="zip"
                                            type="text"
                                            placeholder='Zip'
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsZip.zip && <p className='CreateNewStudentErrors'>{errorsZip.zip}</p>}




                            <div id='dobContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Date Of Birth  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="dob"
                                            name="dob"
                                            type="text"
                                            placeholder='Date Of Birth  (mm/dd/yyyy)'
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.dob && <p className='CreateNewStudentErrors'>{errors.dob}</p>}


                            <div id='ssnContainer' className='CreateNewStudentFormLabelInputContainer'>
                                        <p className='CreateNewStudentFormRequired'>{required}</p>
                                        <label className='CreateNewStudentFormLabel'>
                                            SSN:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="ssn"
                                            name="ssn"
                                            type="text"
                                            placeholder='SSN'
                                            value={ssn}
                                            onChange={(e) => setSsn(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSsn.ssn && <p className='CreateNewStudentErrors'>{errorsSsn.ssn}</p>}




                        </section>

                        <hr className='CreateNewStudentHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                        <section id="CreateNewStudentFormSection2">

                        <h4 id="CreateNewStudentFormSection2H4">Employment Information</h4>

                            <p id="CreateNewStudentFormSection2P">
                                Enter employment information for new student.
                            </p>
                            <h5 className='CreateNewStudentH5'>* indicates required field</h5>



                            <div id='studentDepartment_IdContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Student Department ID:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="studentDepartment_Id"
                                            name="studentDepartment_Id"
                                            type="text"
                                            placeholder='Student Department ID'
                                            value={studentDepartment_Id}
                                            onChange={(e) => setStudentDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsStudentDepartment_Id.studentDepartment_Id && <p className='CreateNewStudentErrors'>{errorsStudentDepartment_Id.studentDepartment_Id}</p>}



                            <div id='academicDepartment_IdContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Academic Department ID:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="academicDepartment_Id"
                                            name="academicDepartment_Id"
                                            type="text"
                                            placeholder='Academic Department ID'
                                            value={academicDepartment_Id}
                                            onChange={(e) => setAcademicDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsAcademicDepartment_Id.academicDepartment_Id && <p className='CreateNewStudentErrors'>{errorsAcademicDepartment_Id.academicDepartment_Id}</p>}



                            <div id='level_IdContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            User Type ID:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="level_Id"
                                            name="level_Id"
                                            type="text"
                                            placeholder='User Type ID'
                                            value={level_Id}
                                            onChange={(e) => setLevel_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsLevel_Id.level_Id && <p className='CreateNewStudentErrors'>{errorsLevel_Id.level_Id}</p>}



                            <div id='primaryTitleContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Primary Title:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="primaryTitle"
                                            name="primaryTitle"
                                            type="text"
                                            placeholder='Primary Title'
                                            value={primaryTitle}
                                            onChange={(e) => setPrimaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryTitle && <p className='CreateNewStudentErrors'>{errors.primaryTitle}</p>}



                            <div id='primaryStartDateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Primary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="primaryStartDate"
                                            name="primaryStartDate"
                                            type="text"
                                            placeholder='Primary Start Date  (mm/dd/yyyy)'
                                            value={primaryStartDate}
                                            onChange={(e) => setPrimaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryStartDate && <p className='CreateNewStudentErrors'>{errors.primaryStartDate}</p>}



                            <div id='primaryEndDateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Primary End Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="primaryEndDate"
                                            name="primaryEndDate"
                                            type="text"
                                            placeholder='Primary End Date'
                                            value={primaryEndDate}
                                            onChange={(e) => setPrimaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryEndDate && <p className='CreateNewStudentErrors'>{errors.primaryEndDate}</p>}



                            <div id='primaryPayRateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Primary Pay Rate $ (USD):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="primaryPayRate"
                                            name="primaryPayRate"
                                            type="text"
                                            placeholder='Primary Pay Rate $ (USD)'
                                            value={primaryPayRate}
                                            onChange={(e) => setPrimaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsPrimaryPayRate.primaryPayRate && <p className='CreateNewStudentErrors'>{errorsPrimaryPayRate.primaryPayRate}</p>}




                        </section>

                        <hr className='CreateNewStudentHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                        <section id="CreateNewStudentFormSection3">

                        <h4 id="CreateNewStudentFormSection3H4">Biographical Information</h4>

                            <p id="CreateNewStudentFormSection3P">
                                Enter biographical information for new student.
                            </p>
                            <h5 className='CreateNewStudentH5'>* indicates required field</h5>



                            <div id='firstLangContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <p className='CreateNewStudentFormRequired'>{required}</p>
                                        <label className='CreateNewStudentFormLabel'>
                                            First Language:
                                            <input
                                            className='CreateNewStudentFormInput'
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
                            {errorsFirstLang.firstLang && <p className='CreateNewStudentErrors'>{errorsFirstLang.firstLang}</p>}



                            <div id='secondLangContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Second Language:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="secondLang"
                                            name="secondLang"
                                            type="text"
                                            placeholder='Second Language'
                                            value={secondLang}
                                            onChange={(e) => setSecondLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondLang && <p className='CreateNewStudentErrors'>{errors.secondLang}</p>}


                            <div id='thirdLangContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Third Language:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="thirdLang"
                                            name="thirdLang"
                                            type="text"
                                            placeholder='Third Language'
                                            value={thirdLang}
                                            onChange={(e) => setThirdLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdLang && <p className='CreateNewStudentErrors'>{errors.thirdLang}</p>}



                            <div id='firstInstContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            First Instrument:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="firstInst"
                                            name="firstInst"
                                            type="text"
                                            placeholder='First Instrument'
                                            value={firstInst}
                                            onChange={(e) => setFirstInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.firstInst && <p className='CreateNewStudentErrors'>{errors.firstInst}</p>}



                            <div id='secondInstContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Second Instrument:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="secondInst"
                                            name="secondInst"
                                            type="text"
                                            placeholder='Second Instrument'
                                            value={secondInst}
                                            onChange={(e) => setSecondInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondInst && <p className='CreateNewStudentErrors'>{errors.secondInst}</p>}




                            <div id='thirdInstContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Third Instrument:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="thirdInst"
                                            name="thirdInst"
                                            type="text"
                                            placeholder='Third Instrument'
                                            value={thirdInst}
                                            onChange={(e) => setThirdInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdInst && <p className='CreateNewStudentErrors'>{errors.thirdInst}</p>}





                            <div id='biographyContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Biography:
                                            <textarea
                                            className='CreateNewStudentFormInput'
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
                            {errors.biography && <p className='CreateNewStudentErrors'>{errors.biography}</p>}




                            <div id='notesContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Notes:
                                            <textarea
                                            className='CreateNewStudentFormInput'
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
                            {errors.notes && <p className='CreateNewStudentErrors'>{errors.notes}</p>}





                        </section>

                        <hr className='CreateNewStudentHr'></hr>


{/* form section 4---------------------------------------------------------- */}




                        <section id="CreateNewStudentFormSection4">

                        <h4 id="CreateNewStudentFormSection4H4">Additional Employment Information</h4>

                            <p id="CreateNewStudentFormSection4P">
                            Enter additional employment information for new student.
                            </p>
                            <h5 className='CreateNewStudentH5'>* indicates required field</h5>


{/* -------------------------------- SECONDARY -----------------------------*/}

                            <div id='secondaryTitleContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Secondary Title:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="secondaryTitle"
                                            name="secondaryTitle"
                                            type="text"
                                            placeholder='Secondary Title'
                                            value={secondaryTitle}
                                            onChange={(e) => setSecondaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryTitle && <p className='CreateNewStudentErrors'>{errors.secondaryTitle}</p>}



                            <div id='secondaryStartDateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Secondary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="secondaryStartDate"
                                            name="secondaryStartDate"
                                            type="text"
                                            placeholder='Secondary Start Date'
                                            value={secondaryStartDate}
                                            onChange={(e) => setSecondaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryStartDate && <p className='CreateNewStudentErrors'>{errors.secondaryStartDate}</p>}



                            <div id='secondaryEndDateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Secondary End Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="secondaryEndDate"
                                            name="secondaryEndDate"
                                            type="text"
                                            placeholder='Secondary End Date  (mm/dd/yyyy)  (mm/dd/yyyy)'
                                            value={secondaryEndDate}
                                            onChange={(e) => setSecondaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryEndDate && <p className='CreateNewStudentErrors'>{errors.secondaryEndDate}</p>}



                            <div id='secondaryPayRateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Secondary Pay Rate $ (USD):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="secondaryPayRate"
                                            name="secondaryPayRate"
                                            type="text"
                                            placeholder='Secondary Pay Rate $ (USD)'
                                            value={secondaryPayRate}
                                            onChange={(e) => setSecondaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSecondaryPayRate.secondaryPayRate && <p className='CreateNewStudentErrors'>{errorsSecondaryPayRate.secondaryPayRate}</p>}






{/* -------------------------------- TERTIARY -----------------------------*/}




                            <div id='tertiaryTitleContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Tertiary Title:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="tertiaryTitle"
                                            name="tertiaryTitle"
                                            type="text"
                                            placeholder='Tertiary Title'
                                            value={tertiaryTitle}
                                            onChange={(e) => setTertiaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryTitle && <p className='CreateNewStudentErrors'>{errors.tertiaryTitle}</p>}



                            <div id='tertiaryStartDateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Tertiary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="tertiaryStartDate"
                                            name="tertiaryStartDate"
                                            type="text"
                                            placeholder='Tertiary Start Date  (mm/dd/yyyy)'
                                            value={tertiaryStartDate}
                                            onChange={(e) => setTertiaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryStartDate && <p className='CreateNewStudentErrors'>{errors.tertiaryStartDate}</p>}



                            <div id='tertiaryEndDateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Tertiary End Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="tertiaryEndDate"
                                            name="tertiaryEndDate"
                                            type="text"
                                            placeholder='Tertiary End Date  (mm/dd/yyyy)'
                                            value={tertiaryEndDate}
                                            onChange={(e) => setTertiaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryEndDate && <p className='CreateNewStudentErrors'>{errors.tertiaryEndDate}</p>}




                            <div id='tertiaryPayRateContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Tertiary Pay Rate $ (USD):
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="tertiaryPayRate"
                                            name="tertiaryPayRate"
                                            type="text"
                                            placeholder='Tertiary Pay Rate $ (USD)'
                                            value={tertiaryPayRate}
                                            onChange={(e) => setTertiaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsTertiaryPayRate.tertiaryPayRate && <p className='CreateNewStudentErrors'>{errorsTertiaryPayRate.tertiaryPayRate}</p>}




{/* -------------------------------- QUARTERNARY -----------------------------*/}






                            <div id='quarternaryTitleContainer' className='CreateNewStudentFormLabelInputContainer'>

                            <label className='CreateNewStudentFormLabel'>
                                Quarternary Title:
                                <input
                                className='CreateNewStudentFormInput'
                                id="quarternaryTitle"
                                name="quarternaryTitle"
                                type="text"
                                placeholder='Quarternary Title'
                                value={quarternaryTitle}
                                onChange={(e) => setQuarternaryTitle(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryTitle && <p className='CreateNewStudentErrors'>{errors.quarternaryTitle}</p>}



                            <div id='quarternaryStartDateContainer' className='CreateNewStudentFormLabelInputContainer'>

                            <label className='CreateNewStudentFormLabel'>
                                Quarternary Start Date  (mm/dd/yyyy):
                                <input
                                className='CreateNewStudentFormInput'
                                id="quarternaryStartDate"
                                name="quarternaryStartDate"
                                type="text"
                                placeholder='Quarternary Start Date  (mm/dd/yyyy)'
                                value={quarternaryStartDate}
                                onChange={(e) => setQuarternaryStartDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryStartDate && <p className='CreateNewStudentErrors'>{errors.quarternaryStartDate}</p>}



                            <div id='quarternaryEndDateContainer' className='CreateNewStudentFormLabelInputContainer'>

                            <label className='CreateNewStudentFormLabel'>
                                Quarternary End Date  (mm/dd/yyyy):
                                <input
                                className='CreateNewStudentFormInput'
                                id="quarternaryEndDate"
                                name="quarternaryEndDate"
                                type="text"
                                placeholder='Quarternary End Date  (mm/dd/yyyy)'
                                value={quarternaryEndDate}
                                onChange={(e) => setQuarternaryEndDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryEndDate && <p className='CreateNewStudentErrors'>{errors.quarternaryEndDate}</p>}




                            <div id='quarternaryPayRateContainer' className='CreateNewStudentFormLabelInputContainer'>

                            <label className='CreateNewStudentFormLabel'>
                                Quarternary Pay Rate $ (USD):
                                <input
                                className='CreateNewStudentFormInput'
                                id="quarternaryPayRate"
                                name="quarternaryPayRate"
                                type="text"
                                placeholder='Quarternary Pay Rate $ (USD)'
                                value={quarternaryPayRate}
                                onChange={(e) => setQuarternaryPayRate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errorsQuarternaryPayRate.quarternaryPayRate && <p className='CreateNewStudentErrors'>{errorsQuarternaryPayRate.quarternaryPayRate}</p>}



                        </section>

                        <hr className='CreateNewStudentHr'></hr>




{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='CreateNewStudentRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="CreateNewStudentButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Create Student
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default CreateNewStudentForm;
