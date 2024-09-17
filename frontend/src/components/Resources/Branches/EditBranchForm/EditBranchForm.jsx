import './EditBranchForm.css';
// const BCIN = "EditBranchForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';

import { TbPlayerSkipBackFilled } from "react-icons/tb";
// import { TbPlayerSkipForwardFilled } from "react-icons/tb";


import * as branchesActions from '../../../../redux/branchesReducer.js';



function EditBranchForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const location = useLocation();
        const {branchToEdit} = location.state;

        // console.log("branchToEdit : ", branchToEdit)

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


        let editedBranch = {

            name	                    :	null	,
            street	                    :	null	,
            city	                    :	null	,
            state	                    :	null	,
            zip	                        :	null	,

        }


        const [name, setName] = useState(branchToEdit.name || "");
        const [street, setStreet] = useState(branchToEdit.street || "");
        const [city, setCity] = useState(branchToEdit.city || "");
        const [state, setState] = useState(branchToEdit.state || "");
        const [zip, setZip] = useState(branchToEdit.zip || "");





// HELPERS FOR EditBranch Button handler---------------------------------------------------



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
        setErrorsZip({zip: "Zip is required"});
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
            // console.log('HANDLE SUBMIT EDIT EMPLOYEE IS RUNNING');

        // -----------------CLIENT SIDE VALIDATIONS-----------------------//

            if(checkRequired()) {

                setRequiredFieldsMessage({message: "Required field must be complete - see errors above."});
                // console.log("HANDLE SUBMIT STOPPED DUE TO REQUIRED FIELD MISSING INFORMATION")
                return
            } else {
                setRequiredFieldsMessage({});
            }




         // ---------------REPLACING NEW EMPLOYEE OBJECT VALUES WITH USER INPUT IF EXISTS---------//



         if(name)	    editedBranch	.	name	=	name	;
         if(street)	    editedBranch	.	street	=	street	;
         if(city)	    editedBranch	.	city	=	city	;
         if(state)	    editedBranch	.	state	=	state	;
         if(zip)	    editedBranch	.	zip	    =	zip	    ;


         editedBranch.id = branchToEdit.id;

        //  console.log("editedBranch 423: ", editedBranch)

         // --------------------------MAKING THE DISPATCH---------------------//
            let branchId;
            let editedBranchDetails;
            if(editedBranchDetails);

            await dispatch(branchesActions.thunkEditBranch(editedBranch))
            .then(response => {
                dispatch(branchesActions.thunkGetBranchesAll())
                // console.log("response 432: ", response, "response.payload", response.payload, "response.payload[0]", response.payload.id);
                branchId = response.payload.id
                return branchId
            }).catch(async (res) => {
                    // console.log("res 439", res);
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(branchesActions.thunkGetBranchById(branchId)).then(response => {
                editedBranchDetails = response;

                navigate(`/departments`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }


// =====================TRANSPORT BUTTONS HANDLERS=========================

        // -----------------------------HANDLE BACK -------------------------------//
        const handleBackClick = async (e) => {
            e.preventDefault();
            // console.log('HANDLE BACK');
            navigate(`/branches/${branchToEdit.id}`);
        }

        // -----------------------------HANDLE FORWARD -------------------------------//
        // const handleForthClick = async (e) => {
        //     e.preventDefault();
        //     // console.log('HANDLE FORTH');
        //     navigate('/createNewFacilityForm');
        // }





// return=================================
        return (
          <main id="EditBranchMain">

            <h1 id='EditBranchH1'>Edit Branch</h1>


            <div id="EditBranchTransportContainer">

                <button  id='EditBranchBack' onClick={handleBackClick}>
                    <TbPlayerSkipBackFilled id={`EditBranchTbPlayerBack`} />Back To Details
                </button>


                {/* <button id='EditBranchForth' onClick={handleForthClick}>Forth
                    <TbPlayerSkipForwardFilled id={`EditBranchTbPlayerForth`} />
                </button> */}

            </div>


                    <form id='EditBranchForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditBranchFormSection1">

                            <h4 id="EditBranchFormSection1H4">Information</h4>

                            <p id="EditBranchFormSection1P">
                                Edit information for existing branch.
                            </p>
                            <h5 className='EditBranchH5'>* indicates required field</h5>



                            <div id='nameContainer' className='EditBranchFormLabelInputContainer'>

                                        <p className='EditBranchFormRequired'>{required}</p>
                                        <label className='EditBranchFormLabel'>
                                            Name:

                                            <input
                                            className='EditBranchFormInput'
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
                            {errorsName.name && <p className='EditBranchErrors'>{errorsName.name}</p>}

                            <div id='streetContainer' className='EditBranchFormLabelInputContainer'>

                            <p className='EditBranchFormRequired'>{required}</p>
                            <label className='EditBranchFormLabel'>
                                Street :

                                <input
                                className='EditBranchFormInput'
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
                            {errorsStreet.street && <p className='EditBranchErrors'>{errorsStreet.street}</p>}


                            <div id='cityContainer' className='EditBranchFormLabelInputContainer'>

                            <p className='EditBranchFormRequired'>{required}</p>
                            <label className='EditBranchFormLabel'>
                                City :

                                <input
                                className='EditBranchFormInput'
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
                            {errorsCity.city && <p className='EditBranchErrors'>{errorsCity.city}</p>}



                            <div id='stateContainer' className='EditBranchFormLabelInputContainer'>

                            <p className='EditBranchFormRequired'>{required}</p>
                            <label className='EditBranchFormLabel'>
                                State :

                                <input
                                className='EditBranchFormInput'
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
                            {errorsState.state && <p className='EditBranchErrors'>{errorsState.state}</p>}



                            <div id='zipContainer' className='EditBranchFormLabelInputContainer'>

                            <p className='EditBranchFormRequired'>{required}</p>
                            <label className='EditBranchFormLabel'>
                                Zip :

                                <input
                                className='EditBranchFormInput'
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
                            {errorsZip.zip && <p className='EditBranchErrors'>{errorsZip.zip}</p>}




                        </section>
{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='EditBranchRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="EditBranchButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Submit Edit
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default EditBranchForm;
