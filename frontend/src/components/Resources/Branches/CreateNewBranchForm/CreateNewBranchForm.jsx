import './CreateNewBranchForm.css';
// const BASE_CLASS_NAME = "CreateNewBranchForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { TbPlayerSkipBackFilled } from "react-icons/tb";
// import { TbPlayerSkipForwardFilled } from "react-icons/tb";

import * as branchesActions from '../../../../redux/branchesReducer.js';



function CreateNewBranchForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [errors, setErrors] = useState({});
        if(errors); // stop yelling at me

        //-----required
        const [errorsName, setErrorsName] = useState({});
        const [errorsStreet, setErrorsStreet] = useState({});
        const [errorsCity, setErrorsCity] = useState({});
        const [errorsState, setErrorsState] = useState({});
        const [errorsZip, setErrorsZip] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});


        // const [isDisabled, setIsDisabled] = useState(false);


        let newBranch = {
            name	                    :	null	,
            street	                    :	null	,
            city	                    :	null	,
            state	                    :	null	,
            zip	                        :	null	,
        }


        const [name, setName] = useState("");
        const [street, setStreet] = useState("");
        const [city, setCity] = useState("");
        const [state, setState] = useState("");
        const [zip, setZip] = useState("");



// HELPERS FOR CreateNewBranch Button handler---------------------------------------------------

// helper for handleSubmit check required fields
const checkRequired = () => {

    let nameBool = false;
    let streetBool = false;
    let cityBool = false;
    let stateBool = false;
    let zipBool = false;

    if(!name) {
        nameBool = true;
        setErrorsName({name: "Name is required"});
    } else {
        nameBool = false;
        setErrorsName({});
    }

    if(!street) {
        streetBool = true;
        setErrorsStreet({street: "Street is required"});
    } else {
        streetBool = false;
        setErrorsStreet({});
    }

    if(!city) {
        cityBool = true;
        setErrorsCity({city: "City is required"});
    } else {
        cityBool = false;
        setErrorsCity({});
    }

    if(!state) {
        stateBool = true;
        setErrorsState({state: "State is required"});
    } else {
        stateBool = false;
        setErrorsState({});
    }


    if(!zip) {
        zipBool = true;
        setErrorsZip({zip: "Zip 1 is required"});
    } else {
        zipBool = false;
        setErrorsZip({});
    }


    if (
        (nameBool) ||
        (streetBool) ||
        (cityBool) ||
        (stateBool) ||
        (zipBool)
    ) {
        return true
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



         // ---------------REPLACING NEW EMPLOYEE OBJECT VALUES WITH USER INPUT IF EXISTS---------//



         if(	name	)	newBranch	.	name	=	name	;
         if(	street	)	newBranch	.	street	=	street	;
         if(	city	)	newBranch	.	city	=	city	;
         if(	state	)	newBranch	.	state	=	state	;
         if(	zip	    )	newBranch	.	zip	    =	zip	    ;


        //  console.log("newBranch 448: ", newBranch)

         // --------------------------MAKING THE DISPATCH---------------------//
            let branchId;
            let newBranchDetails;
            if(newBranchDetails);

            await dispatch(branchesActions.thunkCreateBranch(newBranch))
            .then(response => {
                return response
            })
            .then(response => {
                branchId = response.payload[0].id;
                dispatch(branchesActions.thunkGetBranchesAll());
                return branchId;
            }).catch(async (res) => {
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(branchesActions.thunkGetBranchesAll()).then((response) => {
                dispatch(branchesActions.thunkGetBranchById(branchId));
                return response
            }).then(response => {
                dispatch(branchesActions.thunkGetBranchesAll())
                return response
            }).then(response => {
                newBranchDetails = response;
                navigate(`/branches/${branchId}`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }




        // -----------------------------HANDLE BACK -------------------------------//
        const handleBackClick = async (e) => {
            e.preventDefault();
            console.log('HANDLE BACK');
            navigate('/resources');
        }

        // -----------------------------HANDLE FORWARD -------------------------------//
        // const handleForthClick = async (e) => {
        //     e.preventDefault();
        //     // console.log('HANDLE FORTH');
        //     navigate('/createNewFacilityForm');
        // }


// return-----------------------------------
        return (
          <main id="CreateNewBranchMain">

            <h1 id='CreateNewBranchH1'>Create A New Branch</h1>


                        <div id="CreateNewBranchTransportContainer">

                            <button  id='CreateNewBranchBack' onClick={handleBackClick}>
                                <TbPlayerSkipBackFilled id={`CreateNewBranchTbPlayerBack`} />Back To Resources
                            </button>



                            {/* <button id='CreateNewBranchForth' onClick={handleForthClick}>Forth
                                <TbPlayerSkipForwardFilled id={`CreateNewBranchTbPlayerForth`} />
                            </button> */}

                        </div>



                        <form id='CreateNewBranchForm' onSubmit={handleSubmit}>

    {/* form section 1---------------------------------------------------------- */}



                            <section id="CreateNewBranchFormSection1">




                            <h4 id="CreateNewBranchFormSection1H4">Information</h4>
                                <p id="CreateNewBranchFormSection1P">
                                    Enter information for new branch.
                                </p>
                                <h5 className='CreateNewBranchH5'>* indicates required field</h5>



                                <div id='nameContainer' className='CreateNewBranchFormLabelInputContainer'>

                                            <p className='CreateNewBranchFormRequired'>{required}</p>
                                            <label className='CreateNewBranchFormLabel'>
                                                Name :

                                                <input
                                                className='CreateNewBranchFormInput'
                                                id="name"
                                                name="name"
                                                type="text"
                                                placeholder='Name'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                />
                                            </label>

                                </div>
                                {errorsName.name && <p className='CreateNewBranchErrors'>{errorsName.name}</p>}


                                <div id='streetContainer' className='CreateNewBranchFormLabelInputContainer'>

                                            <p className='CreateNewBranchFormRequired'>{required}</p>
                                            <label className='CreateNewBranchFormLabel'>
                                                Street :

                                                <input
                                                className='CreateNewBranchFormInput'
                                                id="street"
                                                name="street"
                                                type="text"
                                                placeholder='Street'
                                                value={street}
                                                onChange={(e) => setStreet(e.target.value)}
                                                required
                                                />
                                            </label>

                                </div>
                                {errorsStreet.street && <p className='CreateNewBranchErrors'>{errorsStreet.street}</p>}


                                <div id='cityContainer' className='CreateNewBranchFormLabelInputContainer'>

                                            <p className='CreateNewBranchFormRequired'>{required}</p>
                                            <label className='CreateNewBranchFormLabel'>
                                                City :

                                                <input
                                                className='CreateNewBranchFormInput'
                                                id="city"
                                                name="city"
                                                type="text"
                                                placeholder='City'
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                required
                                                />
                                            </label>

                                </div>
                                {errorsCity.city && <p className='CreateNewBranchErrors'>{errorsCity.city}</p>}



                                <div id='stateContainer' className='CreateNewBranchFormLabelInputContainer'>

                                            <p className='CreateNewBranchFormRequired'>{required}</p>
                                            <label className='CreateNewBranchFormLabel'>
                                                State :

                                                <input
                                                className='CreateNewBranchFormInput'
                                                id="state"
                                                name="state"
                                                type="text"
                                                placeholder='State'
                                                value={state}
                                                onChange={(e) => setState(e.target.value)}
                                                required
                                                />
                                            </label>

                                </div>
                                {errorsState.state && <p className='CreateNewBranchErrors'>{errorsState.state}</p>}



                                <div id='zipContainer' className='CreateNewBranchFormLabelInputContainer'>

                                            <p className='CreateNewBranchFormRequired'>{required}</p>
                                            <label className='CreateNewBranchFormLabel'>
                                                Zip :

                                                <input
                                                className='CreateNewBranchFormInput'
                                                id="zip"
                                                name="zip"
                                                type="text"
                                                placeholder='Zip'
                                                value={zip}
                                                onChange={(e) => setZip(e.target.value)}
                                                required
                                                />
                                            </label>

                                </div>
                                {errorsZip.zip && <p className='CreateNewBranchErrors'>{errorsZip.zip}</p>}


                            </section>

                            <hr className='CreateNewBranchHr'></hr>

    {/* form button---------------------------------------------------------- */}
                            {requiredFieldsMessage.message && <p className='CreateNewBranchRequiredErrors'>{requiredFieldsMessage.message}</p>}


                            <div id="buttonContainer">

                                <button
                                    id="CreateNewBranchButton"
                                    type="submit"
                                    onClick={handleSubmit}
                                    >Create Branch
                                </button>
                            </div>


                        </form>

          </main>

        )
    }



export default CreateNewBranchForm;
