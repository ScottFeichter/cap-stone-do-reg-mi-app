import { csrfFetch } from "./xCsrf";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const ACADEMIC_DEPARTMENTS_SEARCH = "academicDepartment/search";
const ACADEMIC_DEPARTMENTS_ALL = "academicDepartments/all";
const ACADEMIC_DEPARTMENT_BY_ID = "academicDepartment/academicDepartmentById";
const CREATE_ACADEMIC_DEPARTMENT = "academicDepartment/createAcademicDepartment";
const UPDATE_ACADEMIC_DEPARTMENT = "academicDepartment/updateAcademicDepartment";
const DELETE_ACADEMIC_DEPARTMENT = "academicDepartment/deletedAcademicDepartment";
const REMOVE_ACADEMIC_DEPARTMENTS_DATA_FROM_STORE = "academicDepartments/removeAcademicDepartmentsDataFromStore";

/** ==============ACTION CREATORS:============================================*/

const academicDepartmentsSearch = (academicDepartments) => {
  // console.log('ACADEMIC_DEPARTMENTS_SEARCH RAN - ACADEMIC DEPARTMENTS', academicDepartments);
  return {
    type: ACADEMIC_DEPARTMENTS_ALL,
    payload: academicDepartments
  };
};

const academicDepartmentsAll = (academicDepartments) => {
  // console.log('ACADEMIC_DEPARTMENTS ALL RAN - ACADEMIC DEPARTMENTS', academicDepartments);
  return {
    type: ACADEMIC_DEPARTMENTS_ALL,
    payload: academicDepartments
  };
};


const academicDepartmentById = (academicDepartment) => {
  // console.log('ACADEMIC_DEPARTMENT BY ID RAN - ACADEMIC DEPARTMENTS', academicDepartment);
  return {
    type: ACADEMIC_DEPARTMENT_BY_ID,
    payload: academicDepartment
  };
};

const newCreatedAcademicDepartment = (academicDepartment) => {
  // console.log('NEW CREATED ACADEMIC_DEPARTMENT RAN - ACADEMIC DEPARTMENTS', academicDepartment);
  return {
    type: CREATE_ACADEMIC_DEPARTMENT,
    payload: academicDepartment
  };
};

const updateAcademicDepartment = (academicDepartment) => {
  // console.log('UPDATED ACADEMIC_DEPARTMENT RAN - ACADEMIC DEPARTMENTS', academicDepartment);
  return {
    type: UPDATE_ACADEMIC_DEPARTMENT,
    payload: academicDepartment
  };
};

const deletedAcademicDepartment = (academicDepartment) => {
  // console.log('DELETED ACADEMIC_DEPARTMENT RAN - ACADEMIC DEPARTMENTS', academicDepartment);
  return {
    type: DELETE_ACADEMIC_DEPARTMENT,
    payload: academicDepartment
  };
};


const removeAcademicDepartmentsDataFromStore = () => {
  // console.log('REMOVE ACADEMIC DEPARTMENTS DATA FROM STORE RAN');
  return {
    type: REMOVE_ACADEMIC_DEPARTMENTS_DATA_FROM_STORE,
    payload: {}
  };
};


/** ==============THUNKS:=====================================================*/

/** SEARCH ACADEMIC DEPARTMENTS */
export const search = (/*search*/) => async (dispatch) => {

  const response = await csrfFetch("/api/academicDepartments");
  const data = await response.json();
  const academicDepartments = data.academicDepartments;
  // console.log('THUNK SEARCH RAN DATA: ', academicDepartments);

  return dispatch(academicDepartmentsSearch(academicDepartments))
};


/** GET ACADEMIC DEPARTMENTS */
export const thunkGetAcademicDepartmentsAll = () => async (dispatch) => {

  const response = await csrfFetch("/api/academicDepartments");
  const data = await response.json();
  const academicDepartments = data.academicDepartments;
  // console.log('THUNK GET ACADEMIC DEPARTMENTS ALL RAN DATA: ', academicDepartments);

  return dispatch(academicDepartmentsAll(academicDepartments))
};


/** GET DETAILS OF A ACADEMIC DEPARTMENT FROM AN ID */
export const thunkGetAcademicDepartmentById = (academicDepartmentId) => async (dispatch) => {
  // console.log('ACADEMIC_DEPARTMENTID FORM ACADEMIC_DEPARTMENTDETAILS ACADEMIC DEPARTMENTS 89', academicDepartmentId)
  const response = await csrfFetch(`/api/academicDepartments/${academicDepartmentId}`);
  const data = await response.json();
  // console.log('THUNK GETACADEMIC_DEPARTMENTBYID RAN DATA: ', data );

  return dispatch(academicDepartmentById(data));
};


/** POST ACADEMIC DEPARTMENTS */
export const thunkCreateAcademicDepartment = (newAcademicDepartment) => async (dispatch) => {
  const response = await csrfFetch(`/api/academicDepartments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newAcademicDepartment)
  });

  const data = await response.json();
  // console.log('THUNK CREATE ACADEMIC_DEPARTMENT RAN DATA: ', data );

  return dispatch(newCreatedAcademicDepartment(data));
};


/** PUT ACADEMIC DEPARTMENTS */
export const thunkEditAcademicDepartment = (editedAcademicDepartment) => async (dispatch) => {
  const { academicDepartmentId, updatedAcademicDepartment } = editedAcademicDepartment;
//  console.log('UPDATED ACADEMIC DEPARTMENT FROM ACADEMIC DEPARTMENTS EDIT ACADEMIC DEPARTMENT', updatedAcademicDepartment);

  const response = await csrfFetch(`/api/academicDepartments/${academicDepartmentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedAcademicDepartment)
  });

  const data = await response.json();
  // console.log('THUNK EDIT ACADEMIC DEPARTMENT RAN DATA: ', data );

  return dispatch(updateAcademicDepartment(data));
};


/** DELETE ACADEMIC DEPARTMENTS */
export const thunkDeleteAcademicDepartment = (academicDepartment) => async (dispatch) => {
  const academicDepartmentId = academicDepartment.id;
  const response = await csrfFetch(`/api/academicDepartments/${academicDepartmentId}`, {
    method: "DELETE",
  });
  response
  // const data = await response.json();
  // console.log('THUNK DELET EEMPLOYEE DEPARTMENT RAN: ', response );
  return dispatch(deletedAcademicDepartment(academicDepartment));
};


/** REMOVE ACADEMIC DEPARTMENTS DATA FROM STORE */
export const thunkRemoveAcademicDepartmentsDataFromStore = () => async (dispatch) => {
  return dispatch(removeAcademicDepartmentsDataFromStore());
};

/** ==============INITIAL STATE: =============================================*/
const initialAcademicDepartmentsState = {}

/** ==============REDUCER: ===================================================*/
const academicDepartmentsReducer = (academicDepartmentsState = initialAcademicDepartmentsState, action) => {
  // console.log('ACADEMIC DEPARTMENTS REDUCER RAN - STATE AND ACTION', state, action)

  switch (action.type) {

    case ACADEMIC_DEPARTMENTS_SEARCH:
      // console.log("ACADEMIC_DEPARTMENTSREDUCER RAN ACADEMIC_DEPARTMENTS_SEARCH CASE RETURNING: ", {...state, academicDepartments: action.payload})
      return {...academicDepartmentsState, allAcademicDepartments: action.payload}

    case ACADEMIC_DEPARTMENTS_ALL:
      // console.log("ACADEMIC_DEPARTMENTSREDUCER RAN ACADEMIC_DEPARTMENTS_CURRENT_USER CASE RETURNING: ", {...academicDepartmentsState, academicDepartmentsCurrentUser: action.payload})
      return {...academicDepartmentsState, academicDepartments: action.payload}

    case ACADEMIC_DEPARTMENT_BY_ID:
      // console.log("ACADEMIC_DEPARTMENTSREDUCER RAN ACADEMIC_DEPARTMENT_BY_ID CASE RETURNING: ", {...academicDepartmentsState, academicDepartment: action.payload})
      return {...academicDepartmentsState, academicDepartmentDetail: action.payload};

    case CREATE_ACADEMIC_DEPARTMENT:
      // console.log("ACADEMIC_DEPARTMENTSREDUCER RAN CREATE_ACADEMIC_DEPARTMENT CASE RETURNING: ")
      return {...academicDepartmentsState, NewAcademicDepartment: action.payload};

    case UPDATE_ACADEMIC_DEPARTMENT:
      // console.log("ACADEMIC_DEPARTMENTSREDUCER RAN UPDATE_ACADEMIC_DEPARTMENT CASE RETURNING: ")
      return {...academicDepartmentsState, EditedAcademicDepartment: action.payload};

    case DELETE_ACADEMIC_DEPARTMENT:
      // console.log("ACADEMIC_DEPARTMENTSREDUCER RAN DELETE_ACADEMIC_DEPARTMENT CASE RETURNING: ")
      return {...academicDepartmentsState, DeletedAcademicDepartment: action.payload};

    case REMOVE_ACADEMIC_DEPARTMENTS_DATA_FROM_STORE:
      // console.log("ACADEMIC_DEPARTMENTSREDUCER RAN REMOVE FROM STORE CASE")
      return {};

    default:
      // console.log('ACADEMIC_DEPARTMENTSREDUCER RAN DEFAULT')
      return academicDepartmentsState;
  }
}

export default academicDepartmentsReducer;
