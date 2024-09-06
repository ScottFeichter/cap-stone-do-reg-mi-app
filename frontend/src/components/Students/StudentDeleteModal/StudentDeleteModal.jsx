import { useModal } from "../../../context/Modal";
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as studentsActions from '../../../redux/studentsReducer.js';
import "./StudentDeleteModal.css"



function StudentDeleteModal({student}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { closeModal } = useModal();


//  handlerDelete-------------------------------------------

    const handleDelete = (e) => {
        e.preventDefault();

        return dispatch(studentsActions.thunkDeleteStudent(student))
            .then(() => {return dispatch(studentsActions.thunkGetStudentsAll())})
            .then(() => navigate('/students'))
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
        <main id="StudentDeleteModalMain">

            <h1 id="StudentDeleteModalH1">Confirm Delete</h1>
            <p id="StudentDeleteModalP">Are you sure you want to remove this student?</p>

            <div id="StudentDeleteModalButtonContainer">

                <button
                    id="YesStudentDeleteButton"
                    name="YesStudentDeleteButton"
                    type="button"
                    onClick={handleDelete}
                >{"Yes (Delete Student)"}</button>


                <button
                    id="NoKeepStudentButton"
                    name="NoKeepStudentButton"
                    type="button"
                    onClick={handleKeep}
                >{"No (Keep Student)"}</button>

            </div>

      </main>

    )
}

export default StudentDeleteModal;
