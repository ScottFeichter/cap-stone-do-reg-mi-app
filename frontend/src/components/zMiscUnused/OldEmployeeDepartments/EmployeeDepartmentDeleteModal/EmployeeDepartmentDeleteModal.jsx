import { useModal } from "../../../../context/Modal.jsx";
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as employeeDepartmentsActions from '../../../../redux/employeeDepartmentsReducer.js';
import "./EmployeeDepartmentDeleteModal.css"



function EmployeeDepartmentDeleteModal({employee}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { closeModal } = useModal();


//  handlerDelete-------------------------------------------

    const handleDelete = (e) => {
        e.preventDefault();

        return dispatch(employeeDepartmentsActions.thunkDeleteEmployeeDepartment(employee))
            .then(() => {return dispatch(employeeDepartmentsActions.thunkGetEmployeeDepartmentsAll())})
            .then(() => navigate('/employees'))
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
            <p id="EmployeeDepartmentDeleteModalP">Are you sure you want to remove this employee?</p>

            <div id="EmployeeDepartmentDeleteModalButtonContainer">

                <button
                    id="YesEmployeeDepartmentDeleteButton"
                    name="YesEmployeeDepartmentDeleteButton"
                    type="button"
                    onClick={handleDelete}
                >{"Yes (Delete Employee Department)"}</button>


                <button
                    id="NoKeepEmployeeDepartmentButton"
                    name="NoKeepEmployeeDepartmentButton"
                    type="button"
                    onClick={handleKeep}
                >{"No (Keep Employee Department)"}</button>

            </div>

      </main>

    )
}

export default EmployeeDepartmentDeleteModal;
