import { csrfFetch } from "./xCsrf";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const FACILITIES_SEARCH = "facility/search";
const FACILITIES_ALL = "facilities/all";
const FACILITY_BY_ID = "facility/facilityById";
const CREATE_FACILITY = "facility/createFacility";
const UPDATE_FACILITY = "facility/updateFacility";
const DELETE_FACILITY = "facility/deletedFacility";
const REMOVE_FACILITIES_DATA_FROM_STORE = "facility/removeFacilityDataFromStore";

/** ==============ACTION CREATORS:============================================*/

const facilitiesSearch = (facilities) => {
  // console.log('FACILITIES_SEARCH RAN - FACILITIES', facilities);
  return {
    type: FACILITIES_ALL,
    payload: facilities
  };
};

const facilitiesAll = (facilities) => {
  // console.log('FACILITIES ALL RAN - FACILITIES', facilities);
  return {
    type: FACILITIES_ALL,
    payload: facilities
  };
};


const facilityById = (facility) => {
  // console.log('FACILITY BY ID RAN - FACILITIES', facility);
  return {
    type: FACILITY_BY_ID,
    payload: facility
  };
};

const newCreatedFacility = (facility) => {
  // console.log('NEW CREATED FACILITY RAN - FACILITIES', facility);
  return {
    type: CREATE_FACILITY,
    payload: facility
  };
};

const updateFacility = (facility) => {
  // console.log('UPDATED FACILITY RAN - FACILITIES', facility);
  return {
    type: UPDATE_FACILITY,
    payload: facility
  };
};

const deletedFacility = (facility) => {
  // console.log('DELETED FACILITY RAN - FACILITIES', facility);
  return {
    type: DELETE_FACILITY,
    payload: facility
  };
};

const removeFacilitiesDataFromStore = () => {
  // console.log('REMOVE FACILITY DATA FROM STORE RAN - FACILITYES', facility);
  return {
    type: REMOVE_FACILITIES_DATA_FROM_STORE,
    payload: {}
  };
};


/** ==============THUNKS:=====================================================*/

/** SEARCH FACILITIES */
export const search = (/*search*/) => async (dispatch) => {

  const response = await csrfFetch("/api/facilities");
  const data = await response.json();
  const facilities = data.facilities;
  // console.log('THUNK SEARCH RAN DATA: ', facilities);

  return dispatch(facilitiesSearch(facilities))
};


/** GET FACILITIES */
export const thunkGetFacilitiesAll = () => async (dispatch) => {

  const response = await csrfFetch("/api/facilities");
  const data = await response.json();
  const facilities = data.facilities;
  // console.log('THUNK GET FACILITIES ALL RAN DATA: ', facilities);

  return dispatch(facilitiesAll(facilities))
};


/** GET DETAILS OF A FACILITY FROM AN ID */
export const thunkGetFacilityById = (facilityId) => async (dispatch) => {
  // console.log('FACILITYID FORM FACILITYDETAILS FACILITIES 89', facilityId)
  const response = await csrfFetch(`/api/facilities/${facilityId}`);
  const data = await response.json();
  // console.log('THUNK GET FACILITY BY ID RAN DATA: ', data );

  return dispatch(facilityById(data));
};


/** POST FACILITIES */
export const thunkCreateFacility = (newFacility) => async (dispatch) => {
  const response = await csrfFetch(`/api/facilities/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newFacility)
  });

  const data = await response.json();
  // console.log('THUNK CREATE FACILITY RAN DATA: ', data );

  return dispatch(newCreatedFacility(data));
};


/** PUT FACILITIES */
export const thunkEditFacility = (editedFacility) => async (dispatch) => {
  const { facilityId, updatedFacility } = editedFacility;
//  console.log('THUNK EDIT FACILITY FROM FACILITIES REDUCER RAN', updatedFacility);

  const response = await csrfFetch(`/api/facilities/${facilityId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedFacility)
  });

  const data = await response.json();
  // console.log('THUNK EDIT FACILITY RAN DATA: ', data );

  return dispatch(updateFacility(data));
};


/** DELETE FACILITIES */
export const thunkDeleteFacility = (facility) => async (dispatch) => {
  const facilityId = facility.id;
  const response = await csrfFetch(`/api/facilities/${facilityId}`, {
    method: "DELETE",
  });
  response
  // const data = await response.json();
  // console.log('THUNK DELETE FACILITY RAN: ', response );
  return dispatch(deletedFacility(facility));
};


/** REMOVE FACILITY DATA FROM STORE */
export const thunkRemoveFacilitiesDataFromStore = () => async (dispatch) => {
  return dispatch(removeFacilitiesDataFromStore());
};


/** ==============INITIAL STATE: =============================================*/

const initialFacilitiesState = {}

/** ==============REDUCER: ===================================================*/
const facilitiesReducer = (facilitiesState = initialFacilitiesState, action) => {
  // console.log('FACILITIES REDUCER RAN - STATE AND ACTION', state, action)

  switch (action.type) {

    case FACILITIES_SEARCH:
      // console.log("FACILITIESREDUCER RAN FACILITIES_SEARCH CASE RETURNING: ", {...state, facilities: action.payload})
      return {...facilitiesState, resultsFacilities: action.payload}

    case FACILITIES_ALL:
      // console.log("FACILITIESREDUCER RAN FACILITIES_CURRENT_USER CASE RETURNING: ", {...facilitiesState, facilitiesCurrentUser: action.payload})
      return {...facilitiesState, facilities: action.payload}

    case FACILITY_BY_ID:
      // console.log("FACILITIESREDUCER RAN FACILITY_BY_ID CASE RETURNING: ", {...facilitiesState, facility: action.payload})
      return {...facilitiesState, facilityDetail: action.payload};

    case CREATE_FACILITY:
      // console.log("FACILITIESREDUCER RAN CREATE_FACILITY CASE RETURNING: ")
      return {...facilitiesState, NewFacility: action.payload};

    case UPDATE_FACILITY:
      // console.log("FACILITIESREDUCER RAN UPDATE_FACILITY CASE RETURNING: ")
      return {...facilitiesState, EditedFacility: action.payload};

    case DELETE_FACILITY:
      // console.log("FACILITIESREDUCER RAN DELETE_FACILITY CASE RETURNING: ")
      return {...facilitiesState, DeletedFacility: action.payload};

    case REMOVE_FACILITIES_DATA_FROM_STORE:
      // console.log("FACILITYESREDUCER RAN REMOVE DATA FROM STORE CASE")
      return {};

    default:
      // console.log('FACILITIESREDUCER RAN DEFAULT')
      return facilitiesState;
  }
}

export default facilitiesReducer;
