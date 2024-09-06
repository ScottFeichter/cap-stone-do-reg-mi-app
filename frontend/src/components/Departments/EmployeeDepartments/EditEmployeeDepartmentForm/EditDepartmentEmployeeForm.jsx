import './EditEmployeeDepartmentForm.css';
// const BASE_CLASS_NAME = "EditEmployeeDepartmentForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import * as employeeDepartmentsActions from '../../../redux/employeeDepartmentsReducer.js';



function EditEmployeeDepartmentForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const location = useLocation();
        const {employeeDepartmentToEdit} = location.state;

        // console.log("employeeDepartmentToEdit : ", employeeDepartmentToEdit)

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsFirstName, setErrorsFirstName] = useState({});
        const [errorsLastName, setErrorsLastName] = useState({});
        const [errorsPersonalPhone, setErrorsPersonalPhone] = useState({});
        const [errorsFirstLang, setErrorsFirstLang] = useState({});
        const [errorsSsn, setErrorsSsn] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});



        //-----must be integers
        const [errorsEmployeeDepartment_Id, setErrorsEmployeeDepartment_Id] = useState({})
        const [errorsAcademicDepartment_Id, setErrorsAcademicDepartment_Id ] = useState({})
        const [errorsUserType_Id, setErrorsUserType_Id ] = useState({})
        const [errorsAge, setErrorsAge ] = useState({})
        const [errorsZip, setErrorsZip ] = useState({})
        const [errorsPrimaryPayRate, setErrorsPrimaryPayRate ] = useState({})
        const [errorsSecondaryPayRate, setErrorsSecondaryPayRate ] = useState({})
        const [errorsTertiaryPayRate, setErrorsTertiaryPayRate ] = useState({})
        const [errorsQuarternaryPayRate, setErrorsQuarternaryPayRate ] = useState({})


        // const [isDisabled, setIsDisabled] = useState(false);


        let editedEmployeeDepartment = {

// personal information form section 1----------------------------------------------------------
            firstName	            :	null	,
            nickName	            :	null	,
            middleName	            :	null	,
            lastName	            :	null	,
            familyName	            :	null	,
            email	        :	null	,
            phone	        :	null	,
            street	                :	null	,
            city	                :	null	,
            state	                :	null	,
            zip	                    :	null	,
            dob	                    :	null	,
            age	                    :	null	,
            ssn	                    :	null	,

// employment information form section 2----------------------------------------------------------
            employeeDepartment_Id	:	null	,
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



    const [employeeDepartment_Id,setEmployeeDepartment_Id] = useState(employeeDepartmentToEdit.employeeDepartment_Id||"")
    const [academicDepartment_Id,setAcademicDepartment_Id] = useState(employeeDepartmentToEdit.academicDepartment_Id||"")
    const [level_Id,setUserType_Id] = useState(employeeDepartmentToEdit.level_Id||"")
    const [firstName,setFirstName] = useState(employeeDepartmentToEdit.firstName||"")
    const [nickName,setNickName] = useState(employeeDepartmentToEdit.nickName||"")
    const [middleName,setMiddleName] = useState(employeeDepartmentToEdit.middleName||"")
    const [lastName,setLastName] = useState(employeeDepartmentToEdit.lastName||"")
    const [familyName,setFamilyName] = useState(employeeDepartmentToEdit.familyName||"")
    const [email,setPersonalEmail] = useState(employeeDepartmentToEdit.email||"")
    const [phone,setPersonalPhone] = useState(employeeDepartmentToEdit.phone||"")
    const [street,setStreet] = useState(employeeDepartmentToEdit.street||"")
    const [city,setCity] = useState(employeeDepartmentToEdit.city||"")
    const [state,setState] = useState(employeeDepartmentToEdit.state||"")
    const [zip,setZip] = useState(employeeDepartmentToEdit.zip||"")
    const [dob,setDob] = useState(employeeDepartmentToEdit.dob||"")
    const [age,setAge] = useState(employeeDepartmentToEdit.age||"")
    const [ssn,setSsn] = useState(employeeDepartmentToEdit.ssn||"")
    const [firstLang,setFirstLang] = useState(employeeDepartmentToEdit.firstLang||"")
    const [secondLang,setSecondLang] = useState(employeeDepartmentToEdit.secondLang||"")
    const [thirdLang,setThirdLang] = useState(employeeDepartmentToEdit.thirdLang||"")
    const [firstInst,setFirstInst] = useState(employeeDepartmentToEdit.firstInst||"")
    const [secondInst,setSecondInst] = useState(employeeDepartmentToEdit.secondInst||"")
    const [thirdInst,setThirdInst] = useState(employeeDepartmentToEdit.thirdInst||"")
    const [primaryTitle,setPrimaryTitle] = useState(employeeDepartmentToEdit.primaryTitle||"")
    const [primaryStartDate,setPrimaryStartDate] = useState(employeeDepartmentToEdit.primaryStartDate||"")
    const [primaryEndDate,setPrimaryEndDate] = useState(employeeDepartmentToEdit.primaryEndDate||"")
    const [primaryPayRate,setPrimaryPayRate] = useState(employeeDepartmentToEdit.primaryPayRate||"")
    const [secondaryTitle,setSecondaryTitle] = useState(employeeDepartmentToEdit.secondaryTitle||"")
    const [secondaryStartDate,setSecondaryStartDate] = useState(employeeDepartmentToEdit.secondaryStartDate||"")
    const [secondaryEndDate,setSecondaryEndDate] = useState(employeeDepartmentToEdit.secondaryEndDate||"")
    const [secondaryPayRate,setSecondaryPayRate] = useState(employeeDepartmentToEdit.secondaryPayRate||"")
    const [tertiaryTitle,setTertiaryTitle] = useState(employeeDepartmentToEdit.tertiaryTitle||"")
    const [tertiaryStartDate,setTertiaryStartDate] = useState(employeeDepartmentToEdit.tertiaryStartDate||"")
    const [tertiaryEndDate,setTertiaryEndDate] = useState(employeeDepartmentToEdit.tertiaryEndDate||"")
    const [tertiaryPayRate,setTertiaryPayRate] = useState(employeeDepartmentToEdit.tertiaryPayRate||"")
    const [quarternaryTitle,setQuarternaryTitle] = useState(employeeDepartmentToEdit.quarternaryTitle||"")
    const [quarternaryStartDate,setQuarternaryStartDate] = useState(employeeDepartmentToEdit.quarternaryStartDate||"")
    const [quarternaryEndDate,setQuarternaryEndDate] = useState(employeeDepartmentToEdit.quarternaryEndDate||"")
    const [quarternaryPayRate,setQuarternaryPayRate] = useState(employeeDepartmentToEdit.quarternaryPayRate||"")
    const [biography,setBiography] = useState(employeeDepartmentToEdit.biography||"")
    const [notes,setNotes] = useState(employeeDepartmentToEdit.notes||"")






// HELPERS FOR EditEmployeeDepartment Button handler---------------------------------------------------



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
        setErrorsPersonalPhone({phone: "Personal Phone is required"});
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

    let employeeDepartment_IdNum = parseInt(employeeDepartment_Id);
    let academicDepartment_IdNum = parseInt(academicDepartment_Id);
    let level_IdNum = parseInt(level_Id);
    let ageNum = parseInt(age);
    let zipNum = parseInt(zip);
    let primaryPayRateNum = parseInt(primaryPayRate);
    let secondaryPayRateNum = parseInt(secondaryPayRate);
    let tertiaryPayRateNum = parseInt(tertiaryPayRate);
    let quarternaryPayRateNum = parseInt(quarternaryPayRate);


    let employeeDepartment_IdErrorBool = false;
    let academicDepartment_IdErrorBool = false;
    let level_IdErrorBool = false;
    let ageErrorBool = false;
    let zipErrorBool = false;
    let primaryPayRateErrorBool = false;
    let secondaryPayRateErrorBool = false;
    let tertiaryPayRateErrorBool = false;
    let quarternaryPayRateErrorBool = false;

    if(employeeDepartment_Id !== "" && (typeof employeeDepartment_IdNum !== "number" || isNaN(employeeDepartment_IdNum))) {
        employeeDepartment_IdErrorBool = true;
        setErrorsEmployeeDepartment_Id({employeeDepartment_Id: "EmployeeDepartment Department ID must be an integer"});
    } else {
        employeeDepartment_IdErrorBool = false;
        setErrorsEmployeeDepartment_Id({});
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

    if(age !== "" && (typeof ageNum !== "number" || isNaN(ageNum))){
        ageErrorBool = true;
        setErrorsAge({age: "Age must be an integer"});
    } else {
        ageErrorBool = false;
        setErrorsAge({});
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
        (employeeDepartment_IdErrorBool) ||
        (academicDepartment_IdErrorBool) ||
        (level_IdErrorBool) ||
        (ageErrorBool) ||
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


         if(	employeeDepartment_Id	)	editedEmployeeDepartment	.	employeeDepartment_Id	=	employeeDepartment_Id	;
         if(	academicDepartment_Id	)	editedEmployeeDepartment	.	academicDepartment_Id	=	academicDepartment_Id	;
         if(	level_Id	)	editedEmployeeDepartment	.	level_Id	=	level_Id	;
         if(	firstName	)	editedEmployeeDepartment	.	firstName	=	firstName	;
         if(	nickName	)	editedEmployeeDepartment	.	nickName	=	nickName	;
         if(	middleName	)	editedEmployeeDepartment	.	middleName	=	middleName	;
         if(	lastName	)	editedEmployeeDepartment	.	lastName	=	lastName	;
         if(	familyName	)	editedEmployeeDepartment	.	familyName	=	familyName	;
         if(	email	)	editedEmployeeDepartment	.	email	=	email	;
         if(	phone	)	editedEmployeeDepartment	.	phone	=	phone	;
         if(	street	)	editedEmployeeDepartment	.	street	=	street	;
         if(	city	)	editedEmployeeDepartment	.	city	=	city	;
         if(	state	)	editedEmployeeDepartment	.	state	=	state	;
         if(	zip	)	editedEmployeeDepartment	.	zip	=	zip	;
         if(	dob	)	editedEmployeeDepartment	.	dob	=	dob	;
         if(	age	)	editedEmployeeDepartment	.	age	=	age	;
         if(	ssn	)	editedEmployeeDepartment	.	ssn	=	ssn	;
         if(	firstLang	)	editedEmployeeDepartment	.	firstLang	=	firstLang	;
         if(	secondLang	)	editedEmployeeDepartment	.	secondLang	=	secondLang	;
         if(	thirdLang	)	editedEmployeeDepartment	.	thirdLang	=	thirdLang	;
         if(	firstInst	)	editedEmployeeDepartment	.	firstInst	=	firstInst	;
         if(	secondInst	)	editedEmployeeDepartment	.	secondInst	=	secondInst	;
         if(	thirdInst	)	editedEmployeeDepartment	.	thirdInst	=	thirdInst	;
         if(	primaryTitle	)	editedEmployeeDepartment	.	primaryTitle	=	primaryTitle	;
         if(	primaryStartDate	)	editedEmployeeDepartment	.	primaryStartDate	=	primaryStartDate	;
         if(	primaryEndDate	)	editedEmployeeDepartment	.	primaryEndDate	=	primaryEndDate	;
         if(	primaryPayRate	)	editedEmployeeDepartment	.	primaryPayRate	=	primaryPayRate	;
         if(	secondaryTitle	)	editedEmployeeDepartment	.	secondaryTitle	=	secondaryTitle	;
         if(	secondaryStartDate	)	editedEmployeeDepartment	.	secondaryStartDate	=	secondaryStartDate	;
         if(	secondaryEndDate	)	editedEmployeeDepartment	.	secondaryEndDate	=	secondaryEndDate	;
         if(	secondaryPayRate	)	editedEmployeeDepartment	.	secondaryPayRate	=	secondaryPayRate	;
         if(	tertiaryTitle	)	editedEmployeeDepartment	.	tertiaryTitle	=	tertiaryTitle	;
         if(	tertiaryStartDate	)	editedEmployeeDepartment	.	tertiaryStartDate	=	tertiaryStartDate	;
         if(	tertiaryEndDate	)	editedEmployeeDepartment	.	tertiaryEndDate	=	tertiaryEndDate	;
         if(	tertiaryPayRate	)	editedEmployeeDepartment	.	tertiaryPayRate	=	tertiaryPayRate	;
         if(	quarternaryTitle	)	editedEmployeeDepartment	.	quarternaryTitle	=	quarternaryTitle	;
         if(	quarternaryStartDate	)	editedEmployeeDepartment	.	quarternaryStartDate	=	quarternaryStartDate	;
         if(	quarternaryEndDate	)	editedEmployeeDepartment	.	quarternaryEndDate	=	quarternaryEndDate	;
         if(	quarternaryPayRate	)	editedEmployeeDepartment	.	quarternaryPayRate	=	quarternaryPayRate	;
         if(	biography	)	editedEmployeeDepartment	.	biography	=	biography	;
         if(	notes	)	editedEmployeeDepartment	.	notes	=	notes	;

         editedEmployeeDepartment.id = employeeDepartmentToEdit.id;

        //  console.log("editedEmployeeDepartment 423: ", editedEmployeeDepartment)

         // --------------------------MAKING THE DISPATCH---------------------//
            let employeeDepartmentId;
            let editedEmployeeDepartmentDetails;
            if(editedEmployeeDepartmentDetails);

            await dispatch(employeeDepartmentsActions.thunkEditEmployeeDepartment(editedEmployeeDepartment))
            .then(response => {
                dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll())
                // console.log("response 432: ", response, "response.payload", response.payload, "response.payload[0]", response.payload.id);
                employeeDepartmentId = response.payload.id
                return employeeDepartmentId
            }).catch(async (res) => {
                    // console.log("res 439", res);
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentById(employeeDepartmentId)).then(response => {
                editedEmployeeDepartmentDetails = response;

                navigate(`/employeeDepartments`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }




// return-----------------------------------
        return (
          <main id="EditEmployeeDepartmentMain">

            <h1 id='EditEmployeeDepartmentH1'>Edit EmployeeDepartment</h1>


                    <form id='EditEmployeeDepartmentForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditEmployeeDepartmentFormSection1">

                            <h4 id="EditEmployeeDepartmentFormSection1H4">Personal Information</h4>

                            <p id="EditEmployeeDepartmentFormSection1P">
                                Edit personal information for existing employeeDepartment.
                            </p>
                            <h5 className='EditEmployeeDepartmentH5'>* indicates required field</h5>



                            <div id='firstNameContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='EditEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            First Name 1:

                                            <input
                                            className='EditEmployeeDepartmentFormInput'
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
                            {errorsFirstName.firstName && <p className='EditEmployeeDepartmentErrors'>{errorsFirstName.firstName}</p>}


                            <div id='nickNameContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            First Name 2:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="nickName"
                                            name="nickName"
                                            type="text"
                                            placeholder='First Name 2'
                                            value={nickName}
                                            onChange={(e) => setNickName(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.nickName && <p className='EditEmployeeDepartmentErrors'>{errors.nickName}</p>}


                            <div id='middleNameContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Middle Name:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="middleName"
                                            name="middleName"
                                            type="text"
                                            placeholder='Middle Name'
                                            value={middleName}
                                            onChange={(e) => setMiddleName(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.middleName && <p className='EditEmployeeDepartmentErrors'>{errors.middleName}</p>}




                            <div id='lastNameContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='EditEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Last Name 1:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
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
                            {errorsLastName.lastName && <p className='EditEmployeeDepartmentErrors'>{errorsLastName.lastName}</p>}



                            <div id='familyNameContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Last Name 2:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="familyName"
                                            name="familyName"
                                            type="text"
                                            placeholder='Last Name 2'
                                            value={familyName}
                                            onChange={(e) => setFamilyName(e.target.value)}

                                            />
                                        </label>


                            </div>
                            {errors.familyName && <p className='EditEmployeeDepartmentErrors'>{errors.familyName}</p>}




                            <div id='emailContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Personal Email:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder='Personal Email'
                                            value={email}
                                            onChange={(e) => setPersonalEmail(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.email && <p className='EditEmployeeDepartmentErrors'>{errors.email}</p>}



                            <div id='phoneContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='EditEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Personal Phone:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            placeholder='Personal Phone'
                                            value={phone}
                                            onChange={(e) => setPersonalPhone(e.target.value)}
                                            required
                                            />
                                        </label>


                            </div>
                            {errorsPersonalPhone.phone && <p className='EditEmployeeDepartmentErrors'>{errorsPersonalPhone.phone}</p>}




                            <div id='streetContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Street:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="street"
                                            name="street"
                                            type="text"
                                            placeholder='Street'
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.street && <p className='EditEmployeeDepartmentErrors'>{errors.street}</p>}



                            <div id='cityContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            City:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="city"
                                            name="city"
                                            type="text"
                                            placeholder='City'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.city && <p className='EditEmployeeDepartmentErrors'>{errors.city}</p>}


                            <div id='stateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            State:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="state"
                                            name="state"
                                            type="text"
                                            placeholder='State'
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.state && <p className='EditEmployeeDepartmentErrors'>{errors.state}</p>}


                            <div id='zipContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Zip:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="zip"
                                            name="zip"
                                            type="text"
                                            placeholder='Zip'
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsZip.zip && <p className='EditEmployeeDepartmentErrors'>{errorsZip.zip}</p>}




                            <div id='dobContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Date Of Birth  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="dob"
                                            name="dob"
                                            type="text"
                                            placeholder='Date Of Birth  (mm/dd/yyyy)'
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.dob && <p className='EditEmployeeDepartmentErrors'>{errors.dob}</p>}


                            <div id='ageContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Age:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="age"
                                            name="age"
                                            type="text"
                                            placeholder='Age'
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsAge.age && <p className='EditEmployeeDepartmentErrors'>{errorsAge.age}</p>}


                            <div id='ssnContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            SSN:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="ssn"
                                            name="ssn"
                                            type="text"
                                            placeholder='SSN'
                                            value={ssn}
                                            onChange={(e) => setSsn(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSsn.ssn && <p className='EditEmployeeDepartmentErrors'>{errorsSsn.ssn}</p>}




                        </section>

                        <hr className='EditEmployeeDepartmentHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                        <section id="EditEmployeeDepartmentFormSection2">

                        <h4 id="EditEmployeeDepartmentFormSection2H4">Employment Information</h4>

                            <p id="EditEmployeeDepartmentFormSection2P">
                                Edit employment information for existing employeeDepartment.
                            </p>
                            <h5 className='EditEmployeeDepartmentH5'>* indicates required field</h5>



                            <div id='employeeDepartment_IdContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            EmployeeDepartment Department ID:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="employeeDepartment_Id"
                                            name="employeeDepartment_Id"
                                            type="text"
                                            placeholder='EmployeeDepartment Department ID'
                                            value={employeeDepartment_Id}
                                            onChange={(e) => setEmployeeDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsEmployeeDepartment_Id.employeeDepartment_Id && <p className='EditEmployeeDepartmentErrors'>{errorsEmployeeDepartment_Id.employeeDepartment_Id}</p>}



                            <div id='academicDepartment_IdContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Academic Department ID:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="academicDepartment_Id"
                                            name="academicDepartment_Id"
                                            type="text"
                                            placeholder='Academic Department ID'
                                            value={academicDepartment_Id}
                                            onChange={(e) => setAcademicDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsAcademicDepartment_Id.academicDepartment_Id && <p className='EditEmployeeDepartmentErrors'>{errorsAcademicDepartment_Id.academicDepartment_Id}</p>}



                            <div id='level_IdContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            User Type ID:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="level_Id"
                                            name="level_Id"
                                            type="text"
                                            placeholder='User Type ID'
                                            value={level_Id}
                                            onChange={(e) => setUserType_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsUserType_Id.level_Id && <p className='EditEmployeeDepartmentErrors'>{errorsUserType_Id.level_Id}</p>}



                            <div id='primaryTitleContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Primary Title:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="primaryTitle"
                                            name="primaryTitle"
                                            type="text"
                                            placeholder='Primary Title'
                                            value={primaryTitle}
                                            onChange={(e) => setPrimaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryTitle && <p className='EditEmployeeDepartmentErrors'>{errors.primaryTitle}</p>}



                            <div id='primaryStartDateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Primary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="primaryStartDate"
                                            name="primaryStartDate"
                                            type="text"
                                            placeholder='Primary Start Date  (mm/dd/yyyy)'
                                            value={primaryStartDate}
                                            onChange={(e) => setPrimaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryStartDate && <p className='EditEmployeeDepartmentErrors'>{errors.primaryStartDate}</p>}



                            <div id='primaryEndDateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Primary End Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="primaryEndDate"
                                            name="primaryEndDate"
                                            type="text"
                                            placeholder='Primary End Date'
                                            value={primaryEndDate}
                                            onChange={(e) => setPrimaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryEndDate && <p className='EditEmployeeDepartmentErrors'>{errors.primaryEndDate}</p>}



                            <div id='primaryPayRateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Primary Pay Rate $ (USD):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="primaryPayRate"
                                            name="primaryPayRate"
                                            type="text"
                                            placeholder='Primary Pay Rate $ (USD)'
                                            value={primaryPayRate}
                                            onChange={(e) => setPrimaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsPrimaryPayRate.primaryPayRate && <p className='EditEmployeeDepartmentErrors'>{errorsPrimaryPayRate.primaryPayRate}</p>}











                        </section>

                        <hr className='EditEmployeeDepartmentHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                        <section id="EditEmployeeDepartmentFormSection3">

                        <h4 id="EditEmployeeDepartmentFormSection3H4">Biographical Information</h4>

                            <p id="EditEmployeeDepartmentFormSection3P">
                                Edit biographical information for existing employeeDepartment.
                            </p>
                            <h5 className='EditEmployeeDepartmentH5'>* indicates required field</h5>



                            <div id='firstLangContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='EditEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            First Language:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
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
                            {errorsFirstLang.firstLang && <p className='EditEmployeeDepartmentErrors'>{errorsFirstLang.firstLang}</p>}



                            <div id='secondLangContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Second Language:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="secondLang"
                                            name="secondLang"
                                            type="text"
                                            placeholder='Second Language'
                                            value={secondLang}
                                            onChange={(e) => setSecondLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondLang && <p className='EditEmployeeDepartmentErrors'>{errors.secondLang}</p>}


                            <div id='thirdLangContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Third Language:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="thirdLang"
                                            name="thirdLang"
                                            type="text"
                                            placeholder='Third Language'
                                            value={thirdLang}
                                            onChange={(e) => setThirdLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdLang && <p className='EditEmployeeDepartmentErrors'>{errors.thirdLang}</p>}



                            <div id='firstInstContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            First Instrument:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="firstInst"
                                            name="firstInst"
                                            type="text"
                                            placeholder='First Instrument'
                                            value={firstInst}
                                            onChange={(e) => setFirstInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.firstInst && <p className='EditEmployeeDepartmentErrors'>{errors.firstInst}</p>}



                            <div id='secondInstContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Second Instrument:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="secondInst"
                                            name="secondInst"
                                            type="text"
                                            placeholder='Second Instrument'
                                            value={secondInst}
                                            onChange={(e) => setSecondInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondInst && <p className='EditEmployeeDepartmentErrors'>{errors.secondInst}</p>}




                            <div id='thirdInstContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Third Instrument:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="thirdInst"
                                            name="thirdInst"
                                            type="text"
                                            placeholder='Third Instrument'
                                            value={thirdInst}
                                            onChange={(e) => setThirdInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdInst && <p className='EditEmployeeDepartmentErrors'>{errors.thirdInst}</p>}





                            <div id='biographyContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Biography:
                                            <textarea
                                            className='EditEmployeeDepartmentFormInput'
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
                            {errors.biography && <p className='EditEmployeeDepartmentErrors'>{errors.biography}</p>}




                            <div id='notesContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Notes:
                                            <textarea
                                            className='EditEmployeeDepartmentFormInput'
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
                            {errors.notes && <p className='EditEmployeeDepartmentErrors'>{errors.notes}</p>}





                        </section>

                        <hr className='EditEmployeeDepartmentHr'></hr>


{/* form section 4---------------------------------------------------------- */}




                        <section id="EditEmployeeDepartmentFormSection4">

                        <h4 id="EditEmployeeDepartmentFormSection4H4">Additional Employment Information</h4>

                            <p id="EditEmployeeDepartmentFormSection4P">
                            Edit additional employment information for existing employeeDepartment.
                            </p>
                            <h5 className='EditEmployeeDepartmentH5'>* indicates required field</h5>


{/* -------------------------------- SECONDARY -----------------------------*/}

                            <div id='secondaryTitleContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Secondary Title:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="secondaryTitle"
                                            name="secondaryTitle"
                                            type="text"
                                            placeholder='Secondary Title'
                                            value={secondaryTitle}
                                            onChange={(e) => setSecondaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryTitle && <p className='EditEmployeeDepartmentErrors'>{errors.secondaryTitle}</p>}



                            <div id='secondaryStartDateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Secondary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="secondaryStartDate"
                                            name="secondaryStartDate"
                                            type="text"
                                            placeholder='Secondary Start Date'
                                            value={secondaryStartDate}
                                            onChange={(e) => setSecondaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryStartDate && <p className='EditEmployeeDepartmentErrors'>{errors.secondaryStartDate}</p>}



                            <div id='secondaryEndDateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Secondary End Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="secondaryEndDate"
                                            name="secondaryEndDate"
                                            type="text"
                                            placeholder='Secondary End Date  (mm/dd/yyyy)  (mm/dd/yyyy)'
                                            value={secondaryEndDate}
                                            onChange={(e) => setSecondaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryEndDate && <p className='EditEmployeeDepartmentErrors'>{errors.secondaryEndDate}</p>}



                            <div id='secondaryPayRateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Secondary Pay Rate $ (USD):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="secondaryPayRate"
                                            name="secondaryPayRate"
                                            type="text"
                                            placeholder='Secondary Pay Rate $ (USD)'
                                            value={secondaryPayRate}
                                            onChange={(e) => setSecondaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSecondaryPayRate.secondaryPayRate && <p className='EditEmployeeDepartmentErrors'>{errorsSecondaryPayRate.secondaryPayRate}</p>}






{/* -------------------------------- TERTIARY -----------------------------*/}




                            <div id='tertiaryTitleContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Tertiary Title:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="tertiaryTitle"
                                            name="tertiaryTitle"
                                            type="text"
                                            placeholder='Tertiary Title'
                                            value={tertiaryTitle}
                                            onChange={(e) => setTertiaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryTitle && <p className='EditEmployeeDepartmentErrors'>{errors.tertiaryTitle}</p>}



                            <div id='tertiaryStartDateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Tertiary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="tertiaryStartDate"
                                            name="tertiaryStartDate"
                                            type="text"
                                            placeholder='Tertiary Start Date  (mm/dd/yyyy)'
                                            value={tertiaryStartDate}
                                            onChange={(e) => setTertiaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryStartDate && <p className='EditEmployeeDepartmentErrors'>{errors.tertiaryStartDate}</p>}



                            <div id='tertiaryEndDateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Tertiary End Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="tertiaryEndDate"
                                            name="tertiaryEndDate"
                                            type="text"
                                            placeholder='Tertiary End Date  (mm/dd/yyyy)'
                                            value={tertiaryEndDate}
                                            onChange={(e) => setTertiaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryEndDate && <p className='EditEmployeeDepartmentErrors'>{errors.tertiaryEndDate}</p>}




                            <div id='tertiaryPayRateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Tertiary Pay Rate $ (USD):
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="tertiaryPayRate"
                                            name="tertiaryPayRate"
                                            type="text"
                                            placeholder='Tertiary Pay Rate $ (USD)'
                                            value={tertiaryPayRate}
                                            onChange={(e) => setTertiaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsTertiaryPayRate.tertiaryPayRate && <p className='EditEmployeeDepartmentErrors'>{errorsTertiaryPayRate.tertiaryPayRate}</p>}




{/* -------------------------------- QUARTERNARY -----------------------------*/}






                            <div id='quarternaryTitleContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                            <label className='EditEmployeeDepartmentFormLabel'>
                                Quarternary Title:
                                <input
                                className='EditEmployeeDepartmentFormInput'
                                id="quarternaryTitle"
                                name="quarternaryTitle"
                                type="text"
                                placeholder='Quarternary Title'
                                value={quarternaryTitle}
                                onChange={(e) => setQuarternaryTitle(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryTitle && <p className='EditEmployeeDepartmentErrors'>{errors.quarternaryTitle}</p>}



                            <div id='quarternaryStartDateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                            <label className='EditEmployeeDepartmentFormLabel'>
                                Quarternary Start Date  (mm/dd/yyyy):
                                <input
                                className='EditEmployeeDepartmentFormInput'
                                id="quarternaryStartDate"
                                name="quarternaryStartDate"
                                type="text"
                                placeholder='Quarternary Start Date  (mm/dd/yyyy)'
                                value={quarternaryStartDate}
                                onChange={(e) => setQuarternaryStartDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryStartDate && <p className='EditEmployeeDepartmentErrors'>{errors.quarternaryStartDate}</p>}



                            <div id='quarternaryEndDateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                            <label className='EditEmployeeDepartmentFormLabel'>
                                Quarternary End Date  (mm/dd/yyyy):
                                <input
                                className='EditEmployeeDepartmentFormInput'
                                id="quarternaryEndDate"
                                name="quarternaryEndDate"
                                type="text"
                                placeholder='Quarternary End Date  (mm/dd/yyyy)'
                                value={quarternaryEndDate}
                                onChange={(e) => setQuarternaryEndDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryEndDate && <p className='EditEmployeeDepartmentErrors'>{errors.quarternaryEndDate}</p>}




                            <div id='quarternaryPayRateContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                            <label className='EditEmployeeDepartmentFormLabel'>
                                Quarternary Pay Rate $ (USD):
                                <input
                                className='EditEmployeeDepartmentFormInput'
                                id="quarternaryPayRate"
                                name="quarternaryPayRate"
                                type="text"
                                placeholder='Quarternary Pay Rate $ (USD)'
                                value={quarternaryPayRate}
                                onChange={(e) => setQuarternaryPayRate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errorsQuarternaryPayRate.quarternaryPayRate && <p className='EditEmployeeDepartmentErrors'>{errorsQuarternaryPayRate.quarternaryPayRate}</p>}



                        </section>

                        <hr className='EditEmployeeDepartmentHr'></hr>




{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='EditEmployeeDepartmentRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="EditEmployeeDepartmentButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Submit Edit
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default EditEmployeeDepartmentForm;
