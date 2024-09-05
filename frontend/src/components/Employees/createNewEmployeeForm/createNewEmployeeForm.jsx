import './CreateNewEmployeeForm.css';
// const BASE_CLASS_NAME = "CreateNewEmployeeForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import * as employeesActions from '../../../redux/employeesReducer.js';



function CreateNewEmployeeForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsFirstName1, setErrorsFirstName1] = useState({});
        const [errorsLastName1, setErrorsLastName1] = useState({});
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


        let newEmployee = {

// personal information form section 1----------------------------------------------------------
            firstName1	            :	null	,
            firstName2	            :	null	,
            middleName	            :	null	,
            lastName1	            :	null	,
            lastName2	            :	null	,
            personalEmail	        :	null	,
            personalPhone	        :	null	,
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
            userType_Id	            :	null	,
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




        const [firstName1, setFirstName1] = useState("");
        const [firstName2, setFirstName2] = useState("");
        const [middleName, setMiddleName] = useState("");
        const [lastName1, setLastName1] = useState("");
        const [lastName2, setLastName2] = useState("");
        const [personalEmail, setPersonalEmail] = useState("");
        const [personalPhone, setPersonalPhone] = useState("");
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
        const [userType_Id, setUserType_Id] = useState("");
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





// CreateNewEmployee Button Disabled------------------------------------------------------------------------


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



// HELPERS FOR CreateNewEmployee Button handler---------------------------------------------------



// helper for handleSubmit check required fields
const checkRequired = () => {

    let firstName1Bool = false;
    let lastName1Bool = false;
    let personalPhoneBool = false;
    let firstLangBool = false;
    let ssnBool = false;


    if(!firstName1) {
        firstName1Bool = true;
        setErrorsFirstName1({firstName1: "First Name 1 is required"});
    } else {
        firstName1Bool = false;
        setErrorsFirstName1({});
    }

    if(!lastName1) {
        lastName1Bool = true;
        setErrorsLastName1({lastName1: "Last Name 1 is required"});
    } else {
        lastName1Bool = false;
        setErrorsLastName1({});
    }

    if(!personalPhone) {
        personalPhoneBool = true;
        setErrorsPersonalPhone({personalPhone: "Personal Phone is required"});
    } else {
        personalPhoneBool = false;
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
        (firstName1Bool) ||
        (lastName1Bool) ||
        (personalPhoneBool) ||
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
    let userType_IdNum = parseInt(userType_Id);
    let ageNum = parseInt(age);
    let zipNum = parseInt(zip);
    let primaryPayRateNum = parseInt(primaryPayRate);
    let secondaryPayRateNum = parseInt(secondaryPayRate);
    let tertiaryPayRateNum = parseInt(tertiaryPayRate);
    let quarternaryPayRateNum = parseInt(quarternaryPayRate);


    let employeeDepartment_IdErrorBool = false;
    let academicDepartment_IdErrorBool = false;
    let userType_IdErrorBool = false;
    let ageErrorBool = false;
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


    if(userType_Id !== "" && (typeof userType_IdNum !== "number" || isNaN(userType_IdNum))){
        userType_IdErrorBool = true;
        setErrorsUserType_Id({userType_Id: "User Type ID must be an integer"});
    } else {
        userType_IdErrorBool = false;
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
        (userType_IdErrorBool) ||
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


         if(	employeeDepartment_Id	)	newEmployee	.	employeeDepartment_Id	=	employeeDepartment_Id	;
         if(	academicDepartment_Id	)	newEmployee	.	academicDepartment_Id	=	academicDepartment_Id	;
         if(	userType_Id	)	newEmployee	.	userType_Id	=	userType_Id	;
         if(	firstName1	)	newEmployee	.	firstName1	=	firstName1	;
         if(	firstName2	)	newEmployee	.	firstName2	=	firstName2	;
         if(	middleName	)	newEmployee	.	middleName	=	middleName	;
         if(	lastName1	)	newEmployee	.	lastName1	=	lastName1	;
         if(	lastName2	)	newEmployee	.	lastName2	=	lastName2	;
         if(	personalEmail	)	newEmployee	.	personalEmail	=	personalEmail	;
         if(	personalPhone	)	newEmployee	.	personalPhone	=	personalPhone	;
         if(	street	)	newEmployee	.	street	=	street	;
         if(	city	)	newEmployee	.	city	=	city	;
         if(	state	)	newEmployee	.	state	=	state	;
         if(	zip	)	newEmployee	.	zip	=	zip	;
         if(	dob	)	newEmployee	.	dob	=	dob	;
         if(	age	)	newEmployee	.	age	=	age	;
         if(	ssn	)	newEmployee	.	ssn	=	ssn	;
         if(	firstLang	)	newEmployee	.	firstLang	=	firstLang	;
         if(	secondLang	)	newEmployee	.	secondLang	=	secondLang	;
         if(	thirdLang	)	newEmployee	.	thirdLang	=	thirdLang	;
         if(	firstInst	)	newEmployee	.	firstInst	=	firstInst	;
         if(	secondInst	)	newEmployee	.	secondInst	=	secondInst	;
         if(	thirdInst	)	newEmployee	.	thirdInst	=	thirdInst	;
         if(	primaryTitle	)	newEmployee	.	primaryTitle	=	primaryTitle	;
         if(	primaryStartDate	)	newEmployee	.	primaryStartDate	=	primaryStartDate	;
         if(	primaryEndDate	)	newEmployee	.	primaryEndDate	=	primaryEndDate	;
         if(	primaryPayRate	)	newEmployee	.	primaryPayRate	=	primaryPayRate	;
         if(	secondaryTitle	)	newEmployee	.	secondaryTitle	=	secondaryTitle	;
         if(	secondaryStartDate	)	newEmployee	.	secondaryStartDate	=	secondaryStartDate	;
         if(	secondaryEndDate	)	newEmployee	.	secondaryEndDate	=	secondaryEndDate	;
         if(	secondaryPayRate	)	newEmployee	.	secondaryPayRate	=	secondaryPayRate	;
         if(	tertiaryTitle	)	newEmployee	.	tertiaryTitle	=	tertiaryTitle	;
         if(	tertiaryStartDate	)	newEmployee	.	tertiaryStartDate	=	tertiaryStartDate	;
         if(	tertiaryEndDate	)	newEmployee	.	tertiaryEndDate	=	tertiaryEndDate	;
         if(	tertiaryPayRate	)	newEmployee	.	tertiaryPayRate	=	tertiaryPayRate	;
         if(	quarternaryTitle	)	newEmployee	.	quarternaryTitle	=	quarternaryTitle	;
         if(	quarternaryStartDate	)	newEmployee	.	quarternaryStartDate	=	quarternaryStartDate	;
         if(	quarternaryEndDate	)	newEmployee	.	quarternaryEndDate	=	quarternaryEndDate	;
         if(	quarternaryPayRate	)	newEmployee	.	quarternaryPayRate	=	quarternaryPayRate	;
         if(	biography	)	newEmployee	.	biography	=	biography	;
         if(	notes	)	newEmployee	.	notes	=	notes	;

        //  console.log("newEmployee 448: ", newEmployee)

         // --------------------------MAKING THE DISPATCH---------------------//
            let employeeId;
            let newEmployeeDetails;
            if(newEmployeeDetails);

            await dispatch(employeesActions.thunkCreateEmployee(newEmployee))
            .then(response => {
                return response
            })
            .then(response => {
                employeeId = response.payload[0].id;
                dispatch(employeesActions.thunkGetEmployeesAll());
                return employeeId;
            }).catch(async (res) => {
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(employeesActions.thunkGetEmployeesAll()).then((response) => {
                dispatch(employeesActions.thunkGetEmployeeById(employeeId));
                return response
            }).then(response => {
                dispatch(employeesActions.thunkGetEmployeesAll())
                return response
            }).then(response => {
                newEmployeeDetails = response;
                navigate(`/employees/${employeeId}`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }




// return-----------------------------------
        return (
          <main id="CreateNewEmployeeMain">

            <h1 id='CreateNewEmployeeH1'>Create A New Employee</h1>


                    <form id='CreateNewEmployeeForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="CreateNewEmployeeFormSection1">

                            <h4 id="CreateNewEmployeeFormSection1H4">Personal Information</h4>

                            <p id="CreateNewEmployeeFormSection1P">
                                Enter personal information for new employee.
                            </p>
                            <h5 className='CreateNewEmployeeH5'>* indicates required field</h5>



                            <div id='firstName1Container' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <p className='CreateNewEmployeeFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeFormLabel'>
                                            First Name 1:

                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="firstName1"
                                            name="firstName1"
                                            type="text"
                                            placeholder='First Name 1'
                                            value={firstName1}
                                            onChange={(e) => setFirstName1(e.target.value)}
                                            required
                                            />
                                        </label>

                            </div>
                            {errorsFirstName1.firstName1 && <p className='CreateNewEmployeeErrors'>{errorsFirstName1.firstName1}</p>}


                            <div id='firstName2Container' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            First Name 2:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="firstName2"
                                            name="firstName2"
                                            type="text"
                                            placeholder='First Name 2'
                                            value={firstName2}
                                            onChange={(e) => setFirstName2(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.firstName2 && <p className='CreateNewEmployeeErrors'>{errors.firstName2}</p>}


                            <div id='middleNameContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Middle Name:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="middleName"
                                            name="middleName"
                                            type="text"
                                            placeholder='Middle Name'
                                            value={middleName}
                                            onChange={(e) => setMiddleName(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.middleName && <p className='CreateNewEmployeeErrors'>{errors.middleName}</p>}




                            <div id='lastName1Container' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <p className='CreateNewEmployeeFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeFormLabel'>
                                            Last Name 1:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="lastName1"
                                            name="lastName1"
                                            type="text"
                                            placeholder='Last Name 1'
                                            value={lastName1}
                                            onChange={(e) => setLastName1(e.target.value)}
                                            required
                                            />
                                        </label>


                            </div>
                            {errorsLastName1.lastName1 && <p className='CreateNewEmployeeErrors'>{errorsLastName1.lastName1}</p>}



                            <div id='lastName2Container' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Last Name 2:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="lastName2"
                                            name="lastName2"
                                            type="text"
                                            placeholder='Last Name 2'
                                            value={lastName2}
                                            onChange={(e) => setLastName2(e.target.value)}

                                            />
                                        </label>


                            </div>
                            {errors.lastName2 && <p className='CreateNewEmployeeErrors'>{errors.lastName2}</p>}




                            <div id='personalEmailContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Personal Email:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="personalEmail"
                                            name="personalEmail"
                                            type="text"
                                            placeholder='Personal Email'
                                            value={personalEmail}
                                            onChange={(e) => setPersonalEmail(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.personalEmail && <p className='CreateNewEmployeeErrors'>{errors.personalEmail}</p>}



                            <div id='personalPhoneContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <p className='CreateNewEmployeeFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeFormLabel'>
                                            Personal Phone:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="personalPhone"
                                            name="personalPhone"
                                            type="text"
                                            placeholder='Personal Phone'
                                            value={personalPhone}
                                            onChange={(e) => setPersonalPhone(e.target.value)}
                                            required
                                            />
                                        </label>


                            </div>
                            {errorsPersonalPhone.personalPhone && <p className='CreateNewEmployeeErrors'>{errorsPersonalPhone.personalPhone}</p>}




                            <div id='streetContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Street:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="street"
                                            name="street"
                                            type="text"
                                            placeholder='Street'
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.street && <p className='CreateNewEmployeeErrors'>{errors.street}</p>}



                            <div id='cityContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            City:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="city"
                                            name="city"
                                            type="text"
                                            placeholder='City'
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.city && <p className='CreateNewEmployeeErrors'>{errors.city}</p>}


                            <div id='stateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            State:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="state"
                                            name="state"
                                            type="text"
                                            placeholder='State'
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.state && <p className='CreateNewEmployeeErrors'>{errors.state}</p>}


                            <div id='zipContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Zip:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="zip"
                                            name="zip"
                                            type="text"
                                            placeholder='Zip'
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsZip.zip && <p className='CreateNewEmployeeErrors'>{errorsZip.zip}</p>}




                            <div id='dobContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Date Of Birth  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="dob"
                                            name="dob"
                                            type="text"
                                            placeholder='Date Of Birth  (mm/dd/yyyy)'
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.dob && <p className='CreateNewEmployeeErrors'>{errors.dob}</p>}


                            <div id='ageContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Age:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="age"
                                            name="age"
                                            type="text"
                                            placeholder='Age'
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsAge.age && <p className='CreateNewEmployeeErrors'>{errorsAge.age}</p>}


                            <div id='ssnContainer' className='CreateNewEmployeeFormLabelInputContainer'>
                                        <p className='CreateNewEmployeeFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeFormLabel'>
                                            SSN:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="ssn"
                                            name="ssn"
                                            type="text"
                                            placeholder='SSN'
                                            value={ssn}
                                            onChange={(e) => setSsn(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSsn.ssn && <p className='CreateNewEmployeeErrors'>{errorsSsn.ssn}</p>}




                        </section>

                        <hr className='CreateNewEmployeeHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                        <section id="CreateNewEmployeeFormSection2">

                        <h4 id="CreateNewEmployeeFormSection2H4">Employment Information</h4>

                            <p id="CreateNewEmployeeFormSection2P">
                                Enter employment information for new employee.
                            </p>
                            <h5 className='CreateNewEmployeeH5'>* indicates required field</h5>



                            <div id='employeeDepartment_IdContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Employee Department ID:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="employeeDepartment_Id"
                                            name="employeeDepartment_Id"
                                            type="text"
                                            placeholder='Employee Department ID'
                                            value={employeeDepartment_Id}
                                            onChange={(e) => setEmployeeDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsEmployeeDepartment_Id.employeeDepartment_Id && <p className='CreateNewEmployeeErrors'>{errorsEmployeeDepartment_Id.employeeDepartment_Id}</p>}



                            <div id='academicDepartment_IdContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Academic Department ID:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="academicDepartment_Id"
                                            name="academicDepartment_Id"
                                            type="text"
                                            placeholder='Academic Department ID'
                                            value={academicDepartment_Id}
                                            onChange={(e) => setAcademicDepartment_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsAcademicDepartment_Id.academicDepartment_Id && <p className='CreateNewEmployeeErrors'>{errorsAcademicDepartment_Id.academicDepartment_Id}</p>}



                            <div id='userType_IdContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            User Type ID:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="userType_Id"
                                            name="userType_Id"
                                            type="text"
                                            placeholder='User Type ID'
                                            value={userType_Id}
                                            onChange={(e) => setUserType_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsUserType_Id.userType_Id && <p className='CreateNewEmployeeErrors'>{errorsUserType_Id.userType_Id}</p>}



                            <div id='primaryTitleContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Primary Title:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="primaryTitle"
                                            name="primaryTitle"
                                            type="text"
                                            placeholder='Primary Title'
                                            value={primaryTitle}
                                            onChange={(e) => setPrimaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryTitle && <p className='CreateNewEmployeeErrors'>{errors.primaryTitle}</p>}



                            <div id='primaryStartDateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Primary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="primaryStartDate"
                                            name="primaryStartDate"
                                            type="text"
                                            placeholder='Primary Start Date  (mm/dd/yyyy)'
                                            value={primaryStartDate}
                                            onChange={(e) => setPrimaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryStartDate && <p className='CreateNewEmployeeErrors'>{errors.primaryStartDate}</p>}



                            <div id='primaryEndDateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Primary End Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="primaryEndDate"
                                            name="primaryEndDate"
                                            type="text"
                                            placeholder='Primary End Date'
                                            value={primaryEndDate}
                                            onChange={(e) => setPrimaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.primaryEndDate && <p className='CreateNewEmployeeErrors'>{errors.primaryEndDate}</p>}



                            <div id='primaryPayRateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Primary Pay Rate $ (USD):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="primaryPayRate"
                                            name="primaryPayRate"
                                            type="text"
                                            placeholder='Primary Pay Rate $ (USD)'
                                            value={primaryPayRate}
                                            onChange={(e) => setPrimaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsPrimaryPayRate.primaryPayRate && <p className='CreateNewEmployeeErrors'>{errorsPrimaryPayRate.primaryPayRate}</p>}











                        </section>

                        <hr className='CreateNewEmployeeHr'></hr>

{/* form section 3---------------------------------------------------------- */}

                        <section id="CreateNewEmployeeFormSection3">

                        <h4 id="CreateNewEmployeeFormSection3H4">Biographical Information</h4>

                            <p id="CreateNewEmployeeFormSection3P">
                                Enter biographical information for new employee.
                            </p>
                            <h5 className='CreateNewEmployeeH5'>* indicates required field</h5>



                            <div id='firstLangContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <p className='CreateNewEmployeeFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeFormLabel'>
                                            First Language:
                                            <input
                                            className='CreateNewEmployeeFormInput'
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
                            {errorsFirstLang.firstLang && <p className='CreateNewEmployeeErrors'>{errorsFirstLang.firstLang}</p>}



                            <div id='secondLangContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Second Language:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="secondLang"
                                            name="secondLang"
                                            type="text"
                                            placeholder='Second Language'
                                            value={secondLang}
                                            onChange={(e) => setSecondLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondLang && <p className='CreateNewEmployeeErrors'>{errors.secondLang}</p>}


                            <div id='thirdLangContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Third Language:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="thirdLang"
                                            name="thirdLang"
                                            type="text"
                                            placeholder='Third Language'
                                            value={thirdLang}
                                            onChange={(e) => setThirdLang(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdLang && <p className='CreateNewEmployeeErrors'>{errors.thirdLang}</p>}



                            <div id='firstInstContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            First Instrument:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="firstInst"
                                            name="firstInst"
                                            type="text"
                                            placeholder='First Instrument'
                                            value={firstInst}
                                            onChange={(e) => setFirstInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.firstInst && <p className='CreateNewEmployeeErrors'>{errors.firstInst}</p>}



                            <div id='secondInstContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Second Instrument:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="secondInst"
                                            name="secondInst"
                                            type="text"
                                            placeholder='Second Instrument'
                                            value={secondInst}
                                            onChange={(e) => setSecondInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondInst && <p className='CreateNewEmployeeErrors'>{errors.secondInst}</p>}




                            <div id='thirdInstContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Third Instrument:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="thirdInst"
                                            name="thirdInst"
                                            type="text"
                                            placeholder='Third Instrument'
                                            value={thirdInst}
                                            onChange={(e) => setThirdInst(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.thirdInst && <p className='CreateNewEmployeeErrors'>{errors.thirdInst}</p>}





                            <div id='biographyContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Biography:
                                            <textarea
                                            className='CreateNewEmployeeFormInput'
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
                            {errors.biography && <p className='CreateNewEmployeeErrors'>{errors.biography}</p>}




                            <div id='notesContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Notes:
                                            <textarea
                                            className='CreateNewEmployeeFormInput'
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
                            {errors.notes && <p className='CreateNewEmployeeErrors'>{errors.notes}</p>}





                        </section>

                        <hr className='CreateNewEmployeeHr'></hr>


{/* form section 4---------------------------------------------------------- */}




                        <section id="CreateNewEmployeeFormSection4">

                        <h4 id="CreateNewEmployeeFormSection4H4">Additional Employment Information</h4>

                            <p id="CreateNewEmployeeFormSection4P">
                            Enter additional employment information for new employee.
                            </p>
                            <h5 className='CreateNewEmployeeH5'>* indicates required field</h5>


{/* -------------------------------- SECONDARY -----------------------------*/}

                            <div id='secondaryTitleContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Secondary Title:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="secondaryTitle"
                                            name="secondaryTitle"
                                            type="text"
                                            placeholder='Secondary Title'
                                            value={secondaryTitle}
                                            onChange={(e) => setSecondaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryTitle && <p className='CreateNewEmployeeErrors'>{errors.secondaryTitle}</p>}



                            <div id='secondaryStartDateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Secondary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="secondaryStartDate"
                                            name="secondaryStartDate"
                                            type="text"
                                            placeholder='Secondary Start Date'
                                            value={secondaryStartDate}
                                            onChange={(e) => setSecondaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryStartDate && <p className='CreateNewEmployeeErrors'>{errors.secondaryStartDate}</p>}



                            <div id='secondaryEndDateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Secondary End Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="secondaryEndDate"
                                            name="secondaryEndDate"
                                            type="text"
                                            placeholder='Secondary End Date  (mm/dd/yyyy)  (mm/dd/yyyy)'
                                            value={secondaryEndDate}
                                            onChange={(e) => setSecondaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.secondaryEndDate && <p className='CreateNewEmployeeErrors'>{errors.secondaryEndDate}</p>}



                            <div id='secondaryPayRateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Secondary Pay Rate $ (USD):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="secondaryPayRate"
                                            name="secondaryPayRate"
                                            type="text"
                                            placeholder='Secondary Pay Rate $ (USD)'
                                            value={secondaryPayRate}
                                            onChange={(e) => setSecondaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsSecondaryPayRate.secondaryPayRate && <p className='CreateNewEmployeeErrors'>{errorsSecondaryPayRate.secondaryPayRate}</p>}






{/* -------------------------------- TERTIARY -----------------------------*/}




                            <div id='tertiaryTitleContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Tertiary Title:
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="tertiaryTitle"
                                            name="tertiaryTitle"
                                            type="text"
                                            placeholder='Tertiary Title'
                                            value={tertiaryTitle}
                                            onChange={(e) => setTertiaryTitle(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryTitle && <p className='CreateNewEmployeeErrors'>{errors.tertiaryTitle}</p>}



                            <div id='tertiaryStartDateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Tertiary Start Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="tertiaryStartDate"
                                            name="tertiaryStartDate"
                                            type="text"
                                            placeholder='Tertiary Start Date  (mm/dd/yyyy)'
                                            value={tertiaryStartDate}
                                            onChange={(e) => setTertiaryStartDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryStartDate && <p className='CreateNewEmployeeErrors'>{errors.tertiaryStartDate}</p>}



                            <div id='tertiaryEndDateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Tertiary End Date  (mm/dd/yyyy):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="tertiaryEndDate"
                                            name="tertiaryEndDate"
                                            type="text"
                                            placeholder='Tertiary End Date  (mm/dd/yyyy)'
                                            value={tertiaryEndDate}
                                            onChange={(e) => setTertiaryEndDate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.tertiaryEndDate && <p className='CreateNewEmployeeErrors'>{errors.tertiaryEndDate}</p>}




                            <div id='tertiaryPayRateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeFormLabel'>
                                            Tertiary Pay Rate $ (USD):
                                            <input
                                            className='CreateNewEmployeeFormInput'
                                            id="tertiaryPayRate"
                                            name="tertiaryPayRate"
                                            type="text"
                                            placeholder='Tertiary Pay Rate $ (USD)'
                                            value={tertiaryPayRate}
                                            onChange={(e) => setTertiaryPayRate(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsTertiaryPayRate.tertiaryPayRate && <p className='CreateNewEmployeeErrors'>{errorsTertiaryPayRate.tertiaryPayRate}</p>}




{/* -------------------------------- QUARTERNARY -----------------------------*/}






                            <div id='quarternaryTitleContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                            <label className='CreateNewEmployeeFormLabel'>
                                Quarternary Title:
                                <input
                                className='CreateNewEmployeeFormInput'
                                id="quarternaryTitle"
                                name="quarternaryTitle"
                                type="text"
                                placeholder='Quarternary Title'
                                value={quarternaryTitle}
                                onChange={(e) => setQuarternaryTitle(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryTitle && <p className='CreateNewEmployeeErrors'>{errors.quarternaryTitle}</p>}



                            <div id='quarternaryStartDateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                            <label className='CreateNewEmployeeFormLabel'>
                                Quarternary Start Date  (mm/dd/yyyy):
                                <input
                                className='CreateNewEmployeeFormInput'
                                id="quarternaryStartDate"
                                name="quarternaryStartDate"
                                type="text"
                                placeholder='Quarternary Start Date  (mm/dd/yyyy)'
                                value={quarternaryStartDate}
                                onChange={(e) => setQuarternaryStartDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryStartDate && <p className='CreateNewEmployeeErrors'>{errors.quarternaryStartDate}</p>}



                            <div id='quarternaryEndDateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                            <label className='CreateNewEmployeeFormLabel'>
                                Quarternary End Date  (mm/dd/yyyy):
                                <input
                                className='CreateNewEmployeeFormInput'
                                id="quarternaryEndDate"
                                name="quarternaryEndDate"
                                type="text"
                                placeholder='Quarternary End Date  (mm/dd/yyyy)'
                                value={quarternaryEndDate}
                                onChange={(e) => setQuarternaryEndDate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errors.quarternaryEndDate && <p className='CreateNewEmployeeErrors'>{errors.quarternaryEndDate}</p>}




                            <div id='quarternaryPayRateContainer' className='CreateNewEmployeeFormLabelInputContainer'>

                            <label className='CreateNewEmployeeFormLabel'>
                                Quarternary Pay Rate $ (USD):
                                <input
                                className='CreateNewEmployeeFormInput'
                                id="quarternaryPayRate"
                                name="quarternaryPayRate"
                                type="text"
                                placeholder='Quarternary Pay Rate $ (USD)'
                                value={quarternaryPayRate}
                                onChange={(e) => setQuarternaryPayRate(e.target.value)}

                                />
                            </label>

                            </div>
                            {errorsQuarternaryPayRate.quarternaryPayRate && <p className='CreateNewEmployeeErrors'>{errorsQuarternaryPayRate.quarternaryPayRate}</p>}



                        </section>

                        <hr className='CreateNewEmployeeHr'></hr>




{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='CreateNewEmployeeRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="CreateNewEmployeeButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Create Employee
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default CreateNewEmployeeForm;
