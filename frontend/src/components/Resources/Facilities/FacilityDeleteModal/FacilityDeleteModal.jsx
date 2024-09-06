import { useModal } from "../../../../context/Modal";
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as facilitiesActions from '../../../../redux/facilitiesReducer.js';
import "./FacilityDeleteModal.css"



function FacilityDeleteModal({facility}) {

    console.log("facility: ", facility);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { closeModal } = useModal();


//  handlerDelete-------------------------------------------

    const handleDelete = (e) => {
        e.preventDefault();

        return dispatch(facilitiesActions.thunkDeleteFacility(facility))
            .then(() => {return dispatch(facilitiesActions.thunkGetFacilitiesAll())})
            .then(() => navigate('/resources'))
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
        <main id="FacilityDeleteModalMain">

            <h1 id="FacilityDeleteModalH1">Confirm Delete</h1>
            <p id="FacilityDeleteModalP">Are you sure you want to remove this facility?</p>

            <div id="FacilityDeleteModalButtonContainer">

                <button
                    id="YesFacilityDeleteButton"
                    name="YesFacilityDeleteButton"
                    type="button"
                    onClick={handleDelete}
                >{"Yes (Delete Facility)"}</button>


                <button
                    id="NoKeepFacilityButton"
                    name="NoKeepFacilityButton"
                    type="button"
                    onClick={handleKeep}
                >{"No (Keep Facility)"}</button>

            </div>

      </main>

    )
}

export default FacilityDeleteModal;
