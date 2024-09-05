import { csrfFetch } from "./xCsrf";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const EMPLOYEE_DEPARTMENTS_SEARCH = "employeeDepartment/search";
const EMPLOYEE_DEPARTMENTS_ALL = "employeeDepartments/all";
const EMPLOYEE_DEPARTMENT_BY_ID = "employeeDepartment/employeeDepartmentById";
const CREATE_EMPLOYEE_DEPARTMENT = "employeeDepartment/createEmployeeDepartment";
const UPDATE_EMPLOYEE_DEPARTMENT = "employeeDepartment/updateEmployeeDepartment";
const DELETE_EMPLOYEE_DEPARTMENT = "employeeDepartment/deletedEmployeeDepartment";
const REMOVE_EMPLOYEE_DEPARMENTS_DATA_FROM_STORE = "employeeDepartments/removeEmployeeDepartmentsDataFromStore";

/** ==============ACTION CREATORS:============================================*/

const employeeDepartmentsSearch = (employeeDepartments) => {
  // console.log('EMPLOYEE_DEPARTMENTS_SEARCH RAN - EMPLOYEE DEPARTMENTS', employeeDepartments);
  return {
    type: EMPLOYEE_DEPARTMENTS_ALL,
    payload: employeeDepartments
  };
};

const employeeDepartmentsAll = (employeeDepartments) => {
  // console.log('EMPLOYEE_DEPARTMENTS ALL RAN - EMPLOYEE DEPARTMENTS', employeeDepartments);
  return {
    type: EMPLOYEE_DEPARTMENTS_ALL,
    payload: employeeDepartments
  };
};


const employeeDepartmentById = (employeeDepartment) => {
  // console.log('EMPLOYEE_DEPARTMENT BY ID RAN - EMPLOYEE DEPARTMENTS', employeeDepartment);
  return {
    type: EMPLOYEE_DEPARTMENT_BY_ID,
    payload: employeeDepartment
  };
};

const newCreatedEmployeeDepartment = (employeeDepartment) => {
  // console.log('NEW CREATED EMPLOYEE_DEPARTMENT RAN - EMPLOYEE DEPARTMENTS', employeeDepartment);
  return {
    type: CREATE_EMPLOYEE_DEPARTMENT,
    payload: employeeDepartment
  };
};

const updateEmployeeDepartment = (employeeDepartment) => {
  // console.log('UPDATED EMPLOYEE_DEPARTMENT RAN - EMPLOYEE DEPARTMENTS', employeeDepartment);
  return {
    type: UPDATE_EMPLOYEE_DEPARTMENT,
    payload: employeeDepartment
  };
};

const deletedEmployeeDepartment = (employeeDepartment) => {
  // console.log('DELETED EMPLOYEE_DEPARTMENT RAN - EMPLOYEE DEPARTMENTS', employeeDepartment);
  return {
    type: DELETE_EMPLOYEE_DEPARTMENT,
    payload: employeeDepartment
  };
};

const removeEmployeeDepartmentsDataFromStore = () => {
  // console.log('REMOVE EMPLOYEE DEPARTMENT DATA FROM STORE RAN');
  return {
    type: REMOVE_EMPLOYEE_DEPARMENTS_DATA_FROM_STORE,
    payload: {}
  };
};


/** ==============THUNKS:=====================================================*/

/** SEARCH EMPLOYEE DEPARTMENTS */
export const search = (/*search*/) => async (dispatch) => {

  const response = await csrfFetch("/api/employeeDepartments");
  const data = await response.json();
  const employeeDepartments = data.employeeDepartments;
  // console.log('THUNK SEARCH RAN DATA: ', employeeDepartments);

  return dispatch(employeeDepartmentsSearch(employeeDepartments))
};


/** GET EMPLOYEE DEPARTMENTS */
export const thunkGetEmployeeDepartmentsAll = () => async (dispatch) => {

  const response = await csrfFetch("/api/employeeDepartments");
  const data = await response.json();
  const employeeDepartments = data.employeeDepartments;
  // console.log('THUNK GET EMPLOYEE DEPARTMENTS ALL RAN DATA: ', employeeDepartments);

  return dispatch(employeeDepartmentsAll(employeeDepartments))
};


/** GET DETAILS OF A EMPLOYEE DEPARTMENT FROM AN ID */
export const thunkGetEmployeeDepartmentById = (employeeDepartmentId) => async (dispatch) => {
  // console.log('EMPLOYEE_DEPARTMENTID FORM EMPLOYEE_DEPARTMENTDETAILS EMPLOYEE DEPARTMENTS 89', employeeDepartmentId)
  const response = await csrfFetch(`/api/employeeDepartments/${employeeDepartmentId}`);
  const data = await response.json();
  // console.log('THUNK GETEMPLOYEE_DEPARTMENTBYID RAN DATA: ', data );

  return dispatch(employeeDepartmentById(data));
};


/** POST EMPLOYEE DEPARTMENTS */
export const thunkCreateEmployeeDepartment = (newEmployeeDepartment) => async (dispatch) => {
  const response = await csrfFetch(`/api/employeeDepartments/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newEmployeeDepartment)
  });

  const data = await response.json();
  // console.log('THUNK CREATE EMPLOYEE_DEPARTMENT RAN DATA: ', data );

  return dispatch(newCreatedEmployeeDepartment(data));
};


/** PUT EMPLOYEE DEPARTMENTS */
export const thunkEditEmployeeDepartment = (editedEmployeeDepartment) => async (dispatch) => {
  const { id } = editedEmployeeDepartment;
//  console.log('UPDATED EMPLOYEE DEPARTMENT FROM EMPLOYEE DEPARTMENTS EDIT EMPLOYEE DEPARTMENT', updatedEmployeeDepartment);

// console.log("editedEmployee Department from reducer:", editedEmployeeDepartment, id)

  const response = await csrfFetch(`/api/employeeDepartments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedEmployeeDepartment)
  });

  const data = await response.json();
  // console.log('THUNK EDIT EMPLOYEE DEPARTMENT RAN DATA: ', data );

  return dispatch(updateEmployeeDepartment(data));
};


/** DELETE EMPLOYEE DEPARTMENTS */
export const thunkDeleteEmployeeDepartment = (employeeDepartment) => async (dispatch) => {
  const employeeDepartmentId = employeeDepartment.id;
  const response = await csrfFetch(`/api/employeeDepartments/${employeeDepartmentId}`, {
    method: "DELETE",
  });
  response
  // const data = await response.json();
  // console.log('THUNK DELET EEMPLOYEE DEPARTMENT RAN: ', response );
  return dispatch(deletedEmployeeDepartment(employeeDepartment));
};


/** REMOVE EMPLOYEE DEPARTMENTS DATA FROM STORE */
export const thunkRemoveEmployeeDepartmentsDataFromStore = () => async (dispatch) => {
  return dispatch(removeEmployeeDepartmentsDataFromStore());
};


/** ==============INITIAL STATE: =============================================*/

const initialEmployeeDepartmentsState = {}

/** ==============REDUCER: ===================================================*/
const employeeDepartmentsReducer = (employeeDepartmentsState = initialEmployeeDepartmentsState, action) => {
  // console.log('EMPLOYEE DEPARTMENTS REDUCER RAN - STATE AND ACTION', state, action)

  switch (action.type) {

    case EMPLOYEE_DEPARTMENTS_SEARCH:
      // console.log("EMPLOYEE_DEPARTMENTSREDUCER RAN EMPLOYEE_DEPARTMENTS_SEARCH CASE RETURNING: ", {...state, employeeDepartments: action.payload})
      return {...employeeDepartmentsState, allEmployeeDepartments: action.payload}

    case EMPLOYEE_DEPARTMENTS_ALL:
      // console.log("EMPLOYEE_DEPARTMENTSREDUCER RAN EMPLOYEE_DEPARTMENTS_CURRENT_USER CASE RETURNING: ", {...employeeDepartmentsState, employeeDepartmentsCurrentUser: action.payload})
      return {...employeeDepartmentsState, employeeDepartments: action.payload}

    case EMPLOYEE_DEPARTMENT_BY_ID:
      // console.log("EMPLOYEE_DEPARTMENTSREDUCER RAN EMPLOYEE_DEPARTMENT_BY_ID CASE RETURNING: ", {...employeeDepartmentsState, employeeDepartment: action.payload})
      return {...employeeDepartmentsState, employeeDepartmentDetail: action.payload};

    case CREATE_EMPLOYEE_DEPARTMENT:
      // console.log("EMPLOYEE_DEPARTMENTSREDUCER RAN CREATE_EMPLOYEE_DEPARTMENT CASE RETURNING: ")
      return {...employeeDepartmentsState, NewEmployeeDepartment: action.payload};

    case UPDATE_EMPLOYEE_DEPARTMENT:
      // console.log("EMPLOYEE_DEPARTMENTSREDUCER RAN UPDATE_EMPLOYEE_DEPARTMENT CASE RETURNING: ")
      return {...employeeDepartmentsState, EditedEmployeeDepartment: action.payload};

    case DELETE_EMPLOYEE_DEPARTMENT:
      // console.log("EMPLOYEE_DEPARTMENTSREDUCER RAN DELETE_EMPLOYEE_DEPARTMENT CASE RETURNING: ")
      return {...employeeDepartmentsState, DeletedEmployeeDepartment: action.payload};

    case REMOVE_EMPLOYEE_DEPARMENTS_DATA_FROM_STORE:
      // console.log("EMPLOYEE_DEPARTMENTSREDUCER RAN REMOVE FROM STORE CASE")
      return {};

    default:
      // console.log('EMPLOYEE_DEPARTMENTSREDUCER RAN DEFAULT')
      return employeeDepartmentsState;
  }
}

export default employeeDepartmentsReducer;
