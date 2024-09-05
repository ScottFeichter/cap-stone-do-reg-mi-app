import { csrfFetch } from "./xCsrf";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const USER_TYPES_SEARCH = "userType/search";
const USER_TYPES_ALL = "userTypes/all";
const USER_TYPE_BY_ID = "userType/userTypeById";
const CREATE_USER_TYPE = "userType/createUserType";
const UPDATE_USER_TYPE = "userType/updateUserType";
const DELETE_USER_TYPE = "userType/deletedUserType";
const REMOVE_USER_TYPE_DATA_FROM_STORE = "userType/removeUserTypeDataFromStore";

/** ==============ACTION CREATORS:============================================*/

const userTypesSearch = (userTypes) => {
  // console.log('USER_TYPES_SEARCH RAN - USER TYPES', userTypes);
  return {
    type: USER_TYPES_ALL,
    payload: userTypes
  };
};

const userTypesAll = (userTypes) => {
  // console.log('USER_TYPES ALL RAN - USER TYPES', userTypes);
  return {
    type: USER_TYPES_ALL,
    payload: userTypes
  };
};


const userTypeById = (userType) => {
  // console.log('USER_TYPE BY ID RAN - USER TYPES', userType);
  return {
    type: USER_TYPE_BY_ID,
    payload: userType
  };
};

const newCreatedUserType = (userType) => {
  // console.log('NEW CREATED USER_TYPE RAN - USER TYPES', userType);
  return {
    type: CREATE_USER_TYPE,
    payload: userType
  };
};

const updateUserType = (userType) => {
  // console.log('UPDATED USER_TYPE RAN - USER TYPES', userType);
  return {
    type: UPDATE_USER_TYPE,
    payload: userType
  };
};

const deletedUserType = (userType) => {
  // console.log('DELETED USER_TYPE RAN - USER TYPES', userType);
  return {
    type: DELETE_USER_TYPE,
    payload: userType
  };
};

const removeUserTypeDataFromStore = () => {
  // console.log('REMOVE USER TYPE DATA FROM STORE RAN - USER TYPEES', branch);
  return {
    type: REMOVE_USER_TYPE_DATA_FROM_STORE,
    payload: {}
  };
};


/** ==============THUNKS:=====================================================*/

/** SEARCH USER TYPES */
export const search = (/*search*/) => async (dispatch) => {

  const response = await csrfFetch("/api/userTypes");
  const data = await response.json();
  const userTypes = data.userTypes;
  // console.log('THUNK SEARCH RAN DATA: ', userTypes);

  return dispatch(userTypesSearch(userTypes))
};


/** GET USER TYPES */
export const thunkGetUserTypesAll = () => async (dispatch) => {

  const response = await csrfFetch("/api/userTypes");
  const data = await response.json();
  const userTypes = data.userTypes;
  // console.log('THUNK GET USER TYPES ALL RAN DATA: ', userTypes);

  return dispatch(userTypesAll(userTypes))
};


/** GET DETAILS OF A USER TYPE FROM AN ID */
export const thunkGetUserTypeById = (userTypeId) => async (dispatch) => {
  // console.log('USER_TYPEID FORM USER_TYPEDETAILS USER TYPES 89', userTypeId)
  const response = await csrfFetch(`/api/userTypes/${userTypeId}`);
  const data = await response.json();
  // console.log('THUNK GET USER TYPE BY ID RAN DATA: ', data );

  return dispatch(userTypeById(data));
};


/** POST USER TYPES */
export const thunkCreateUserType = (newUserType) => async (dispatch) => {
  const response = await csrfFetch(`/api/userTypes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUserType)
  });

  const data = await response.json();
  // console.log('THUNK CREATE USER TYPE RAN DATA: ', data );

  return dispatch(newCreatedUserType(data));
};


/** PUT USER TYPES */
export const thunkEditUserType = (editedUserType) => async (dispatch) => {
  const { userTypeId, updatedUserType } = editedUserType;
//  console.log('UPDATED USER TYPE FROM USER TYPES EDIT USER TYPE', updatedUserType);

  const response = await csrfFetch(`/api/userTypes/${userTypeId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedUserType)
  });

  const data = await response.json();
  // console.log('THUNK EDIT USER TYPE RAN DATA: ', data );

  return dispatch(updateUserType(data));
};


/** DELETE USER TYPES */
export const thunkDeleteUserType = (userType) => async (dispatch) => {
  const userTypeId = userType.id;
  const response = await csrfFetch(`/api/userTypes/${userTypeId}`, {
    method: "DELETE",
  });
  response
  // const data = await response.json();
  // console.log('THUNK DELET EEMPLOYEE DEPARTMENT RAN: ', response );
  return dispatch(deletedUserType(userType));
};


/** REMOVE USER TYPE DATA FROM STORE */
export const thunkRemoveUserTypeDataFromStore = () => async (dispatch) => {
  return dispatch(removeUserTypeDataFromStore());
};


/** ==============INITIAL STATE: =============================================*/

const initialUserTypesState = {}

/** ==============REDUCER: ===================================================*/
const userTypesReducer = (userTypesState = initialUserTypesState, action) => {
  // console.log('USER TYPES REDUCER RAN - STATE AND ACTION', state, action)

  switch (action.type) {

    case USER_TYPES_SEARCH:
      // console.log("USER_TYPESREDUCER RAN USER_TYPES_SEARCH CASE RETURNING: ", {...state, userTypes: action.payload})
      return {...userTypesState, resultsUserTypes: action.payload}

    case USER_TYPES_ALL:
      // console.log("USER_TYPESREDUCER RAN USER_TYPES_CURRENT_USER CASE RETURNING: ", {...userTypesState, userTypesCurrentUser: action.payload})
      return {...userTypesState, userTypes: action.payload}

    case USER_TYPE_BY_ID:
      // console.log("USER_TYPESREDUCER RAN USER_TYPE_BY_ID CASE RETURNING: ", {...userTypesState, userType: action.payload})
      return {...userTypesState, userTypeDetail: action.payload};

    case CREATE_USER_TYPE:
      // console.log("USER_TYPESREDUCER RAN CREATE_USER_TYPE CASE RETURNING: ")
      return {...userTypesState, NewUserType: action.payload};

    case UPDATE_USER_TYPE:
      // console.log("USER_TYPESREDUCER RAN UPDATE_USER_TYPE CASE RETURNING: ")
      return {...userTypesState, EditedUserType: action.payload};

    case DELETE_USER_TYPE:
      // console.log("USER_TYPESREDUCER RAN DELETE_USER_TYPE CASE RETURNING: ")
      return {...userTypesState, DeletedUserType: action.payload};

    case REMOVE_USER_TYPE_DATA_FROM_STORE:
      // console.log("USER _TYPESESREDUCER RAN REMOVE FROM STORE CASE")
      return {};

    default:
      // console.log('USER_TYPESREDUCER RAN DEFAULT')
      return userTypesState;
  }
}

export default userTypesReducer;
