import './CreateNewBranchForm.css';
// const BASE_CLASS_NAME = "CreateNewBranchForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import * as branchesActions from '../../../../redux/branchesReducer.js';



function CreateNewBranchForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsName, setErrorsName] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});


        // const [isDisabled, setIsDisabled] = useState(false);


        let newBranch = {
            name	                    :	null	,
            imageURL	                :	null	,
        }


        const [name, setName] = useState("");
        const [imageURL, setStreet] = useState("");


// HELPERS FOR CreateNewBranch Button handler---------------------------------------------------

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



         if(	name	)	newBranch	.	name	=	name	;
         if(	imageURL	)	newBranch	.	imageURL	=	imageURL	;

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




// return-----------------------------------
        return (
          <main id="CreateNewBranchMain">

            <h1 id='CreateNewBranchH1'>Create A New Employee Department</h1>


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



                            <div id='ImageURLContainer' className='CreateNewBranchFormLabelInputContainer'>

                                        <label className='CreateNewBranchFormLabel'>
                                            ImageURL:
                                            <input
                                            className='CreateNewBranchFormInput'
                                            id="imageURL"
                                            name="imageURL"
                                            type="text"
                                            placeholder='ImageURL'
                                            value={imageURL}
                                            onChange={(e) => setStreet(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.imageURL && <p className='CreateNewBranchErrors'>{errors.imageURL}</p>}



                        </section>

                        <hr className='CreateNewBranchHr'></hr>

{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='CreateNewBranchRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="CreateNewBranchButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Create Employee Department
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default CreateNewBranchForm;
