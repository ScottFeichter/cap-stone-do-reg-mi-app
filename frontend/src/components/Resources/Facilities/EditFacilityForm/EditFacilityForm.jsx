import './EditFacilityForm.css';
// const BASE_CLASS_NAME = "EditFacilityForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import * as facilitiesActions from '../../../../redux/facilitiesReducer.js';



function EditFacilityForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const location = useLocation();
        const {facilityToEdit} = location.state;

        // console.log("facilityToEdit : ", facilityToEdit)

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsName, setErrorsName] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});




        // const [isDisabled, setIsDisabled] = useState(false);


        let editedFacility = {


            name	                    :	null	,
            imageURL	                :	null	,

        }


    const [name,setName] = useState(facilityToEdit.name||"")
    const [imageURL,setImageURL] = useState(facilityToEdit.imageURL||"")







// HELPERS FOR EditFacility Button handler---------------------------------------------------



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



         if(name)	    editedFacility	.	name	    =	name	    ;
         if(imageURL)	editedFacility	.	imageURL	=	imageURL	;


         editedFacility.id = facilityToEdit.id;

        //  console.log("editedFacility 423: ", editedFacility)

         // --------------------------MAKING THE DISPATCH---------------------//
            let facilityId;
            let editedFacilityDetails;
            if(editedFacilityDetails);

            await dispatch(facilitiesActions.thunkEditFacility(editedFacility))
            .then(response => {
                dispatch(facilitiesActions.thunkGetFacilitiesAll())
                // console.log("response 432: ", response, "response.payload", response.payload, "response.payload[0]", response.payload.id);
                facilityId = response.payload.id
                return facilityId
            }).catch(async (res) => {
                    // console.log("res 439", res);
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(facilitiesActions.thunkGetFacilityById(facilityId)).then(response => {
                editedFacilityDetails = response;

                navigate(`/departments`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }

// return-----------------------------------
        return (
          <main id="EditFacilityMain">

            <h1 id='EditFacilityH1'>Edit Facility</h1>


                    <form id='EditFacilityForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditFacilityFormSection1">

                            <h4 id="EditFacilityFormSection1H4">Information</h4>

                            <p id="EditFacilityFormSection1P">
                                Edit information for existing facility.
                            </p>
                            <h5 className='EditFacilityH5'>* indicates required field</h5>



                            <div id='nameContainer' className='EditFacilityFormLabelInputContainer'>

                                        <p className='EditFacilityFormRequired'>{required}</p>
                                        <label className='EditFacilityFormLabel'>
                                            Name:

                                            <input
                                            className='EditFacilityFormInput'
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
                            {errorsName.name && <p className='EditFacilityErrors'>{errorsName.name}</p>}



                            <div id='imageURLContainer' className='EditFacilityFormLabelInputContainer'>

                                        <label className='EditFacilityFormLabel'>
                                            ImageURL:
                                            <input
                                            className='EditFacilityFormInput'
                                            id="imageURL"
                                            name="imageURL"
                                            type="text"
                                            placeholder='ImageURL'
                                            value={imageURL}
                                            onChange={(e) => setImageURL(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.imageURL && <p className='EditFacilityErrors'>{errors.imageURL}</p>}


                        </section>
{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='EditFacilityRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="EditFacilityButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Submit Edit
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default EditFacilityForm;
