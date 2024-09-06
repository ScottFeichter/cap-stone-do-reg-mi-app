import { useModal } from "../../../../context/Modal";
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as employeeDepartmentsActions from '../../../../redux/employeeDepartmentsReducer.js';
import "./EmployeeDepartmentDeleteModal.css"



function EmployeeDepartmentDeleteModal({employeeDepartment}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { closeModal } = useModal();


//  handlerDelete-------------------------------------------

    const handleDelete = (e) => {
        e.preventDefault();

        return dispatch(employeeDepartmentsActions.thunkDeleteEmployeeDepartment(employeeDepartment))
            .then(() => {return dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll())})
            .then(() => navigate('/employeeDepartments'))
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
        <main id="EmployeeDepartmentDeleteModalMain">

            <h1 id="EmployeeDepartmentDeleteModalH1">Confirm Delete</h1>
            <p id="EmployeeDepartmentDeleteModalP">Are you sure you want to remove this employeeDepartment?</p>

            <div id="EmployeeDepartmentDeleteModalButtonContainer">

                <button
                    id="YesEmployeeDepartmentDeleteButton"
                    name="YesEmployeeDepartmentDeleteButton"
                    type="button"
                    onClick={handleDelete}
                >{"Yes (Delete EmployeeDepartment)"}</button>


                <button
                    id="NoKeepEmployeeDepartmentButton"
                    name="NoKeepEmployeeDepartmentButton"
                    type="button"
                    onClick={handleKeep}
                >{"No (Keep EmployeeDepartment)"}</button>

            </div>

      </main>

    )
}

export default EmployeeDepartmentDeleteModal;
