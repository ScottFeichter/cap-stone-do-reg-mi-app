import './EditEmployeeForm.css';
// const BASE_CLASS_NAME = "EditEmployeeForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';

import { TbPlayerSkipBackFilled } from "react-icons/tb";
// import { TbPlayerSkipForwardFilled } from "react-icons/tb";


import * as employeesActions from '../../../redux/employeesReducer.js';



function EditEmployeeForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const location = useLocation();
        const {employeeToEdit} = location.state;

        // console.log("employeeToEdit : ", employeeToEdit)

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
        const [errorsZip, setErrorsZip ] = useState({})
        const [errorsPrimaryPayRate, setErrorsPrimaryPayRate ] = useState({})
        const [errorsSecondaryPayRate, setErrorsSecondaryPayRate ] = useState({})
        const [errorsTertiaryPayRate, setErrorsTertiaryPayRate ] = useState({})
        const [errorsQuarternaryPayRate, setErrorsQuarternaryPayRate ] = useState({})


        // const [isDisabled, setIsDisabled] = useState(false);


        let editedEmployee = {

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



    const [employeeDepartment_Id,setEmployeeDepartment_Id] = useState(employeeToEdit.employeeDepartment_Id||"")
    const [academicDepartment_Id,setAcademicDepartment_Id] = useState(employeeToEdit.academicDepartment_Id||"")
    const [level_Id,setUserType_Id] = useState(employeeToEdit.level_Id||"")
    const [firstName,setFirstName] = useState(employeeToEdit.firstName||"")
    const [nickName,setNickName] = useState(employeeToEdit.nickName||"")
    const [middleName,setMiddleName] = useState(employeeToEdit.middleName||"")
    const [lastName,setLastName] = useState(employeeToEdit.lastName||"")
    const [familyName,setFamilyName] = useState(employeeToEdit.familyName||"")
    const [email,setPersonalEmail] = useState(employeeToEdit.email||"")
    const [phone,setPersonalPhone] = useState(employeeToEdit.phone||"")
    const [street,setStreet] = useState(employeeToEdit.street||"")
    const [city,setCity] = useState(employeeToEdit.city||"")
    const [state,setState] = useState(employeeToEdit.state||"")
    const [zip,setZip] = useState(employeeToEdit.zip||"")
    const [dob,setDob] = useState(employeeToEdit.dob||"")
    const [ssn,setSsn] = useState(employeeToEdit.ssn||"")
    const [firstLang,setFirstLang] = useState(employeeToEdit.firstLang||"")
    const [secondLang,setSecondLang] = useState(employeeToEdit.secondLang||"")
    const [thirdLang,setThirdLang] = useState(employeeToEdit.thirdLang||"")
    const [firstInst,setFirstInst] = useState(employeeToEdit.firstInst||"")
    const [secondInst,setSecondInst] = useState(employeeToEdit.secondInst||"")
    const [thirdInst,setThirdInst] = useState(employeeToEdit.thirdInst||"")
    const [primaryTitle,setPrimaryTitle] = useState(employeeToEdit.primaryTitle||"")
    const [primaryStartDate,setPrimaryStartDate] = useState(employeeToEdit.primaryStartDate||"")
    const [primaryEndDate,setPrimaryEndDate] = useState(employeeToEdit.primaryEndDate||"")
    const [primaryPayRate,setPrimaryPayRate] = useState(employeeToEdit.primaryPayRate||"")
    const [secondaryTitle,setSecondaryTitle] = useState(employeeToEdit.secondaryTitle||"")
    const [secondaryStartDate,setSecondaryStartDate] = useState(employeeToEdit.secondaryStartDate||"")
    const [secondaryEndDate,setSecondaryEndDate] = useState(employeeToEdit.secondaryEndDate||"")
    const [secondaryPayRate,setSecondaryPayRate] = useState(employeeToEdit.secondaryPayRate||"")
    const [tertiaryTitle,setTertiaryTitle] = useState(employeeToEdit.tertiaryTitle||"")
    const [tertiaryStartDate,setTertiaryStartDate] = useState(employeeToEdit.tertiaryStartDate||"")
    const [tertiaryEndDate,setTertiaryEndDate] = useState(employeeToEdit.tertiaryEndDate||"")
    const [tertiaryPayRate,setTertiaryPayRate] = useState(employeeToEdit.tertiaryPayRate||"")
    const [quarternaryTitle,setQuarternaryTitle] = useState(employeeToEdit.quarternaryTitle||"")
    const [quarternaryStartDate,setQuarternaryStartDate] = useState(employeeToEdit.quarternaryStartDate||"")
    const [quarternaryEndDate,setQuarternaryEndDate] = useState(employeeToEdit.quarternaryEndDate||"")
    const [quarternaryPayRate,setQuarternaryPayRate] = useState(employeeToEdit.quarternaryPayRate||"")
    const [biography,setBiography] = useState(employeeToEdit.biography||"")
    const [notes,setNotes] = useState(employeeToEdit.notes||"")






// HELPERS FOR EditEmployee Button handler---------------------------------------------------



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

    let employeeDepartment_IdNum = parseInt(employeeDepartment_Id);
    let academicDepartment_IdNum = parseInt(academicDepartment_Id);
    let level_IdNum = parseInt(level_Id);
    let zipNum = parseInt(zip);
    let primaryPayRateNum = parseInt(primaryPayRate);
    let secondaryPayRateNum = parseInt(secondaryPayRate);
    let tertiaryPayRateNum = parseInt(tertiaryPayRate);
    let quarternaryPayRateNum = parseInt(quarternaryPayRate);


    let employeeDepartment_IdErrorBool = false;
    let academicDepartment_IdErrorBool = false;
    let level_IdErrorBool = false;
    let zipErrorBool = false;
    let primaryPayRateErrorBool = false;
    let secondaryPayRateErrorBool = false;
    let tertiaryPayRateErrorBool = false;
    let quarternaryPayRateErrorBool = false;

    if(employeeDepartment_Id !== "" && (typeof employeeDepartment_IdNum !== "number" || isNaN(employeeDepartment_IdNum))) {
        employeeDepartment_IdErrorBool = true;
        setErrorsEmployeeDepartment_Id({employeeDepartment_Id: "Employee Department ID must be an integer"});
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


         if(	employeeDepartment_Id	)	editedEmployee	.	employeeDepartment_Id	=	employeeDepartment_Id	;
         if(	academicDepartment_Id	)	editedEmployee	.	academicDepartment_Id	=	academicDepartment_Id	;
         if(	level_Id	)	editedEmployee	.	level_Id	=	level_Id	;
         if(	firstName	)	editedEmployee	.	firstName	=	firstName	;
         if(	nickName	)	editedEmployee	.	nickName	=	nickName	;
         if(	middleName	)	editedEmployee	.	middleName	=	middleName	;
         if(	lastName	)	editedEmployee	.	lastName	=	lastName	;
         if(	familyName	)	editedEmployee	.	familyName	=	familyName	;
         if(	email	)	editedEmployee	.	email	=	email	;
         if(	phone	)	editedEmployee	.	phone	=	phone	;
         if(	street	)	editedEmployee	.	street	=	street	;
         if(	city	)	editedEmployee	.	city	=	city	;
         if(	state	)	editedEmployee	.	state	=	state	;
         if(	zip	)	editedEmployee	.	zip	=	zip	;
         if(	dob	)	editedEmployee	.	dob	=	dob	;
         if(	ssn	)	editedEmployee	.	ssn	=	ssn	;
         if(	firstLang	)	editedEmployee	.	firstLang	=	firstLang	;
         if(	secondLang	)	editedEmployee	.	secondLang	=	secondLang	;
         if(	thirdLang	)	editedEmployee	.	thirdLang	=	thirdLang	;
         if(	firstInst	)	editedEmployee	.	firstInst	=	firstInst	;
         if(	secondInst	)	editedEmployee	.	secondInst	=	secondInst	;
         if(	thirdInst	)	editedEmployee	.	thirdInst	=	thirdInst	;
         if(	primaryTitle	)	editedEmployee	.	primaryTitle	=	primaryTitle	;
         if(	primaryStartDate	)	editedEmployee	.	primaryStartDate	=	primaryStartDate	;
         if(	primaryEndDate	)	editedEmployee	.	primaryEndDate	=	primaryEndDate	;
         if(	primaryPayRate	)	editedEmployee	.	primaryPayRate	=	primaryPayRate	;
         if(	secondaryTitle	)	editedEmployee	.	secondaryTitle	=	secondaryTitle	;
         if(	secondaryStartDate	)	editedEmployee	.	secondaryStartDate	=	secondaryStartDate	;
         if(	secondaryEndDate	)	editedEmployee	.	secondaryEndDate	=	secondaryEndDate	;
         if(	secondaryPayRate	)	editedEmployee	.	secondaryPayRate	=	secondaryPayRate	;
         if(	tertiaryTitle	)	editedEmployee	.	tertiaryTitle	=	tertiaryTitle	;
         if(	tertiaryStartDate	)	editedEmployee	.	tertiaryStartDate	=	tertiaryStartDate	;
         if(	tertiaryEndDate	)	editedEmployee	.	tertiaryEndDate	=	tertiaryEndDate	;
         if(	tertiaryPayRate	)	editedEmployee	.	tertiaryPayRate	=	tertiaryPayRate	;
         if(	quarternaryTitle	)	editedEmployee	.	quarternaryTitle	=	quarternaryTitle	;
         if(	quarternaryStartDate	)	editedEmployee	.	quarternaryStartDate	=	quarternaryStartDate	;
         if(	quarternaryEndDate	)	editedEmployee	.	quarternaryEndDate	=	quarternaryEndDate	;
         if(	quarternaryPayRate	)	editedEmployee	.	quarternaryPayRate	=	quarternaryPayRate	;
         if(	biography	)	editedEmployee	.	biography	=	biography	;
         if(	notes	)	editedEmployee	.	notes	=	notes	;

         editedEmployee.id = employeeToEdit.id;

        //  console.log("editedEmployee 423: ", editedEmployee)

         // --------------------------MAKING THE DISPATCH---------------------//
            let employeeId;
            let editedEmployeeDetails;
            if(editedEmployeeDetails);

            await dispatch(employeesActions.thunkEditEmployee(editedEmployee))
            .then(response => {
                dispatch(employeesActions.thunkGetEmployeesAll())
                // console.log("response 432: ", response, "response.payload", response.payload, "response.payload[0]", response.payload.id);
                employeeId = response.payload.id
                return employeeId
            }).catch(async (res) => {
                    // console.log("res 439", res);
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(employeesActions.thunkGetEmployeeById(employeeId)).then(response => {
                editedEmployeeDetails = response;

                navigate(`/employees`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }



// =====================TRANSPORT BUTTONS HANDLERS=========================

        // -----------------------------HANDLE BACK -------------------------------//
        const handleBackClick = async (e) => {
            e.preventDefault();
            // console.log('HANDLE BACK');
            navigate(`/employees/${employeeToEdit.id}`);
        }

        // -----------------------------HANDLE FORWARD -------------------------------//
        // const handleForthClick = async (e) => {
        //     e.preventDefault();
        //     // console.log('HANDLE FORTH');
        //     navigate('/createNewFacilityForm');
        // }





// return-----------------------------------
        return (
          <main id="EditEmployeeMain">

            <h1 id='EditEmployeeH1'>Edit Employee</h1>

            <div id="EditEmployeeTransportContainer">

                <button  id='EditEmployeeBack' onClick={handleBackClick}>
                    <TbPlayerSkipBackFilled id={`EditEmployeeTbPlayerBack`} />Back To Details
                </button>


                {/* <button id='EditEmployeeFormForth' onClick={handleForthClick}>Forth
                    <TbPlayerSkipForwardFilled id={`EditEmployeeFormTbPlayerForth`} />
                </button> */}

            </div>


                    <form id='EditEmployeeForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditEmployeeFormSection1">

                            <h4 id="EditEmployeeFormSection1H4">Personal Information</h4>

                            <p id="EditEmployeeFormSection1P">
                                Edit personal information for existing employee.
                            </p>
                            <h5 className='EditEmployeeH5'>* indicates required field</h5>



                            <div id='firstNameContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <p className='EditEmployeeFormRequired'>{required}</p>
                                        <label className='EditEmployeeFormLabel'>
                                            First Name:

                                            <input
                                            className='EditEmployeeFormInput'
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
                            {errorsFirstName.firstName && <p className='EditEmployeeErrors'>{errorsFirstName.firstName}</p>}


                            <div id='nickNameContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Nick Name:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="nickName"
                                            name="nickName"
                                            type="text"
                                            placeholder='Nick Name'
                                            value={nickName}
                                            onChange={(e) => setNickName(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.nickName && <p className='EditEmployeeErrors'>{errors.nickName}</p>}


                            <div id='middleNameContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Middle Name:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="middleName"
                                            name="middleName"
                                            type="text"
                                            placeholder='Middle Name'
                                            value={middleName}
                                            onChange={(e) => setMiddleName(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.middleName && <p className='EditEmployeeErrors'>{errors.middleName}</p>}




                            <div id='lastNameContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <p className='EditEmployeeFormRequired'>{required}</p>
                                        <label className='EditEmployeeFormLabel'>
                                            Last Name:
                                            <input
                                            className='EditEmployeeFormInput'
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
                            {errorsLastName.lastName && <p className='EditEmployeeErrors'>{errorsLastName.lastName}</p>}



                            <div id='FamilyNameContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Family Name:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="familyName"
                                            name="familyName"
                                            type="text"
                                            placeholder='Family Name'
                                            value={familyName}
                                            onChange={(e) => setFamilyName(e.target.value)}

                                            />
                                        </label>


                            </div>
                            {errors.familyName && <p className='EditEmployeeErrors'>{errors.familyName}</p>}




                            <div id='emailContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Email:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setPersonalEmail(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.email && <p className='EditEmployeeErrors'>{errors.email}</p>}



                            <div id='phoneContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <p className='EditEmployeeFormRequired'>{required}</p>
                                        <label className='EditEmployeeFormLabel'>
                                            Phone:
                                            <input
                                            className='EditEmployeeFormInput'
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
                            {errorsPersonalPhone.phone && <p className='EditEmployeeErrors'>{errorsPersonalPhone.phone}</p>}




                            <div id='streetContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Street:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="street"
                                            name="street"
                                            type="text"
                                            placeholder='Street'
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.street && <p className='EditEmployeeErrors'>{errors.street}</p>}



                            <div id='cityContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            City:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="city"
                                            name="city"
                                            type="text"
                                            placeholder='City'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.city && <p className='EditEmployeeErrors'>{errors.city}</p>}


                            <div id='stateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            State:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="state"
                                            name="state"
                                            type="text"
                                            placeholder='State'
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.state && <p className='EditEmployeeErrors'>{errors.state}</p>}


                            <div id='zipContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Zip:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="zip"
                                            name="zip"
                                            type="text"
                                            placeholder='Zip'
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsZip.zip && <p className='EditEmployeeErrors'>{errorsZip.zip}</p>}




                            <div id='dobContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Date Of Birth  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="dob"
                                            name="dob"
                                            type="text"
                                            placeholder='Date Of Birth  (mm/dd/yyyy)'
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.dob && <p className='EditEmployeeErrors'>{errors.dob}</p>}


                            <div id='ssnContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            SSN:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="ssn"
                                            name="ssn"
                                            type="text"
                                            placeholder='SSN'
                                            value={ssn}
                                            onChange={(e) => setSsn(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSsn.ssn && <p className='EditEmployeeErrors'>{errorsSsn.ssn}</p>}




                        </section>

                        <hr className='EditEmployeeHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                        <section id="EditEmployeeFormSection2">

                        <h4 id="EditEmployeeFormSection2H4">Employment Information</h4>

                            <p id="EditEmployeeFormSection2P">
                                Edit employment information for existing employee.
                            </p>
                            <h5 className='EditEmployeeH5'>* indicates required field</h5>



                            <div id='employeeDepartment_IdContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Employee Department ID:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="employeeDepartment_Id"
                                            name="employeeDepartment_Id"
                                            type="text"
                                            placeholder='Employee Department ID'
                                            value={employeeDepartment_Id}
                                            onChange={(e) => setEmployeeDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsEmployeeDepartment_Id.employeeDepartment_Id && <p className='EditEmployeeErrors'>{errorsEmployeeDepartment_Id.employeeDepartment_Id}</p>}



                            <div id='academicDepartment_IdContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Academic Department ID:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="academicDepartment_Id"
                                            name="academicDepartment_Id"
                                            type="text"
                                            placeholder='Academic Department ID'
                                            value={academicDepartment_Id}
                                            onChange={(e) => setAcademicDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsAcademicDepartment_Id.academicDepartment_Id && <p className='EditEmployeeErrors'>{errorsAcademicDepartment_Id.academicDepartment_Id}</p>}



                            <div id='level_IdContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            User Type ID:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="level_Id"
                                            name="level_Id"
                                            type="text"
                                            placeholder='User Type ID'
                                            value={level_Id}
                                            onChange={(e) => setUserType_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsUserType_Id.level_Id && <p className='EditEmployeeErrors'>{errorsUserType_Id.level_Id}</p>}



                            <div id='primaryTitleContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Primary Title:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="primaryTitle"
                                            name="primaryTitle"
                                            type="text"
                                            placeholder='Primary Title'
                                            value={primaryTitle}
                                            onChange={(e) => setPrimaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryTitle && <p className='EditEmployeeErrors'>{errors.primaryTitle}</p>}



                            <div id='primaryStartDateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Primary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="primaryStartDate"
                                            name="primaryStartDate"
                                            type="text"
                                            placeholder='Primary Start Date  (mm/dd/yyyy)'
                                            value={primaryStartDate}
                                            onChange={(e) => setPrimaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryStartDate && <p className='EditEmployeeErrors'>{errors.primaryStartDate}</p>}



                            <div id='primaryEndDateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Primary End Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="primaryEndDate"
                                            name="primaryEndDate"
                                            type="text"
                                            placeholder='Primary End Date'
                                            value={primaryEndDate}
                                            onChange={(e) => setPrimaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryEndDate && <p className='EditEmployeeErrors'>{errors.primaryEndDate}</p>}



                            <div id='primaryPayRateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Primary Pay Rate $ (USD):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="primaryPayRate"
                                            name="primaryPayRate"
                                            type="text"
                                            placeholder='Primary Pay Rate $ (USD)'
                                            value={primaryPayRate}
                                            onChange={(e) => setPrimaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsPrimaryPayRate.primaryPayRate && <p className='EditEmployeeErrors'>{errorsPrimaryPayRate.primaryPayRate}</p>}



                        </section>

                        <hr className='EditEmployeeHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                        <section id="EditEmployeeFormSection3">

                        <h4 id="EditEmployeeFormSection3H4">Biographical Information</h4>

                            <p id="EditEmployeeFormSection3P">
                                Edit biographical information for existing employee.
                            </p>
                            <h5 className='EditEmployeeH5'>* indicates required field</h5>



                            <div id='firstLangContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <p className='EditEmployeeFormRequired'>{required}</p>
                                        <label className='EditEmployeeFormLabel'>
                                            First Language:
                                            <input
                                            className='EditEmployeeFormInput'
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
                            {errorsFirstLang.firstLang && <p className='EditEmployeeErrors'>{errorsFirstLang.firstLang}</p>}



                            <div id='secondLangContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Second Language:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="secondLang"
                                            name="secondLang"
                                            type="text"
                                            placeholder='Second Language'
                                            value={secondLang}
                                            onChange={(e) => setSecondLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondLang && <p className='EditEmployeeErrors'>{errors.secondLang}</p>}


                            <div id='thirdLangContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Third Language:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="thirdLang"
                                            name="thirdLang"
                                            type="text"
                                            placeholder='Third Language'
                                            value={thirdLang}
                                            onChange={(e) => setThirdLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdLang && <p className='EditEmployeeErrors'>{errors.thirdLang}</p>}



                            <div id='firstInstContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            First Instrument:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="firstInst"
                                            name="firstInst"
                                            type="text"
                                            placeholder='First Instrument'
                                            value={firstInst}
                                            onChange={(e) => setFirstInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.firstInst && <p className='EditEmployeeErrors'>{errors.firstInst}</p>}



                            <div id='secondInstContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Second Instrument:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="secondInst"
                                            name="secondInst"
                                            type="text"
                                            placeholder='Second Instrument'
                                            value={secondInst}
                                            onChange={(e) => setSecondInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondInst && <p className='EditEmployeeErrors'>{errors.secondInst}</p>}




                            <div id='thirdInstContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Third Instrument:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="thirdInst"
                                            name="thirdInst"
                                            type="text"
                                            placeholder='Third Instrument'
                                            value={thirdInst}
                                            onChange={(e) => setThirdInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdInst && <p className='EditEmployeeErrors'>{errors.thirdInst}</p>}





                            <div id='biographyContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Biography:
                                            <textarea
                                            className='EditEmployeeFormInput'
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
                            {errors.biography && <p className='EditEmployeeErrors'>{errors.biography}</p>}




                            <div id='notesContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Notes:
                                            <textarea
                                            className='EditEmployeeFormInput'
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
                            {errors.notes && <p className='EditEmployeeErrors'>{errors.notes}</p>}





                        </section>

                        <hr className='EditEmployeeHr'></hr>


{/* form section 4---------------------------------------------------------- */}


                        <section id="EditEmployeeFormSection4">

                        <h4 id="EditEmployeeFormSection4H4">Additional Employment Information</h4>

                            <p id="EditEmployeeFormSection4P">
                            Edit additional employment information for existing employee.
                            </p>
                            <h5 className='EditEmployeeH5'>* indicates required field</h5>


{/* -------------------------------- SECONDARY -----------------------------*/}

                            <div id='secondaryTitleContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Secondary Title:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="secondaryTitle"
                                            name="secondaryTitle"
                                            type="text"
                                            placeholder='Secondary Title'
                                            value={secondaryTitle}
                                            onChange={(e) => setSecondaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryTitle && <p className='EditEmployeeErrors'>{errors.secondaryTitle}</p>}



                            <div id='secondaryStartDateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Secondary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="secondaryStartDate"
                                            name="secondaryStartDate"
                                            type="text"
                                            placeholder='Secondary Start Date'
                                            value={secondaryStartDate}
                                            onChange={(e) => setSecondaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryStartDate && <p className='EditEmployeeErrors'>{errors.secondaryStartDate}</p>}



                            <div id='secondaryEndDateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Secondary End Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="secondaryEndDate"
                                            name="secondaryEndDate"
                                            type="text"
                                            placeholder='Secondary End Date  (mm/dd/yyyy)  (mm/dd/yyyy)'
                                            value={secondaryEndDate}
                                            onChange={(e) => setSecondaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryEndDate && <p className='EditEmployeeErrors'>{errors.secondaryEndDate}</p>}



                            <div id='secondaryPayRateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Secondary Pay Rate $ (USD):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="secondaryPayRate"
                                            name="secondaryPayRate"
                                            type="text"
                                            placeholder='Secondary Pay Rate $ (USD)'
                                            value={secondaryPayRate}
                                            onChange={(e) => setSecondaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSecondaryPayRate.secondaryPayRate && <p className='EditEmployeeErrors'>{errorsSecondaryPayRate.secondaryPayRate}</p>}






{/* -------------------------------- TERTIARY -----------------------------*/}




                            <div id='tertiaryTitleContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Tertiary Title:
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="tertiaryTitle"
                                            name="tertiaryTitle"
                                            type="text"
                                            placeholder='Tertiary Title'
                                            value={tertiaryTitle}
                                            onChange={(e) => setTertiaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryTitle && <p className='EditEmployeeErrors'>{errors.tertiaryTitle}</p>}



                            <div id='tertiaryStartDateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Tertiary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="tertiaryStartDate"
                                            name="tertiaryStartDate"
                                            type="text"
                                            placeholder='Tertiary Start Date  (mm/dd/yyyy)'
                                            value={tertiaryStartDate}
                                            onChange={(e) => setTertiaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryStartDate && <p className='EditEmployeeErrors'>{errors.tertiaryStartDate}</p>}



                            <div id='tertiaryEndDateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Tertiary End Date  (mm/dd/yyyy):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="tertiaryEndDate"
                                            name="tertiaryEndDate"
                                            type="text"
                                            placeholder='Tertiary End Date  (mm/dd/yyyy)'
                                            value={tertiaryEndDate}
                                            onChange={(e) => setTertiaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryEndDate && <p className='EditEmployeeErrors'>{errors.tertiaryEndDate}</p>}




                            <div id='tertiaryPayRateContainer' className='EditEmployeeFormLabelInputContainer'>

                                        <label className='EditEmployeeFormLabel'>
                                            Tertiary Pay Rate $ (USD):
                                            <input
                                            className='EditEmployeeFormInput'
                                            id="tertiaryPayRate"
                                            name="tertiaryPayRate"
                                            type="text"
                                            placeholder='Tertiary Pay Rate $ (USD)'
                                            value={tertiaryPayRate}
                                            onChange={(e) => setTertiaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsTertiaryPayRate.tertiaryPayRate && <p className='EditEmployeeErrors'>{errorsTertiaryPayRate.tertiaryPayRate}</p>}




{/* -------------------------------- QUARTERNARY -----------------------------*/}






                            <div id='quarternaryTitleContainer' className='EditEmployeeFormLabelInputContainer'>

                            <label className='EditEmployeeFormLabel'>
                                Quarternary Title:
                                <input
                                className='EditEmployeeFormInput'
                                id="quarternaryTitle"
                                name="quarternaryTitle"
                                type="text"
                                placeholder='Quarternary Title'
                                value={quarternaryTitle}
                                onChange={(e) => setQuarternaryTitle(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryTitle && <p className='EditEmployeeErrors'>{errors.quarternaryTitle}</p>}



                            <div id='quarternaryStartDateContainer' className='EditEmployeeFormLabelInputContainer'>

                            <label className='EditEmployeeFormLabel'>
                                Quarternary Start Date  (mm/dd/yyyy):
                                <input
                                className='EditEmployeeFormInput'
                                id="quarternaryStartDate"
                                name="quarternaryStartDate"
                                type="text"
                                placeholder='Quarternary Start Date  (mm/dd/yyyy)'
                                value={quarternaryStartDate}
                                onChange={(e) => setQuarternaryStartDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryStartDate && <p className='EditEmployeeErrors'>{errors.quarternaryStartDate}</p>}



                            <div id='quarternaryEndDateContainer' className='EditEmployeeFormLabelInputContainer'>

                            <label className='EditEmployeeFormLabel'>
                                Quarternary End Date  (mm/dd/yyyy):
                                <input
                                className='EditEmployeeFormInput'
                                id="quarternaryEndDate"
                                name="quarternaryEndDate"
                                type="text"
                                placeholder='Quarternary End Date  (mm/dd/yyyy)'
                                value={quarternaryEndDate}
                                onChange={(e) => setQuarternaryEndDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryEndDate && <p className='EditEmployeeErrors'>{errors.quarternaryEndDate}</p>}




                            <div id='quarternaryPayRateContainer' className='EditEmployeeFormLabelInputContainer'>

                            <label className='EditEmployeeFormLabel'>
                                Quarternary Pay Rate $ (USD):
                                <input
                                className='EditEmployeeFormInput'
                                id="quarternaryPayRate"
                                name="quarternaryPayRate"
                                type="text"
                                placeholder='Quarternary Pay Rate $ (USD)'
                                value={quarternaryPayRate}
                                onChange={(e) => setQuarternaryPayRate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errorsQuarternaryPayRate.quarternaryPayRate && <p className='EditEmployeeErrors'>{errorsQuarternaryPayRate.quarternaryPayRate}</p>}



                        </section>

                        <hr className='EditEmployeeHr'></hr>




{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='EditEmployeeRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="EditEmployeeButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Submit Edit
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default EditEmployeeForm;
