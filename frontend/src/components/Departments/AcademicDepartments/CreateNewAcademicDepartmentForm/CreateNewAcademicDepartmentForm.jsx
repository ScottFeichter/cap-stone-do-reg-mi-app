import './CreateNewAcademicDepartmentForm.css';
// const BASE_CLASS_NAME = "CreateNewAcademicDepartmentForm"


import {useState } from 'react';
import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import * as academicDepartmentsActions from '../../../../redux/academicDepartmentsReducer.js';



function CreateNewAcademicDepartmentForm() {

        const required = "*";

        const dispatch = useDispatch();
        const navigate = useNavigate();

        const [errors, setErrors] = useState({});

        //-----required
        const [errorsName, setErrorsName] = useState({});
        const [requiredFieldsMessage, setRequiredFieldsMessage] = useState({});


        // const [isDisabled, setIsDisabled] = useState(false);


        let newAcademicDepartment = {
            name	                    :	null	,
            chair	                    :	null	,
            imageURL	                :	null	,
        }


        const [name, setName] = useState("");
        const [chair,setChair] = useState("")
        const [imageURL, setStreet] = useState("");



// HELPERS FOR CreateNewAcademicDepartment Button handler---------------------------------------------------

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



         if(name)       newAcademicDepartment	.	name	    =	name	    ;
         if(chair)	    newAcademicDepartment	.	chair	    =	chair	    ;
         if(imageURL)	newAcademicDepartment	.	imageURL	=	imageURL	;

        //  console.log("newAcademicDepartment 448: ", newAcademicDepartment)

         // --------------------------MAKING THE DISPATCH---------------------//
            let academicDepartmentId;
            let newAcademicDepartmentDetails;
            if(newAcademicDepartmentDetails);

            await dispatch(academicDepartmentsActions.thunkCreateAcademicDepartment(newAcademicDepartment))
            .then(response => {
                return response
            })
            .then(response => {
                academicDepartmentId = response.payload[0].id;
                dispatch(academicDepartmentsActions.thunkGetAcademicDepartmentsAll());
                return academicDepartmentId;
            }).catch(async (res) => {
                    const data = await res.json();
                    if (data.errors) setErrors(data.errors);
                    // console.log('CATCH DISPATCH RAN DATA:', data, 'DATA.ERRORS: ', data.errors, 'RES: ', res);
                }
            )

            await dispatch(academicDepartmentsActions.thunkGetAcademicDepartmentsAll()).then((response) => {
                dispatch(academicDepartmentsActions.thunkGetAcademicDepartmentById(academicDepartmentId));
                return response
            }).then(response => {
                dispatch(academicDepartmentsActions.thunkGetAcademicDepartmentsAll())
                return response
            }).then(response => {
                newAcademicDepartmentDetails = response;
                navigate(`/academicDepartments/${academicDepartmentId}`)
                return response
            });

            // console.log('HANDLE SUBMIT NEW EMPLOYEE HAS FINISHED RUNNING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        }




// return-----------------------------------
        return (
          <main id="CreateNewAcademicDepartmentMain">

            <h1 id='CreateNewAcademicDepartmentH1'>Create A New Academic Department</h1>


                    <form id='CreateNewAcademicDepartmentForm' onSubmit={handleSubmit}>

{/* form section 1---------------------------------------------------------- */}
                        <section id="CreateNewAcademicDepartmentFormSection1">

                            <h4 id="CreateNewAcademicDepartmentFormSection1H4">Information</h4>

                            <p id="CreateNewAcademicDepartmentFormSection1P">
                                Enter information for new academicDepartment.
                            </p>
                            <h5 className='CreateNewAcademicDepartmentH5'>* indicates required field</h5>



                            <div id='nameContainer' className='CreateNewAcademicDepartmentFormLabelInputContainer'>

                                        <p className='CreateNewAcademicDepartmentFormRequired'>{required}</p>
                                        <label className='CreateNewAcademicDepartmentFormLabel'>
                                            Name :

                                            <input
                                            className='CreateNewAcademicDepartmentFormInput'
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
                            {errorsName.name && <p className='CreateNewAcademicDepartmentErrors'>{errorsName.name}</p>}


                            <div id='chairContainer' className='EditAcademicDepartmentFormLabelInputContainer'>


                            <label className='EditAcademicDepartmentFormLabel'>
                                Chair:

                                <input
                                className='EditAcademicDepartmentFormInput'
                                id="chair"
                                name="chair"
                                type="text"
                                placeholder='Chair'
                                value={chair}
                                onChange={(e) => setChair(e.target.value)}
                                required
                                />
                            </label>

                            </div>
                            {errors.chair && <p className='EditAcademicDepartmentErrors'>{errors.chair}</p>}



                            <div id='ImageURLContainer' className='CreateNewAcademicDepartmentFormLabelInputContainer'>

                                        <label className='CreateNewAcademicDepartmentFormLabel'>
                                            ImageURL:
                                            <input
                                            className='CreateNewAcademicDepartmentFormInput'
                                            id="imageURL"
                                            name="imageURL"
                                            type="text"
                                            placeholder='ImageURL'
                                            value={imageURL}
                                            onChange={(e) => setStreet(e.target.value)}

                                            />
                                        </label>

                            </div>
                            {errors.imageURL && <p className='CreateNewAcademicDepartmentErrors'>{errors.imageURL}</p>}



                        </section>

                        <hr className='CreateNewAcademicDepartmentHr'></hr>

{/* form button---------------------------------------------------------- */}
                        {requiredFieldsMessage.message && <p className='CreateNewAcademicDepartmentRequiredErrors'>{requiredFieldsMessage.message}</p>}


                        <div id="buttonContainer">

                            <button
                                id="CreateNewAcademicDepartmentButton"
                                type="submit"
                                onClick={handleSubmit}
                                >Create Academic Department
                            </button>
                        </div>


                    </form>

          </main>

        )
    }



export default CreateNewAcademicDepartmentForm;
