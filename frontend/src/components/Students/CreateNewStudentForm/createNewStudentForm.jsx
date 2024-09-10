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
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});



        //-----must be integers
        const [errorsHousehold_Id, setErrorsHousehold_Id] = useState({})
        const [errorsLevel_Id, setErrorsLevel_Id ] = useState({})
        const [errorsYearlyIncome, setErrorsYearlyIncome] = useState({})




        //-----must be bools
        const [errorsHeadOfHousehold, setErrorsHeadOfHousehold ] = useState({})




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





// account information form section 2----------------------------------------------------------

        const [household_Id, setHousehold_Id] = useState("");
        const [headOfHousehold, setHeadOfHousehold] = useState("");
        const [yearlyIncome, setYearlyIncome] = useState("");
        const [level_Id, setLevel_Id] = useState("");




// biographical information form section 3----------------------------------------------------------


        const [firstLang, setFirstLang] = useState("");
        const [secondLang, setSecondLang] = useState("");
        const [thirdLang, setThirdLang] = useState("");
        const [firstInst, setFirstInst] = useState("");
        const [secondInst, setSecondInst] = useState("");
        const [thirdInst, setThirdInst] = useState("");
        const [biography, setBiography] = useState("");
        const [notes, setNotes] = useState("");



// additional information section 4----------------------------------------------------------







// HELPERS FOR CreateNewStudent Button handler---------------------------------------------------



// helper for handleSubmit check required fields
const checkRequired = () => {

    let firstNameBool = false;
    let lastNameBool = false;
    let phoneBool = false;
    let firstLangBool = false;
    let headOfHouseholdBool = false;



    if(!firstName) {
        firstNameBool = true;
        setErrorsFirstName({firstName: "First Name is required"});
    } else {
        firstNameBool = false;
        setErrorsFirstName({});
    }

    if(!lastName) {
        lastNameBool = true;
        setErrorsLastName({lastName: "Last Name is required"});
    } else {
        lastNameBool = false;
        setErrorsLastName({});
    }

    if(!phone) {
        phoneBool = true;
        setErrorsPhone({phone: "Phone is required"});
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

    if(!headOfHousehold) {
        headOfHouseholdBool = true;
        setErrorsHeadOfHousehold({headOfHousehold: "Head of Household is required"});

    } else {
        headOfHouseholdBool = false;
        setErrorsHeadOfHousehold({})
    }



    if (
        (firstNameBool) ||
        (lastNameBool)  ||
        (phoneBool)     ||
        (firstLangBool) ||
        (headOfHouseholdBool)
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

    console.log("yearlyIncome: ", yearlyIncome, typeof yearlyIncome);
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



    let headOfHouseholdErrorBool = false;


    if(headOfHousehold !== "" && ((headOfHousehold.toLowerCase() !== "true") && (headOfHousehold.toLowerCase() !== "false"))) {
        headOfHouseholdErrorBool = true;
        setErrorsHeadOfHousehold({headOfHousehold: "Head of Household must be true or false"});
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


            if(checkBool()) {
                setRequiredFieldsMessage({message: "Field(s) must be true or false - see errors above."});
                // console.log("HANDLE SUBMIT STOPPED DUE TO FIELD(S) MUST BE TRUE OR FALSE")
                return
            } else {
                setRequiredFieldsMessage({});
            }




         // ---------------REPLACING NEW EMPLOYEE OBJECT VALUES WITH USER INPUT IF EXISTS---------//


         if(	household_Id	)	newStudent	.	household_Id	=	household_Id	;
         if(	headOfHousehold	)	newStudent	.	headOfHousehold	=	!!(headOfHousehold.toLowerCase())	;
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
         if(	yearlyIncome	)	newStudent	.	yearlyIncome	=	yearlyIncome	;
         if(	firstLang	)	newStudent	.	firstLang	=	firstLang	;
         if(	secondLang	)	newStudent	.	secondLang	=	secondLang	;
         if(	thirdLang	)	newStudent	.	thirdLang	=	thirdLang	;
         if(	firstInst	)	newStudent	.	firstInst	=	firstInst	;
         if(	secondInst	)	newStudent	.	secondInst	=	secondInst	;
         if(	thirdInst	)	newStudent	.	thirdInst	=	thirdInst	;
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
                    console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
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
                                            First Name:

                                            <input
                                            className='CreateNewStudentFormInput'
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
                            {errorsFirstName.firstName && <p className='CreateNewStudentErrors'>{errorsFirstName.firstName}</p>}


                            <div id='nickNameContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Nick Name:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="nickName"
                                            name="nickName"
                                            type="text"
                                            placeholder='Nick Name'
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
                                            Last Name:
                                            <input
                                            className='CreateNewStudentFormInput'
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
                            {errorsLastName.lastName && <p className='CreateNewStudentErrors'>{errorsLastName.lastName}</p>}



                            <div id='familyNameContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Family Name :
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="familyName"
                                            name="familyName"
                                            type="text"
                                            placeholder='Family Name'
                                            value={familyName}
                                            onChange={(e) => setFamilyName(e.target.value)}

                                            />
                                        </label>


                            </div>
                            {errors.familyName && <p className='CreateNewStudentErrors'>{errors.familyName}</p>}




                            <div id='emailContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Email:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setPersonalEmail(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.email && <p className='CreateNewStudentErrors'>{errors.email}</p>}



                            <div id='phoneContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <p className='CreateNewStudentFormRequired'>{required}</p>
                                        <label className='CreateNewStudentFormLabel'>
                                            Phone:
                                            <input
                                            className='CreateNewStudentFormInput'
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
                            {errors.zip && <p className='CreateNewStudentErrors'>{errors.zip}</p>}




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






                        </section>

                        <hr className='CreateNewStudentHr'></hr>
{/* form section 2---------------------------------------------------------- */}

                        <section id="CreateNewStudentFormSection2">

                        <h4 id="CreateNewStudentFormSection2H4">Account Information</h4>

                            <p id="CreateNewStudentFormSection2P">
                                Enter account information for new student.
                            </p>
                            <h5 className='CreateNewStudentH5'>* indicates required field</h5>



                            <div id='household_IdContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Household ID:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="household_Id"
                                            name="household_Id"
                                            type="text"
                                            placeholder='Household ID'
                                            value={household_Id}
                                            onChange={(e) => setHousehold_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsHousehold_Id.household_Id && <p className='CreateNewStudentErrors'>{errorsHousehold_Id.household_Id}</p>}



                            <div id='headOfHouseholdContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <p className='CreateNewStudentFormRequired'>{required}</p>
                                        <label className='CreateNewStudentFormLabel'>
                                            Head Of Household:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="headOfHousehold"
                                            name="headOfHousehold"
                                            type="text"
                                            placeholder='True or False'
                                            value={headOfHousehold}
                                            onChange={(e) => setHeadOfHousehold(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsHeadOfHousehold.headOfHousehold && <p className='CreateNewStudentErrors'>{errorsHeadOfHousehold.headOfHousehold}</p>}


                            <div id='yearlyIncomeContainer' className='CreateNewStudentFormLabelInputContainer'>

                                <label className='CreateNewStudentFormLabel'>
                                    Yearly Income:
                                    <input
                                    className='CreateNewStudentFormInput'
                                    id="yearlyIncome"
                                    name="yearlyIncome"
                                    type="text"
                                    placeholder='Yearly Income'
                                    value={yearlyIncome}
                                    onChange={(e) => setYearlyIncome(e.target.value)}

                                    />
                                </label>

                            </div>
                            {errorsYearlyIncome.yearlyIncome && <p className='CreateNewStudentErrors'>{errorsYearlyIncome.yearlyIncome}</p>}



                            <div id='level_IdContainer' className='CreateNewStudentFormLabelInputContainer'>

                                        <label className='CreateNewStudentFormLabel'>
                                            Level ID:
                                            <input
                                            className='CreateNewStudentFormInput'
                                            id="level_Id"
                                            name="level_Id"
                                            type="text"
                                            placeholder='Level ID'
                                            value={level_Id}
                                            onChange={(e) => setLevel_Id(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errorsLevel_Id.level_Id && <p className='CreateNewStudentErrors'>{errorsLevel_Id.level_Id}</p>}






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




                        {/* <section id="CreateNewStudentFormSection4">

                        <h4 id="CreateNewStudentFormSection4H4">Additional Information</h4>

                            <p id="CreateNewStudentFormSection4P">
                            Enter additional information for new student.
                            </p>
                            <h5 className='CreateNewStudentH5'>* indicates required field</h5>


                        </section>

                        <hr className='CreateNewStudentHr'></hr> */}




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
