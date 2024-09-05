import { csrfFetch } from "./xCsrf";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const HOUSEHOLDS_SEARCH = "household/search";
const HOUSEHOLDS_ALL = "households/all";
const HOUSEHOLD_BY_ID = "household/householdById";
const CREATE_HOUSEHOLD = "household/createHousehold";
const UPDATE_HOUSEHOLD = "household/updateHousehold";
const DELETE_HOUSEHOLD = "household/deletedHousehold";
const REMOVE_HOUSEHOLD_DATA_FROM_STORE = "household/removeHouseholdDataFromStore";

/** ==============ACTION CREATORS:============================================*/

const householdsSearch = (households) => {
  // console.log('HOUSEHOLDS_SEARCH RAN - HOUSEHOLDS', households);
  return {
    type: HOUSEHOLDS_ALL,
    payload: households
  };
};

const householdsAll = (households) => {
  // console.log('HOUSEHOLDS ALL RAN - HOUSEHOLDS', households);
  return {
    type: HOUSEHOLDS_ALL,
    payload: households
  };
};


const householdById = (household) => {
  // console.log('HOUSEHOLD BY ID RAN - HOUSEHOLDS', household);
  return {
    type: HOUSEHOLD_BY_ID,
    payload: household
  };
};

const newCreatedHousehold = (household) => {
  // console.log('NEW CREATED HOUSEHOLD RAN - HOUSEHOLDS', household);
  return {
    type: CREATE_HOUSEHOLD,
    payload: household
  };
};

const updateHousehold = (household) => {
  // console.log('UPDATED HOUSEHOLD RAN - HOUSEHOLDS', household);
  return {
    type: UPDATE_HOUSEHOLD,
    payload: household
  };
};

const deletedHousehold = (household) => {
  // console.log('DELETED HOUSEHOLD RAN - HOUSEHOLDS', household);
  return {
    type: DELETE_HOUSEHOLD,
    payload: household
  };
};

const removeHouseholdDataFromStore = () => {
  // console.log('REMOVE HOUSEHOLD DATA FROM STORE RAN);
  return {
    type: REMOVE_HOUSEHOLD_DATA_FROM_STORE,
    payload: {}
  };
};


/** ==============THUNKS:=====================================================*/

/** SEARCH HOUSEHOLDS */
export const search = (/*search*/) => async (dispatch) => {

  const response = await csrfFetch("/api/households");
  const data = await response.json();
  const households = data.households;
  // console.log('THUNK SEARCH RAN DATA: ', households);

  return dispatch(householdsSearch(households))
};


/** GET HOUSEHOLDS */
export const thunkGetHouseholdsAll = () => async (dispatch) => {

  const response = await csrfFetch("/api/households");
  const data = await response.json();
  const households = data.households;
  // console.log('THUNK GET HOUSEHOLDS ALL RAN DATA: ', households);

  return dispatch(householdsAll(households))
};


/** GET DETAILS OF A HOUSEHOLD FROM AN ID */
export const thunkGetHouseholdById = (householdId) => async (dispatch) => {
  // console.log('HOUSEHOLDID FORM HOUSEHOLDDETAILS HOUSEHOLDS 89', householdId)
  const response = await csrfFetch(`/api/households/${householdId}`);
  const data = await response.json();
  // console.log('THUNK GET HOUSEHOLD BY ID RAN DATA: ', data );

  return dispatch(householdById(data));
};


/** POST HOUSEHOLDS */
export const thunkCreateHousehold = (newHousehold) => async (dispatch) => {
  const response = await csrfFetch(`/api/households/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newHousehold)
  });

  const data = await response.json();
  // console.log('THUNK CREATE HOUSEHOLD RAN DATA: ', data );

  return dispatch(newCreatedHousehold(data));
};


/** PUT HOUSEHOLDS */
export const thunkEditHousehold = (editedHousehold) => async (dispatch) => {
  const { householdId, updatedHousehold } = editedHousehold;
//  console.log('UPDATED HOUSEHOLD FROM HOUSEHOLDS EDIT HOUSEHOLD', updatedHousehold);

  const response = await csrfFetch(`/api/households/${householdId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedHousehold)
  });

  const data = await response.json();
  // console.log('THUNK EDIT HOUSEHOLD RAN DATA: ', data );

  return dispatch(updateHousehold(data));
};


/** DELETE HOUSEHOLDS */
export const thunkDeleteHousehold = (household) => async (dispatch) => {
  const householdId = household.id;
  const response = await csrfFetch(`/api/households/${householdId}`, {
    method: "DELETE",
  });
  response
  // const data = await response.json();
  // console.log('THUNK DELET EEMPLOYEE DEPARTMENT RAN: ', response );
  return dispatch(deletedHousehold(household));
};


/** REMOVE HOUSEHOLD DATA FROM STORE */
export const thunkRemoveHouseholdDataFromStore = () => async (dispatch) => {
  return dispatch(removeHouseholdDataFromStore());
};

/** ==============INITIAL STATE: =============================================*/

const initialHouseholdsState = {}

/** ==============REDUCER: ===================================================*/
const householdsReducer = (householdsState = initialHouseholdsState, action) => {
  // console.log('HOUSEHOLDS REDUCER RAN - STATE AND ACTION', state, action)

  switch (action.type) {

    case HOUSEHOLDS_SEARCH:
      // console.log("HOUSEHOLDSREDUCER RAN HOUSEHOLDS_SEARCH CASE RETURNING: ", {...state, households: action.payload})
      return {...householdsState, resultsHouseholds: action.payload}

    case HOUSEHOLDS_ALL:
      // console.log("HOUSEHOLDSREDUCER RAN HOUSEHOLDS_CURRENT_USER CASE RETURNING: ", {...householdsState, householdsCurrentUser: action.payload})
      return {...householdsState, households: action.payload}

    case HOUSEHOLD_BY_ID:
      // console.log("HOUSEHOLDSREDUCER RAN HOUSEHOLD_BY_ID CASE RETURNING: ", {...householdsState, household: action.payload})
      return {...householdsState, householdDetail: action.payload};

    case CREATE_HOUSEHOLD:
      // console.log("HOUSEHOLDSREDUCER RAN CREATE_HOUSEHOLD CASE RETURNING: ")
      return {...householdsState, NewHousehold: action.payload};

    case UPDATE_HOUSEHOLD:
      // console.log("HOUSEHOLDSREDUCER RAN UPDATE_HOUSEHOLD CASE RETURNING: ")
      return {...householdsState, EditedHousehold: action.payload};

    case DELETE_HOUSEHOLD:
      // console.log("HOUSEHOLDSREDUCER RAN DELETE_HOUSEHOLD CASE RETURNING: ")
      return {...householdsState, DeletedHousehold: action.payload};

    case REMOVE_HOUSEHOLD_DATA_FROM_STORE:
      // console.log("HOUSEHOLDESREDUCER RAN REMOVE FROM STORE CASE")
      return {};

    default:
      // console.log('HOUSEHOLDSREDUCER RAN DEFAULT')
      return householdsState;
  }
}

export default householdsReducer;
