import './EditFacilityForm.css';
// const BASE_CLASS_NAME = "EditFacilityForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';


import { TbPlayerSkipBackFilled } from "react-icons/tb";
// import { TbPlayerSkipForwardFilled } from "react-icons/tb";



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
            branch_Id	                :	null	,

        }


    const [name,setName] = useState(facilityToEdit.name||"")
    const [branch_Id,setBranch_Id] = useState(facilityToEdit.branch_Id||"")







// HELPERS FOR EditFacility Button handler---------------------------------------------------



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
         if(branch_Id)	editedFacility	.	branch_Id	=	branch_Id	;


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

                navigate(`/resources`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }





// =====================TRANSPORT BUTTONS HANDLERS=========================

        // -----------------------------HANDLE BACK -------------------------------//
        const handleBackClick = async (e) => {
            e.preventDefault();
            // console.log('HANDLE BACK');
            navigate(`/facilities/${facilityToEdit.id}`);
        }

        // -----------------------------HANDLE FORWARD -------------------------------//
        // const handleForthClick = async (e) => {
        //     e.preventDefault();
        //     // console.log('HANDLE FORTH');
        //     navigate('/createNewFacilityForm');
        // }


// return-----------------------------------
        return (
          <main id="EditFacilityMain">

            <h1 id='EditFacilityH1'>Edit Facility</h1>

            <div id="EditFacilityTransportContainer">

                <button  id='EditFacilityBack' onClick={handleBackClick}>
                    <TbPlayerSkipBackFilled id={`EditFacilityTbPlayerBack`} />Back To Details
                </button>


                {/* <button id='EditFacilityFormForth' onClick={handleForthClick}>Forth
                    <TbPlayerSkipForwardFilled id={`EditFacilityFormTbPlayerForth`} />
                </button> */}

            </div>



                    <form id='EditFacilityForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditFacilityFormSection1">

                            <h4 id="EditFacilityFormSection1H4">Information</h4>

                            <p id="EditFacilityFormSection1P">
                                Edit information for existing facility.
                            </p>
                            <h5 className='EditFacilityH5'>* indicates required field</h5>



                            <div id='nameContainer' className='EditFacilityFormLabelInputContainer'>



                                        <label className='EditFacilityFormLabel' htmlFor="name">
                                            <p className='EditFacilityFormRequired'>{required}</p>
                                            Name: </label>

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

                            </div>
                            {errorsName.name && <p className='EditFacilityErrors'>{errorsName.name}</p>}



                            <div id='branch_IdContainer' className='EditFacilityFormLabelInputContainer'>

                                        <label className='EditFacilityFormLabel'>
                                            Branch ID:   </label>
                                            <input
                                            className='EditFacilityFormInput'
                                            id="branch_Id"
                                            name="branch_Id"
                                            type="text"
                                            placeholder='Branch_Id'
                                            value={branch_Id}
                                            onChange={(e) => setBranch_Id(e.target.value)}

                                            />


                            </div>
                            {errors.branch_Id && <p className='EditFacilityErrors'>{errors.branch_Id}</p>}


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
