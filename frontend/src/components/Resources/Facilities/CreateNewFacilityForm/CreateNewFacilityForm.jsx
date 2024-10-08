import './CreateNewFacilityForm.css';
// const BASE_CLASS_NAME = "CreateNewFacilityForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { TbPlayerSkipBackFilled } from "react-icons/tb";
// import { TbPlayerSkipForwardFilled } from "react-icons/tb";


import * as facilitiesActions from '../../../../redux/facilitiesReducer.js';



function CreateNewFacilityForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsName, setErrorsName] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});


        // const [isDisabled, setIsDisabled] = useState(false);


        let newFacility = {
            name	                    :	null	,
            branch_Id	                :	null	,
        }


        const [name, setName] = useState("");
        const [branch_Id, setStreet] = useState("");


// HELPERS FOR CreateNewFacility Button handler---------------------------------------------------

// helper for handleSubmit check required fields
const checkRequired = () => {

    let nameBool = false;

    if(!name) {
        nameBool = true;
        setErrorsName({name: "Name is required"});
    } else {
        nameBool = false;
        setErrorsName({});
    }


    if (
        (nameBool)
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



         if(name)	    newFacility	.	name	    =	name	;
         if(branch_Id)	newFacility	.	branch_Id	=	branch_Id	;

        //  console.log("newFacility 448: ", newFacility)

         // --------------------------MAKING THE DISPATCH---------------------//
            let facilityId;
            let newFacilityDetails;
            if(newFacilityDetails);

            await dispatch(facilitiesActions.thunkCreateFacility(newFacility))
            .then(response => {
                return response
            })
            .then(response => {
                facilityId = response.payload[0].id;
                dispatch(facilitiesActions.thunkGetFacilitiesAll());
                return facilityId;
            }).catch(async (res) => {
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(facilitiesActions.thunkGetFacilitiesAll()).then((response) => {
                dispatch(facilitiesActions.thunkGetFacilityById(facilityId));
                return response
            }).then(response => {
                dispatch(facilitiesActions.thunkGetFacilitiesAll())
                return response
            }).then(response => {
                newFacilityDetails = response;
                navigate(`/facilities/${facilityId}`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }



        // -----------------------------HANDLE BACK -------------------------------//
        // const handleBackClick = async (e) => {
        //     e.preventDefault();
        //     console.log('HANDLE BACK');
        //     navigate('/resources');
        // }

        // -----------------------------HANDLE FORWARD -------------------------------//
        // const handleForthClick = async (e) => {
        //     e.preventDefault();
        //     // console.log('HANDLE FORTH');
        //     navigate('/createNewFacilityForm');
        // }





// return================================
        return (
          <main id="CreateNewFacilityMain">

            <h1 id='CreateNewFacilityH1'>Create A New Facility</h1>

            <div id="CreateNewFacilityTransportContainer">

                {/* <button  id='CreateNewFacilityBack' onClick={handleBackClick}>
                    <TbPlayerSkipBackFilled id={`CreateNewFacilityTbPlayerBack`} />Back To Resources
                </button> */}



                {/* <button id='CreateNewFacilityForth' onClick={handleForthClick}>Forth
                    <TbPlayerSkipForwardFilled id={`CreateNewFacilityTbPlayerForth`} />
                </button> */}

            </div>


                    <form id='CreateNewFacilityForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="CreateNewFacilityFormSection1">

                            <h4 id="CreateNewFacilityFormSection1H4">Information</h4>

                            <p id="CreateNewFacilityFormSection1P">
                                Enter information for new facility.
                            </p>
                            <h5 className='CreateNewFacilityH5'>* indicates required field</h5>



                            <div id='nameContainer' className='CreateNewFacilityFormLabelInputContainer'>

                                        <p className='CreateNewFacilityFormRequired'>{required}</p>
                                        <label className='CreateNewFacilityFormLabel'>
                                            Name :

                                            <input
                                            className='CreateNewFacilityFormInput'
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
                            {errorsName.name && <p className='CreateNewFacilityErrors'>{errorsName.name}</p>}



                            <div id='ImageURLContainer' className='CreateNewFacilityFormLabelInputContainer'>

                                        <label className='CreateNewFacilityFormLabel'>
                                            Branch ID:
                                            <input
                                            className='CreateNewFacilityFormInput'
                                            id="branch_Id"
                                            name="branch_Id"
                                            type="text"
                                            placeholder='Branch ID'
                                            value={branch_Id}
                                            onChange={(e) => setStreet(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.branch_Id && <p className='CreateNewFacilityErrors'>{errors.branch_Id}</p>}



                        </section>

                        <hr className='CreateNewFacilityHr'></hr>

{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='CreateNewFacilityRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="CreateNewFacilityButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Create Facility
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default CreateNewFacilityForm;
