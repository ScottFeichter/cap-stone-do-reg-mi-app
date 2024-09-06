import './CreateNewEmployeeDepartmentForm.css';
// const BASE_CLASS_NAME = "CreateNewEmployeeDepartmentForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import * as employeeDepartmentsActions from '../../../redux/employeeDepartmentsReducer.js';



function CreateNewEmployeeDepartmentForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

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


        let newEmployeeDepartment = {

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




// personal information form section 1----------------------------------------------------------




        const [firstName, setFirstName] = useState("");
        const [nickName, setNickName] = useState("");
        const [middleName, setMiddleName] = useState("");
        const [lastName, setLastName] = useState("");
        const [familyName, setFamilyName] = useState("");
        const [email, setPersonalEmail] = useState("");
        const [phone, setPersonalPhone] = useState("");
        const [street, setStreet] = useState("");
        const [city, setCity] = useState("");
        const [state, setState] = useState("");
        const [zip, setZip] = useState("");
        const [dob, setDob] = useState("");
        const [age, setAge] = useState("");
        const [ssn, setSsn] = useState("");




// employment information form section 2----------------------------------------------------------

        const [employeeDepartment_Id, setEmployeeDepartment_Id] = useState("");
        const [academicDepartment_Id, setAcademicDepartment_Id] = useState("");
        const [level_Id, setUserType_Id] = useState("");
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





// CreateNewEmployeeDepartment Button Disabled------------------------------------------------------------------------


    // const checkDisabled = () => {
    //     if(
    //     (country.length === 0 || !country) ||
    //     (street.length === 0 || !street) ||
    //     (city.length === 0 || !city) ||
    //     (state.length === 0 || !state) ||
    //     (latitude.length === 0 || !latitude) ||
    //     (longitude.length === 0 || !longitude) ||
    //     (state.length < 4) ||
    //     (latitude.length < 6)
    //     )
    //     {setIsDisabled(true) } else {setIsDisabled(false)}

    //    }

    //    useEffect(()=> {
    //     checkDisabled();
    //    });



// HELPERS FOR CreateNewEmployeeDepartment Button handler---------------------------------------------------



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


         if(	employeeDepartment_Id	)	newEmployeeDepartment	.	employeeDepartment_Id	=	employeeDepartment_Id	;
         if(	academicDepartment_Id	)	newEmployeeDepartment	.	academicDepartment_Id	=	academicDepartment_Id	;
         if(	level_Id	)	newEmployeeDepartment	.	level_Id	=	level_Id	;
         if(	firstName	)	newEmployeeDepartment	.	firstName	=	firstName	;
         if(	nickName	)	newEmployeeDepartment	.	nickName	=	nickName	;
         if(	middleName	)	newEmployeeDepartment	.	middleName	=	middleName	;
         if(	lastName	)	newEmployeeDepartment	.	lastName	=	lastName	;
         if(	familyName	)	newEmployeeDepartment	.	familyName	=	familyName	;
         if(	email	)	newEmployeeDepartment	.	email	=	email	;
         if(	phone	)	newEmployeeDepartment	.	phone	=	phone	;
         if(	street	)	newEmployeeDepartment	.	street	=	street	;
         if(	city	)	newEmployeeDepartment	.	city	=	city	;
         if(	state	)	newEmployeeDepartment	.	state	=	state	;
         if(	zip	)	newEmployeeDepartment	.	zip	=	zip	;
         if(	dob	)	newEmployeeDepartment	.	dob	=	dob	;
         if(	age	)	newEmployeeDepartment	.	age	=	age	;
         if(	ssn	)	newEmployeeDepartment	.	ssn	=	ssn	;
         if(	firstLang	)	newEmployeeDepartment	.	firstLang	=	firstLang	;
         if(	secondLang	)	newEmployeeDepartment	.	secondLang	=	secondLang	;
         if(	thirdLang	)	newEmployeeDepartment	.	thirdLang	=	thirdLang	;
         if(	firstInst	)	newEmployeeDepartment	.	firstInst	=	firstInst	;
         if(	secondInst	)	newEmployeeDepartment	.	secondInst	=	secondInst	;
         if(	thirdInst	)	newEmployeeDepartment	.	thirdInst	=	thirdInst	;
         if(	primaryTitle	)	newEmployeeDepartment	.	primaryTitle	=	primaryTitle	;
         if(	primaryStartDate	)	newEmployeeDepartment	.	primaryStartDate	=	primaryStartDate	;
         if(	primaryEndDate	)	newEmployeeDepartment	.	primaryEndDate	=	primaryEndDate	;
         if(	primaryPayRate	)	newEmployeeDepartment	.	primaryPayRate	=	primaryPayRate	;
         if(	secondaryTitle	)	newEmployeeDepartment	.	secondaryTitle	=	secondaryTitle	;
         if(	secondaryStartDate	)	newEmployeeDepartment	.	secondaryStartDate	=	secondaryStartDate	;
         if(	secondaryEndDate	)	newEmployeeDepartment	.	secondaryEndDate	=	secondaryEndDate	;
         if(	secondaryPayRate	)	newEmployeeDepartment	.	secondaryPayRate	=	secondaryPayRate	;
         if(	tertiaryTitle	)	newEmployeeDepartment	.	tertiaryTitle	=	tertiaryTitle	;
         if(	tertiaryStartDate	)	newEmployeeDepartment	.	tertiaryStartDate	=	tertiaryStartDate	;
         if(	tertiaryEndDate	)	newEmployeeDepartment	.	tertiaryEndDate	=	tertiaryEndDate	;
         if(	tertiaryPayRate	)	newEmployeeDepartment	.	tertiaryPayRate	=	tertiaryPayRate	;
         if(	quarternaryTitle	)	newEmployeeDepartment	.	quarternaryTitle	=	quarternaryTitle	;
         if(	quarternaryStartDate	)	newEmployeeDepartment	.	quarternaryStartDate	=	quarternaryStartDate	;
         if(	quarternaryEndDate	)	newEmployeeDepartment	.	quarternaryEndDate	=	quarternaryEndDate	;
         if(	quarternaryPayRate	)	newEmployeeDepartment	.	quarternaryPayRate	=	quarternaryPayRate	;
         if(	biography	)	newEmployeeDepartment	.	biography	=	biography	;
         if(	notes	)	newEmployeeDepartment	.	notes	=	notes	;

        //  console.log("newEmployeeDepartment 448: ", newEmployeeDepartment)

         // --------------------------MAKING THE DISPATCH---------------------//
            let employeeDepartmentId;
            let newEmployeeDepartmentDetails;
            if(newEmployeeDepartmentDetails);

            await dispatch(employeeDepartmentsActions.thunkCreateEmployeeDepartment(newEmployeeDepartment))
            .then(response => {
                return response
            })
            .then(response => {
                employeeDepartmentId = response.payload[0].id;
                dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll());
                return employeeDepartmentId;
            }).catch(async (res) => {
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll()).then((response) => {
                dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentById(employeeDepartmentId));
                return response
            }).then(response => {
                dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll())
                return response
            }).then(response => {
                newEmployeeDepartmentDetails = response;
                navigate(`/employeeDepartments/${employeeDepartmentId}`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }




// return-----------------------------------
        return (
          <main id="CreateNewEmployeeDepartmentMain">

            <h1 id='CreateNewEmployeeDepartmentH1'>Create A New EmployeeDepartment</h1>


                    <form id='CreateNewEmployeeDepartmentForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="CreateNewEmployeeDepartmentFormSection1">

                            <h4 id="CreateNewEmployeeDepartmentFormSection1H4">Personal Information</h4>

                            <p id="CreateNewEmployeeDepartmentFormSection1P">
                                Enter personal information for new employeeDepartment.
                            </p>
                            <h5 className='CreateNewEmployeeDepartmentH5'>* indicates required field</h5>



                            <div id='firstNameContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='CreateNewEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            First Name 1:

                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
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
                            {errorsFirstName.firstName && <p className='CreateNewEmployeeDepartmentErrors'>{errorsFirstName.firstName}</p>}


                            <div id='nickNameContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            First Name 2:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="nickName"
                                            name="nickName"
                                            type="text"
                                            placeholder='First Name 2'
                                            value={nickName}
                                            onChange={(e) => setNickName(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.nickName && <p className='CreateNewEmployeeDepartmentErrors'>{errors.nickName}</p>}


                            <div id='middleNameContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Middle Name:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="middleName"
                                            name="middleName"
                                            type="text"
                                            placeholder='Middle Name'
                                            value={middleName}
                                            onChange={(e) => setMiddleName(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.middleName && <p className='CreateNewEmployeeDepartmentErrors'>{errors.middleName}</p>}




                            <div id='lastNameContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='CreateNewEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Last Name 1:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
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
                            {errorsLastName.lastName && <p className='CreateNewEmployeeDepartmentErrors'>{errorsLastName.lastName}</p>}



                            <div id='familyNameContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Last Name 2:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="familyName"
                                            name="familyName"
                                            type="text"
                                            placeholder='Last Name 2'
                                            value={familyName}
                                            onChange={(e) => setFamilyName(e.target.value)}

                                            />
                                        </label>


                            </div>
                            {errors.familyName && <p className='CreateNewEmployeeDepartmentErrors'>{errors.familyName}</p>}




                            <div id='emailContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Personal Email:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder='Personal Email'
                                            value={email}
                                            onChange={(e) => setPersonalEmail(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.email && <p className='CreateNewEmployeeDepartmentErrors'>{errors.email}</p>}



                            <div id='phoneContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='CreateNewEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Personal Phone:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
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
                            {errorsPersonalPhone.phone && <p className='CreateNewEmployeeDepartmentErrors'>{errorsPersonalPhone.phone}</p>}




                            <div id='streetContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Street:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="street"
                                            name="street"
                                            type="text"
                                            placeholder='Street'
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.street && <p className='CreateNewEmployeeDepartmentErrors'>{errors.street}</p>}



                            <div id='cityContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            City:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="city"
                                            name="city"
                                            type="text"
                                            placeholder='City'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.city && <p className='CreateNewEmployeeDepartmentErrors'>{errors.city}</p>}


                            <div id='stateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            State:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="state"
                                            name="state"
                                            type="text"
                                            placeholder='State'
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.state && <p className='CreateNewEmployeeDepartmentErrors'>{errors.state}</p>}


                            <div id='zipContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Zip:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="zip"
                                            name="zip"
                                            type="text"
                                            placeholder='Zip'
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsZip.zip && <p className='CreateNewEmployeeDepartmentErrors'>{errorsZip.zip}</p>}




                            <div id='dobContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Date Of Birth  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="dob"
                                            name="dob"
                                            type="text"
                                            placeholder='Date Of Birth  (mm/dd/yyyy)'
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.dob && <p className='CreateNewEmployeeDepartmentErrors'>{errors.dob}</p>}


                            <div id='ageContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Age:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="age"
                                            name="age"
                                            type="text"
                                            placeholder='Age'
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsAge.age && <p className='CreateNewEmployeeDepartmentErrors'>{errorsAge.age}</p>}


                            <div id='ssnContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>
                                        <p className='CreateNewEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            SSN:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="ssn"
                                            name="ssn"
                                            type="text"
                                            placeholder='SSN'
                                            value={ssn}
                                            onChange={(e) => setSsn(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSsn.ssn && <p className='CreateNewEmployeeDepartmentErrors'>{errorsSsn.ssn}</p>}




                        </section>

                        <hr className='CreateNewEmployeeDepartmentHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                        <section id="CreateNewEmployeeDepartmentFormSection2">

                        <h4 id="CreateNewEmployeeDepartmentFormSection2H4">Employment Information</h4>

                            <p id="CreateNewEmployeeDepartmentFormSection2P">
                                Enter employment information for new employeeDepartment.
                            </p>
                            <h5 className='CreateNewEmployeeDepartmentH5'>* indicates required field</h5>



                            <div id='employeeDepartment_IdContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            EmployeeDepartment Department ID:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="employeeDepartment_Id"
                                            name="employeeDepartment_Id"
                                            type="text"
                                            placeholder='EmployeeDepartment Department ID'
                                            value={employeeDepartment_Id}
                                            onChange={(e) => setEmployeeDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsEmployeeDepartment_Id.employeeDepartment_Id && <p className='CreateNewEmployeeDepartmentErrors'>{errorsEmployeeDepartment_Id.employeeDepartment_Id}</p>}



                            <div id='academicDepartment_IdContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Academic Department ID:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="academicDepartment_Id"
                                            name="academicDepartment_Id"
                                            type="text"
                                            placeholder='Academic Department ID'
                                            value={academicDepartment_Id}
                                            onChange={(e) => setAcademicDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsAcademicDepartment_Id.academicDepartment_Id && <p className='CreateNewEmployeeDepartmentErrors'>{errorsAcademicDepartment_Id.academicDepartment_Id}</p>}



                            <div id='level_IdContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            User Type ID:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="level_Id"
                                            name="level_Id"
                                            type="text"
                                            placeholder='User Type ID'
                                            value={level_Id}
                                            onChange={(e) => setUserType_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsUserType_Id.level_Id && <p className='CreateNewEmployeeDepartmentErrors'>{errorsUserType_Id.level_Id}</p>}



                            <div id='primaryTitleContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Primary Title:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="primaryTitle"
                                            name="primaryTitle"
                                            type="text"
                                            placeholder='Primary Title'
                                            value={primaryTitle}
                                            onChange={(e) => setPrimaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryTitle && <p className='CreateNewEmployeeDepartmentErrors'>{errors.primaryTitle}</p>}



                            <div id='primaryStartDateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Primary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="primaryStartDate"
                                            name="primaryStartDate"
                                            type="text"
                                            placeholder='Primary Start Date  (mm/dd/yyyy)'
                                            value={primaryStartDate}
                                            onChange={(e) => setPrimaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryStartDate && <p className='CreateNewEmployeeDepartmentErrors'>{errors.primaryStartDate}</p>}



                            <div id='primaryEndDateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Primary End Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="primaryEndDate"
                                            name="primaryEndDate"
                                            type="text"
                                            placeholder='Primary End Date'
                                            value={primaryEndDate}
                                            onChange={(e) => setPrimaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryEndDate && <p className='CreateNewEmployeeDepartmentErrors'>{errors.primaryEndDate}</p>}



                            <div id='primaryPayRateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Primary Pay Rate $ (USD):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="primaryPayRate"
                                            name="primaryPayRate"
                                            type="text"
                                            placeholder='Primary Pay Rate $ (USD)'
                                            value={primaryPayRate}
                                            onChange={(e) => setPrimaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsPrimaryPayRate.primaryPayRate && <p className='CreateNewEmployeeDepartmentErrors'>{errorsPrimaryPayRate.primaryPayRate}</p>}











                        </section>

                        <hr className='CreateNewEmployeeDepartmentHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                        <section id="CreateNewEmployeeDepartmentFormSection3">

                        <h4 id="CreateNewEmployeeDepartmentFormSection3H4">Biographical Information</h4>

                            <p id="CreateNewEmployeeDepartmentFormSection3P">
                                Enter biographical information for new employeeDepartment.
                            </p>
                            <h5 className='CreateNewEmployeeDepartmentH5'>* indicates required field</h5>



                            <div id='firstLangContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='CreateNewEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            First Language:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
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
                            {errorsFirstLang.firstLang && <p className='CreateNewEmployeeDepartmentErrors'>{errorsFirstLang.firstLang}</p>}



                            <div id='secondLangContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Second Language:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="secondLang"
                                            name="secondLang"
                                            type="text"
                                            placeholder='Second Language'
                                            value={secondLang}
                                            onChange={(e) => setSecondLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondLang && <p className='CreateNewEmployeeDepartmentErrors'>{errors.secondLang}</p>}


                            <div id='thirdLangContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Third Language:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="thirdLang"
                                            name="thirdLang"
                                            type="text"
                                            placeholder='Third Language'
                                            value={thirdLang}
                                            onChange={(e) => setThirdLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdLang && <p className='CreateNewEmployeeDepartmentErrors'>{errors.thirdLang}</p>}



                            <div id='firstInstContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            First Instrument:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="firstInst"
                                            name="firstInst"
                                            type="text"
                                            placeholder='First Instrument'
                                            value={firstInst}
                                            onChange={(e) => setFirstInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.firstInst && <p className='CreateNewEmployeeDepartmentErrors'>{errors.firstInst}</p>}



                            <div id='secondInstContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Second Instrument:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="secondInst"
                                            name="secondInst"
                                            type="text"
                                            placeholder='Second Instrument'
                                            value={secondInst}
                                            onChange={(e) => setSecondInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondInst && <p className='CreateNewEmployeeDepartmentErrors'>{errors.secondInst}</p>}




                            <div id='thirdInstContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Third Instrument:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="thirdInst"
                                            name="thirdInst"
                                            type="text"
                                            placeholder='Third Instrument'
                                            value={thirdInst}
                                            onChange={(e) => setThirdInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdInst && <p className='CreateNewEmployeeDepartmentErrors'>{errors.thirdInst}</p>}





                            <div id='biographyContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Biography:
                                            <textarea
                                            className='CreateNewEmployeeDepartmentFormInput'
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
                            {errors.biography && <p className='CreateNewEmployeeDepartmentErrors'>{errors.biography}</p>}




                            <div id='notesContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Notes:
                                            <textarea
                                            className='CreateNewEmployeeDepartmentFormInput'
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
                            {errors.notes && <p className='CreateNewEmployeeDepartmentErrors'>{errors.notes}</p>}





                        </section>

                        <hr className='CreateNewEmployeeDepartmentHr'></hr>


{/* form section 4---------------------------------------------------------- */}




                        <section id="CreateNewEmployeeDepartmentFormSection4">

                        <h4 id="CreateNewEmployeeDepartmentFormSection4H4">Additional Employment Information</h4>

                            <p id="CreateNewEmployeeDepartmentFormSection4P">
                            Enter additional employment information for new employeeDepartment.
                            </p>
                            <h5 className='CreateNewEmployeeDepartmentH5'>* indicates required field</h5>


{/* -------------------------------- SECONDARY -----------------------------*/}

                            <div id='secondaryTitleContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Secondary Title:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="secondaryTitle"
                                            name="secondaryTitle"
                                            type="text"
                                            placeholder='Secondary Title'
                                            value={secondaryTitle}
                                            onChange={(e) => setSecondaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryTitle && <p className='CreateNewEmployeeDepartmentErrors'>{errors.secondaryTitle}</p>}



                            <div id='secondaryStartDateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Secondary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="secondaryStartDate"
                                            name="secondaryStartDate"
                                            type="text"
                                            placeholder='Secondary Start Date'
                                            value={secondaryStartDate}
                                            onChange={(e) => setSecondaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryStartDate && <p className='CreateNewEmployeeDepartmentErrors'>{errors.secondaryStartDate}</p>}



                            <div id='secondaryEndDateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Secondary End Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="secondaryEndDate"
                                            name="secondaryEndDate"
                                            type="text"
                                            placeholder='Secondary End Date  (mm/dd/yyyy)  (mm/dd/yyyy)'
                                            value={secondaryEndDate}
                                            onChange={(e) => setSecondaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryEndDate && <p className='CreateNewEmployeeDepartmentErrors'>{errors.secondaryEndDate}</p>}



                            <div id='secondaryPayRateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Secondary Pay Rate $ (USD):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="secondaryPayRate"
                                            name="secondaryPayRate"
                                            type="text"
                                            placeholder='Secondary Pay Rate $ (USD)'
                                            value={secondaryPayRate}
                                            onChange={(e) => setSecondaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSecondaryPayRate.secondaryPayRate && <p className='CreateNewEmployeeDepartmentErrors'>{errorsSecondaryPayRate.secondaryPayRate}</p>}






{/* -------------------------------- TERTIARY -----------------------------*/}




                            <div id='tertiaryTitleContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Tertiary Title:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="tertiaryTitle"
                                            name="tertiaryTitle"
                                            type="text"
                                            placeholder='Tertiary Title'
                                            value={tertiaryTitle}
                                            onChange={(e) => setTertiaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryTitle && <p className='CreateNewEmployeeDepartmentErrors'>{errors.tertiaryTitle}</p>}



                            <div id='tertiaryStartDateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Tertiary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="tertiaryStartDate"
                                            name="tertiaryStartDate"
                                            type="text"
                                            placeholder='Tertiary Start Date  (mm/dd/yyyy)'
                                            value={tertiaryStartDate}
                                            onChange={(e) => setTertiaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryStartDate && <p className='CreateNewEmployeeDepartmentErrors'>{errors.tertiaryStartDate}</p>}



                            <div id='tertiaryEndDateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Tertiary End Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="tertiaryEndDate"
                                            name="tertiaryEndDate"
                                            type="text"
                                            placeholder='Tertiary End Date  (mm/dd/yyyy)'
                                            value={tertiaryEndDate}
                                            onChange={(e) => setTertiaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryEndDate && <p className='CreateNewEmployeeDepartmentErrors'>{errors.tertiaryEndDate}</p>}




                            <div id='tertiaryPayRateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Tertiary Pay Rate $ (USD):
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="tertiaryPayRate"
                                            name="tertiaryPayRate"
                                            type="text"
                                            placeholder='Tertiary Pay Rate $ (USD)'
                                            value={tertiaryPayRate}
                                            onChange={(e) => setTertiaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsTertiaryPayRate.tertiaryPayRate && <p className='CreateNewEmployeeDepartmentErrors'>{errorsTertiaryPayRate.tertiaryPayRate}</p>}




{/* -------------------------------- QUARTERNARY -----------------------------*/}






                            <div id='quarternaryTitleContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                            <label className='CreateNewEmployeeDepartmentFormLabel'>
                                Quarternary Title:
                                <input
                                className='CreateNewEmployeeDepartmentFormInput'
                                id="quarternaryTitle"
                                name="quarternaryTitle"
                                type="text"
                                placeholder='Quarternary Title'
                                value={quarternaryTitle}
                                onChange={(e) => setQuarternaryTitle(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryTitle && <p className='CreateNewEmployeeDepartmentErrors'>{errors.quarternaryTitle}</p>}



                            <div id='quarternaryStartDateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                            <label className='CreateNewEmployeeDepartmentFormLabel'>
                                Quarternary Start Date  (mm/dd/yyyy):
                                <input
                                className='CreateNewEmployeeDepartmentFormInput'
                                id="quarternaryStartDate"
                                name="quarternaryStartDate"
                                type="text"
                                placeholder='Quarternary Start Date  (mm/dd/yyyy)'
                                value={quarternaryStartDate}
                                onChange={(e) => setQuarternaryStartDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryStartDate && <p className='CreateNewEmployeeDepartmentErrors'>{errors.quarternaryStartDate}</p>}



                            <div id='quarternaryEndDateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                            <label className='CreateNewEmployeeDepartmentFormLabel'>
                                Quarternary End Date  (mm/dd/yyyy):
                                <input
                                className='CreateNewEmployeeDepartmentFormInput'
                                id="quarternaryEndDate"
                                name="quarternaryEndDate"
                                type="text"
                                placeholder='Quarternary End Date  (mm/dd/yyyy)'
                                value={quarternaryEndDate}
                                onChange={(e) => setQuarternaryEndDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryEndDate && <p className='CreateNewEmployeeDepartmentErrors'>{errors.quarternaryEndDate}</p>}




                            <div id='quarternaryPayRateContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                            <label className='CreateNewEmployeeDepartmentFormLabel'>
                                Quarternary Pay Rate $ (USD):
                                <input
                                className='CreateNewEmployeeDepartmentFormInput'
                                id="quarternaryPayRate"
                                name="quarternaryPayRate"
                                type="text"
                                placeholder='Quarternary Pay Rate $ (USD)'
                                value={quarternaryPayRate}
                                onChange={(e) => setQuarternaryPayRate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errorsQuarternaryPayRate.quarternaryPayRate && <p className='CreateNewEmployeeDepartmentErrors'>{errorsQuarternaryPayRate.quarternaryPayRate}</p>}



                        </section>

                        <hr className='CreateNewEmployeeDepartmentHr'></hr>




{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='CreateNewEmployeeDepartmentRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="CreateNewEmployeeDepartmentButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Create EmployeeDepartment
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default CreateNewEmployeeDepartmentForm;
