import './EditEmployeeDepartmentForm.css';
// const BASE_CLASS_NAME = "EditEmployeeDepartmentForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import * as employeeDepartmentsActions from '../../../../redux/employeeDepartmentsReducer.js';



function EditEmployeeDepartmentForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const location = useLocation();
        const {employeeDepartmentToEdit} = location.state;

        // console.log("employeeDepartmentToEdit : ", employeeDepartmentToEdit)

        // const [errors, setErrors] = useState({});

        //-----required
        const [errorsName, setErrorsName] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});




        //-----must be integers



        // const [isDisabled, setIsDisabled] = useState(false);


        let editedEmployeeDepartment = {

// personal information form section 1----------------------------------------------------------
            name	            :	null	,
            imageURL	            :	null	,

        }




    const [name,setName] = useState(employeeDepartmentToEdit.name||"")
    const [imageURL,setImageURL] = useState(employeeDepartmentToEdit.imageURL||"")







// HELPERS FOR EditEmployee Button handler---------------------------------------------------



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
            // console.log('HANDLE SUBMIT EDIT EMPLOYEE DEPARTMENT IS RUNNING');

        // -----------------CLIENT SIDE VALIDATIONS-----------------------//

            if(checkRequired()) {

                setRequiredFieldsMessage({message: "Required field must be complete - see errors above."});
                // return console.log("HANDLE SUBMIT STOPPED DUE TO REQUIRED FIELD MISSING INFORMATION")
            } else {
                setRequiredFieldsMessage({});
            }






         // ---------------REPLACING NEW EMPLOYEE DEPARTMENT OBJECT VALUES WITH USER INPUT IF EXISTS---------//



         if(	name	)	editedEmployeeDepartment	.	name	=	name	;
         if(	imageURL	)	editedEmployeeDepartment	.	imageURL	=	imageURL	;

         editedEmployeeDepartment.id = employeeDepartmentToEdit.id;

        //  console.log("editedEmployeeDepartment 423: ", editedEmployeeDepartment)

         // --------------------------MAKING THE DISPATCH---------------------//
            let employeeDepartmentId;
            let editedEmployeeDepartmentDetails;
            if(editedEmployeeDepartmentDetails);

            await dispatch(employeeDepartmentsActions.thunkEditEmployeeDepartment(editedEmployeeDepartment))
            .then(response => {
                dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll())
                // console.log("response 432: ", response, "response.payload", response.payload, "response.payload[0]", response.payload.id);
                employeeDepartmentId = response.payload.id
                return employeeDepartmentId
            }).catch(async (res) => {
                    // console.log("res 439", res);
                    const data = await res.json();
                    if(data);
                    // if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentById(employeeDepartmentId)).then(response => {
                editedEmployeeDepartmentDetails = response;

                navigate(`/departments`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE DEPARTMENT HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }




// return-----------------------------------
        return (
          <main id="EditEmployeeDepartmentMain">

            <h1 id='EditEmployeeDepartmentH1'>Edit Employee Department</h1>


                    <form id='EditEmployeeDepartmentForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="EditEmployeeDepartmentFormSection1">

                            <h4 id="EditEmployeeDepartmentFormSection1H4">Personal Information</h4>

                            <p id="EditEmployeeDepartmentFormSection1P">
                                Edit personal information for new employee.
                            </p>
                            <h5 className='EditEmployeeDepartmentH5'>* indicates required field</h5>



                            <div id='nameContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='EditEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            Name:

                                            <input
                                            className='EditEmployeeDepartmentFormInput'
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
                            {errorsName.name && <p className='EditEmployeeErrors'>{errorsName.name}</p>}






                            <div id='imageURLContainer' className='EditEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='EditEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='EditEmployeeDepartmentFormLabel'>
                                            ImageURL:
                                            <input
                                            className='EditEmployeeDepartmentFormInput'
                                            id="imageURL"
                                            name="imageURL"
                                            type="text"
                                            placeholder='ImageURL'
                                            value={imageURL}
                                            onChange={(e) => setImageURL(e.target.value)}
                                            required
                                            />
                                        </label>


                            </div>


                    </section>



                        <hr className='EditEmployeeHr'></hr>




{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='EditEmployeeDepartmentRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="EditEmployeeDepartmentButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Submit Edit
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default EditEmployeeDepartmentForm;
