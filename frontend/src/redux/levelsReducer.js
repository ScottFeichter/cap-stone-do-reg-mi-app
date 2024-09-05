import { csrfFetch } from "./xCsrf";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const LEVELS_SEARCH = "level/search";
const LEVELS_ALL = "levels/all";
const LEVEL_BY_ID = "level/levelById";
const CREATE_LEVEL = "level/createLevel";
const UPDATE_LEVEL = "level/updateLevel";
const DELETE_LEVEL = "level/deletedLevel";
const REMOVE_LEVEL_DATA_FROM_STORE = "level/removeLevelDataFromStore";

/** ==============ACTION CREATORS:============================================*/

const levelsSearch = (levels) => {
  // console.log('LEVELS_SEARCH RAN - LEVELS', levels);
  return {
    type: LEVELS_ALL,
    payload: levels
  };
};

const levelsAll = (levels) => {
  // console.log('LEVELS ALL RAN - LEVELS', levels);
  return {
    type: LEVELS_ALL,
    payload: levels
  };
};


const levelById = (level) => {
  // console.log('LEVEL BY ID RAN - LEVELS', level);
  return {
    type: LEVEL_BY_ID,
    payload: level
  };
};

const newCreatedLevel = (level) => {
  // console.log('NEW CREATED LEVEL RAN - LEVELS', level);
  return {
    type: CREATE_LEVEL,
    payload: level
  };
};

const updateLevel = (level) => {
  // console.log('UPDATED LEVEL RAN - LEVELS', level);
  return {
    type: UPDATE_LEVEL,
    payload: level
  };
};

const deletedLevel = (level) => {
  // console.log('DELETED LEVEL RAN - LEVELS', level);
  return {
    type: DELETE_LEVEL,
    payload: level
  };
};

const removeLevelDataFromStore = () => {
  // console.log('REMOVE LEVEL DATA FROM STORE RAN - LEVELES', branch);
  return {
    type: REMOVE_LEVEL_DATA_FROM_STORE,
    payload: {}
  };
};


/** ==============THUNKS:=====================================================*/

/** SEARCH LEVELS */
export const search = (/*search*/) => async (dispatch) => {

  const response = await csrfFetch("/api/levels");
  const data = await response.json();
  const levels = data.levels;
  // console.log('THUNK SEARCH RAN DATA: ', levels);

  return dispatch(levelsSearch(levels))
};


/** GET LEVELS */
export const thunkGetLevelsAll = () => async (dispatch) => {

  const response = await csrfFetch("/api/levels");
  const data = await response.json();
  const levels = data.levels;
  // console.log('THUNK GET LEVELS ALL RAN DATA: ', levels);

  return dispatch(levelsAll(levels))
};


/** GET DETAILS OF A LEVEL FROM AN ID */
export const thunkGetLevelById = (levelId) => async (dispatch) => {
  // console.log('LEVELID FORM LEVELDETAILS LEVELS 89', levelId)
  const response = await csrfFetch(`/api/levels/${levelId}`);
  const data = await response.json();
  // console.log('THUNK GET LEVEL BY ID RAN DATA: ', data );

  return dispatch(levelById(data));
};


/** POST LEVELS */
export const thunkCreateLevel = (newLevel) => async (dispatch) => {
  const response = await csrfFetch(`/api/levels/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newLevel)
  });

  const data = await response.json();
  // console.log('THUNK CREATE LEVEL RAN DATA: ', data );

  return dispatch(newCreatedLevel(data));
};


/** PUT LEVELS */
export const thunkEditLevel = (editedLevel) => async (dispatch) => {
  const { levelId, updatedLevel } = editedLevel;
//  console.log('UPDATED LEVEL FROM LEVELS EDIT LEVEL', updatedLevel);

  const response = await csrfFetch(`/api/levels/${levelId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedLevel)
  });

  const data = await response.json();
  // console.log('THUNK EDIT LEVEL RAN DATA: ', data );

  return dispatch(updateLevel(data));
};


/** DELETE LEVELS */
export const thunkDeleteLevel = (level) => async (dispatch) => {
  const levelId = level.id;
  const response = await csrfFetch(`/api/levels/${levelId}`, {
    method: "DELETE",
  });
  response
  // const data = await response.json();
  // console.log('THUNK DELET EEMPLOYEE DEPARTMENT RAN: ', response );
  return dispatch(deletedLevel(level));
};


/** REMOVE LEVEL DATA FROM STORE */
export const thunkRemoveLevelDataFromStore = () => async (dispatch) => {
  return dispatch(removeLevelDataFromStore());
};


/** ==============INITIAL STATE: =============================================*/

const initialLevelsState = {}

/** ==============REDUCER: ===================================================*/
const levelsReducer = (levelsState = initialLevelsState, action) => {
  // console.log('LEVELS REDUCER RAN - STATE AND ACTION', state, action)

  switch (action.type) {

    case LEVELS_SEARCH:
      // console.log("LEVELSREDUCER RAN LEVELS_SEARCH CASE RETURNING: ", {...state, levels: action.payload})
      return {...levelsState, resultsLevels: action.payload}

    case LEVELS_ALL:
      // console.log("LEVELSREDUCER RAN LEVELS_CURRENT_USER CASE RETURNING: ", {...levelsState, levelsCurrentUser: action.payload})
      return {...levelsState, levels: action.payload}

    case LEVEL_BY_ID:
      // console.log("LEVELSREDUCER RAN LEVEL_BY_ID CASE RETURNING: ", {...levelsState, level: action.payload})
      return {...levelsState, levelDetail: action.payload};

    case CREATE_LEVEL:
      // console.log("LEVELSREDUCER RAN CREATE_LEVEL CASE RETURNING: ")
      return {...levelsState, NewLevel: action.payload};

    case UPDATE_LEVEL:
      // console.log("LEVELSREDUCER RAN UPDATE_LEVEL CASE RETURNING: ")
      return {...levelsState, EditedLevel: action.payload};

    case DELETE_LEVEL:
      // console.log("LEVELSREDUCER RAN DELETE_LEVEL CASE RETURNING: ")
      return {...levelsState, DeletedLevel: action.payload};

    case REMOVE_LEVEL_DATA_FROM_STORE:
      // console.log("USER _TYPESESREDUCER RAN REMOVE FROM STORE CASE")
      return {};

    default:
      // console.log('LEVELSREDUCER RAN DEFAULT')
      return levelsState;
  }
}

export default levelsReducer;
