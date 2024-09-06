import './EditAcademicDepartmentForm.css';
// const BASE_CLASS_NAME = "EditAcademicDepartmentForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import * as academicDepartmentsActions from '../../../../redux/academicDepartmentsReducer.js';



function EditAcademicDepartmentForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const location = useLocation();
        const {academicDepartmentToEdit} = location.state;

        // console.log("academicDepartmentToEdit : ", academicDepartmentToEdit)

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsName, setErrorsName] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});




        // const [isDisabled, setIsDisabled] = useState(false);


        let editedAcademicDepartment = {


            name	                    :	null	,
            imageURL	                :	null	,

        }


    const [name,setName] = useState(academicDepartmentToEdit.name||"")
    const [imageURL,setImageURL] = useState(academicDepartmentToEdit.imageURL||"")







// HELPERS FOR EditAcademicDepartment Button handler---------------------------------------------------



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



         if(name)	    editedAcademicDepartment	.	name	    =	name	    ;
         if(imageURL)	editedAcademicDepartment	.	imageURL	=	imageURL	;


         editedAcademicDepartment.id = academicDepartmentToEdit.id;

        //  console.log("editedAcademicDepartment 423: ", editedAcademicDepartment)

         // --------------------------MAKING THE DISPATCH---------------------//
            let academicDepartmentId;
            let editedAcademicDepartmentDetails;
            if(editedAcademicDepartmentDetails);

            await dispatch(academicDepartmentsActions.thunkEditAcademicDepartment(editedAcademicDepartment))
            .then(response => {
                dispatch(academicDepartmentsActions.thunkGetAcademicDepartmentsAll())
                // console.log("response 432: ", response, "response.payload", response.payload, "response.payload[0]", response.payload.id);
                academicDepartmentId = response.payload.id
                return academicDepartmentId
            }).catch(async (res) => {
                    // console.log("res 439", res);
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(academicDepartmentsActions.thunkGetAcademicDepartmentById(academicDepartmentId)).then(response => {
                editedAcademicDepartmentDetails = response;

                navigate(`/departments`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }

// return-----------------------------------
        return (
          <main id="EditAcademicDepartmentMain">

            <h1 id='EditAcademicDepartmentH1'>Edit Academic Department</h1>


                    <form id='EditAcademicDepartmentForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditAcademicDepartmentFormSection1">

                            <h4 id="EditAcademicDepartmentFormSection1H4">Personal Information</h4>

                            <p id="EditAcademicDepartmentFormSection1P">
                                Edit information for existing academicDepartment.
                            </p>
                            <h5 className='EditAcademicDepartmentH5'>* indicates required field</h5>



                            <div id='nameContainer' className='EditAcademicDepartmentFormLabelInputContainer'>

                                        <p className='EditAcademicDepartmentFormRequired'>{required}</p>
                                        <label className='EditAcademicDepartmentFormLabel'>
                                            Name:

                                            <input
                                            className='EditAcademicDepartmentFormInput'
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
                            {errorsName.name && <p className='EditAcademicDepartmentErrors'>{errorsName.name}</p>}



                            <div id='imageURLContainer' className='EditAcademicDepartmentFormLabelInputContainer'>

                                        <label className='EditAcademicDepartmentFormLabel'>
                                            ImageURL:
                                            <input
                                            className='EditAcademicDepartmentFormInput'
                                            id="imageURL"
                                            name="imageURL"
                                            type="text"
                                            placeholder='ImageURL'
                                            value={imageURL}
                                            onChange={(e) => setImageURL(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.imageURL && <p className='EditAcademicDepartmentErrors'>{errors.imageURL}</p>}


                        </section>
{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='EditAcademicDepartmentRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="EditAcademicDepartmentButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Submit Edit
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default EditAcademicDepartmentForm;
