import './EditBranchForm.css';
// const BASE_CLASS_NAME = "EditBranchForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import * as branchesActions from '../../../../redux/branchesReducer.js';



function EditBranchForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const location = useLocation();
        const {branchToEdit} = location.state;

        // console.log("branchToEdit : ", branchToEdit)

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsName, setErrorsName] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});




        // const [isDisabled, setIsDisabled] = useState(false);


        let editedBranch = {


            name	                    :	null	,
            imageURL	                :	null	,

        }


    const [name,setName] = useState(branchToEdit.name||"")
    const [imageURL,setImageURL] = useState(branchToEdit.imageURL||"")







// HELPERS FOR EditBranch Button handler---------------------------------------------------



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



         if(name)	    editedBranch	.	name	    =	name	    ;
         if(imageURL)	editedBranch	.	imageURL	=	imageURL	;


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

// return-----------------------------------
        return (
          <main id="EditBranchMain">

            <h1 id='EditBranchH1'>Edit Employee Department</h1>


                    <form id='EditBranchForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditBranchFormSection1">

                            <h4 id="EditBranchFormSection1H4">Personal Information</h4>

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



                            <div id='imageURLContainer' className='EditBranchFormLabelInputContainer'>

                                        <label className='EditBranchFormLabel'>
                                            ImageURL:
                                            <input
                                            className='EditBranchFormInput'
                                            id="imageURL"
                                            name="imageURL"
                                            type="text"
                                            placeholder='ImageURL'
                                            value={imageURL}
                                            onChange={(e) => setImageURL(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.imageURL && <p className='EditBranchErrors'>{errors.imageURL}</p>}


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
