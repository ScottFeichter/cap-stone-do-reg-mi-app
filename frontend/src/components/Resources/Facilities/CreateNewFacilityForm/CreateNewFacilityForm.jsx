import './CreateNewFacilityForm.css';
// const BASE_CLASS_NAME = "CreateNewFacilityForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
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
            imageURL	                :	null	,
        }


        const [name, setName] = useState("");
        const [imageURL, setStreet] = useState("");


// HELPERS FOR CreateNewFacility Button handler---------------------------------------------------

// helper for handleSubmit check required fields
const checkRequired = () => {

    let nameBool = false;

    if(!name) {
        nameBool = true;
        setErrorsName({name: "First Name 1 is required"});
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



         if(	name	)	newFacility	.	name	=	name	;
         if(	imageURL	)	newFacility	.	imageURL	=	imageURL	;

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




// return-----------------------------------
        return (
          <main id="CreateNewFacilityMain">

            <h1 id='CreateNewFacilityH1'>Create A New Facility</h1>


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
                                            ImageURL:
                                            <input
                                            className='CreateNewFacilityFormInput'
                                            id="imageURL"
                                            name="imageURL"
                                            type="text"
                                            placeholder='ImageURL'
                                            value={imageURL}
                                            onChange={(e) => setStreet(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.imageURL && <p className='CreateNewFacilityErrors'>{errors.imageURL}</p>}



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
