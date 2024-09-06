import { useModal } from "../../../../context/Modal";
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as academicDepartmentsActions from '../../../../redux/academicDepartmentsReducer.js';
import "./AcademicDepartmentDeleteModal.css"



function AcademicDepartmentDeleteModal({academicDepartment}) {

    console.log("Academic Department: ", academicDepartment);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { closeModal } = useModal();


//  handlerDelete-------------------------------------------

    const handleDelete = (e) => {
        e.preventDefault();

        return dispatch(academicDepartmentsActions.thunkDeleteAcademicDepartment(academicDepartment))
            .then(() => {return dispatch(academicDepartmentsActions.thunkGetAcademicDepartmentsAll())})
            .then(() => navigate('/academicDepartments'))
            .then(()=> closeModal())
    };


//  handlerKeep-------------------------------------------


    const handleKeep = (e) => {
        e.preventDefault();
        closeModal()
        return
    };



//  return-------------------------------------------
    return (
        <main id="AcademicDepartmentDeleteModalMain">

            <h1 id="AcademicDepartmentDeleteModalH1">Confirm Delete</h1>
            <p id="AcademicDepartmentDeleteModalP">Are you sure you want to remove this academicDepartment?</p>

            <div id="AcademicDepartmentDeleteModalButtonContainer">

                <button
                    id="YesAcademicDepartmentDeleteButton"
                    name="YesAcademicDepartmentDeleteButton"
                    type="button"
                    onClick={handleDelete}
                >{"Yes (Delete AcademicDepartment)"}</button>


                <button
                    id="NoKeepAcademicDepartmentButton"
                    name="NoKeepAcademicDepartmentButton"
                    type="button"
                    onClick={handleKeep}
                >{"No (Keep AcademicDepartment)"}</button>

            </div>

      </main>

    )
}

export default AcademicDepartmentDeleteModal;
