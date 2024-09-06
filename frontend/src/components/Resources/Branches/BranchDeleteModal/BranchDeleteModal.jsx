import { useModal } from "../../../../context/Modal";
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as branchesActions from '../../../../redux/branchesReducer.js';
import "./BranchDeleteModal.css"



function BranchDeleteModal({branch}) {

    // console.log("branch: ", branch);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { closeModal } = useModal();


//  handlerDelete-------------------------------------------

    const handleDelete = (e) => {
        e.preventDefault();

        return dispatch(branchesActions.thunkDeleteBranch(branch))
            .then(() => {return dispatch(branchesActions.thunkGetBranchesAll())})
            .then(() => navigate('/branches'))
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
        <main id="BranchDeleteModalMain">

            <h1 id="BranchDeleteModalH1">Confirm Delete</h1>
            <p id="BranchDeleteModalP">Are you sure you want to remove this branch?</p>

            <div id="BranchDeleteModalButtonContainer">

                <button
                    id="YesBranchDeleteButton"
                    name="YesBranchDeleteButton"
                    type="button"
                    onClick={handleDelete}
                >{"Yes (Delete Branch)"}</button>


                <button
                    id="NoKeepBranchButton"
                    name="NoKeepBranchButton"
                    type="button"
                    onClick={handleKeep}
                >{"No (Keep Branch)"}</button>

            </div>

      </main>

    )
}

export default BranchDeleteModal;
