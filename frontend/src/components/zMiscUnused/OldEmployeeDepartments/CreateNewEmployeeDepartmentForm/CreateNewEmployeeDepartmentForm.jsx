import './CreateNewEmployeeDepartmentForm.css';
// const BASE_CLASS_NAME = "CreateNewEmployeeForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import * as employeeDepartmentsActions from '../../../../redux/employeeDepartmentsReducer.js';



function CreateNewEmployeeForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsName, setErrorsName] = useState({});
        // const [errorsImageURL, setErrorsImageURL] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});




        let newEmployeeDepartment = {
            name	            :	null	,
            imageURL            :	null	,
        }




// personal information form section 1----------------------------------------------------------



        const [name, setName] = useState("");
        const [imageURL, setImageURL] = useState("");


// HELPERS FOR CreateNewEmployee Button handler---------------------------------------------------



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
            // console.log('HANDLE SUBMIT NEW EMPLOYEE DEPARTMENT IS RUNNING');

        // -----------------CLIENT SIDE VALIDATIONS-----------------------//

            if(checkRequired()) {

                setRequiredFieldsMessage({message: "Required field must be complete - see errors above."});
                // console.log("HANDLE SUBMIT STOPPED DUE TO REQUIRED FIELD MISSING INFORMATION")
                return
            } else {
                setRequiredFieldsMessage({});
            }





         // ---------------REPLACING NEW EMPLOYEE DEPARTMENT OBJECT VALUES WITH USER INPUT IF EXISTS---------//



         if(name)	    newEmployeeDepartment	.	name	    =	name	    ;
         if(imageURL)	newEmployeeDepartment	.	imageURL	=	imageURL	;


        //  console.log("newEmployeeDepartment 448: ", newEmployeeDepartment)

         // --------------------------MAKING THE DISPATCH---------------------//
            let employeeDepartmentId;
            let newEmployeeDepartmentDetails;
            if(newEmployeeDepartmentDetails);

            await dispatch(employeeDepartmentsActions.thunkCreateEmployeeDepartment(newEmployeeDepartment))
            .then(response => {
                return response
            })
            .then(response => {
                employeeDepartmentId = response.payload[0].id;
                dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll());
                return employeeDepartmentId;
            }).catch(async (res) => {
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll()).then((response) => {
                dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentById(employeeDepartmentId));
                return response
            }).then(response => {
                dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll())
                return response
            }).then(response => {
                newEmployeeDepartmentDetails = response;
                navigate(`/employees/${employeeDepartmentId}`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE DEPARTMENT HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }




// return-----------------------------------
        return (
          <main id="CreateNewEmployeeDepartmentMain">

            <h1 id='CreateNewEmployeeDepartmentH1'>Create New Employee Department</h1>


                    <form id='CreateNewEmployeeDepartmentForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="CreateNewEmployeeDepartmentFormSection1">

                            <h4 id="CreateNewEmployeeDepartmentFormSection1H4">Information</h4>

                            <p id="CreateNewEmployeeDepartmentFormSection1P">
                                Enter information for new employee department.
                            </p>
                            <h5 className='CreateNewEmployeeDepartmentH5'>* indicates required field</h5>



                            <div id='nameContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <p className='CreateNewEmployeeDepartmentFormRequired'>{required}</p>
                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Name:

                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
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
                            {errorsName.name && <p className='CreateNewEmployeeDepartmentErrors'>{errorsName.name}</p>}


                            <div id='imageURLContainer' className='CreateNewEmployeeDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewEmployeeDepartmentFormLabel'>
                                            Image URL:
                                            <input
                                            className='CreateNewEmployeeDepartmentFormInput'
                                            id="imageURL"
                                            name="imageURL"
                                            type="text"
                                            placeholder='Image URL'
                                            value={imageURL}
                                            onChange={(e) => setImageURL(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.imageURL && <p className='CreateNewEmployeeDepartmentErrors'>{errors.imageURL}</p>}




                        </section>

                        <hr className='CreateNewEmployeeDepartmentHr'></hr>




{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='CreateNewEmployeeDepartmentRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="CreateNewEmployeeDepartmentButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Create Employee Department
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default CreateNewEmployeeForm;
