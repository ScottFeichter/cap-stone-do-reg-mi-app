import { csrfFetch } from "./xCsrf";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const EMPLOYEES_SEARCH = "employee/search";
const EMPLOYEES_ALL = "employees/all";
const EMPLOYEE_BY_ID = "employee/employeeById";
const CREATE_EMPLOYEE = "employee/createEmployee";
const UPDATE_EMPLOYEE = "employee/updateEmployee";
const DELETE_EMPLOYEE = "employee/deleteEmployee";
const REMOVE_EMPLOYEE_DATA_FROM_STORE = "employee/removeEmployeeDataFromStore";

/** ==============ACTION CREATORS:============================================*/

const employeesSearch = (employees) => {
  // console.log('EMPLOYEES_SEARCH RAN - EMPLOYEES', employees);
  return {
    type: EMPLOYEES_ALL,
    payload: employees
  };
};

const employeesAll = (employees) => {
  // console.log('EMPLOYEES ALL RAN - EMPLOYEES', employees);
  return {
    type: EMPLOYEES_ALL,
    payload: employees
  };
};


const employeeById = (employee) => {
  // console.log('EMPLOYEE BY ID RAN - EMPLOYEES', employee);
  return {
    type: EMPLOYEE_BY_ID,
    payload: employee
  };
};

const newCreatedEmployee = (employee) => {
  // console.log('NEW CREATED EMPLOYEE RAN - EMPLOYEES', employee);
  return {
    type: CREATE_EMPLOYEE,
    payload: employee
  };
};

const updateEmployee = (employee) => {
  // console.log('UPDATED EMPLOYEE RAN - EMPLOYEES', employee);
  return {
    type: UPDATE_EMPLOYEE,
    payload: employee
  };
};

const deleteEmployee = (employee) => {
  // console.log('DELETED EMPLOYEE RAN - EMPLOYEES', employee);
  return {
    type: DELETE_EMPLOYEE,
    payload: employee
  };
};

const removeEmployeeDataFromStore = () => {
  // console.log('REMOVE EMPLOYEE DATA FROM STORE RAN);
  return {
    type: REMOVE_EMPLOYEE_DATA_FROM_STORE,
    payload: {}
  };
};


/** ==============THUNKS:=====================================================*/

/** SEARCH EMPLOYEES */
export const search = (/*search*/) => async (dispatch) => {

  const response = await csrfFetch("/api/employees");
  const data = await response.json();
  const employees = data.employees;
  // console.log('THUNK SEARCH RAN DATA: ', employees);

  return dispatch(employeesSearch(employees))
};


/** GET EMPLOYEES */
export const thunkGetEmployeesAll = () => async (dispatch) => {

  const response = await csrfFetch("/api/employees");
  const data = await response.json();
  const employees = data.employees;
  // console.log('THUNK GET EMPLOYEES ALL RAN DATA: ', employees);

  return dispatch(employeesAll(employees))
};


/** GET DETAILS OF A EMPLOYEE FROM AN ID */
export const thunkGetEmployeeById = (employeeId) => async (dispatch) => {
  // console.log('EMPLOYEEID FORM EMPLOYEEDETAILS EMPLOYEES 89', employeeId)
  const response = await csrfFetch(`/api/employees/${employeeId}`);
  const data = await response.json();
  // console.log('THUNK GET EMPLOYEE BY ID RAN DATA: ', data );
  dispatch(employeeById(data));
  return data;
};


/** POST EMPLOYEES */
export const thunkCreateEmployee = (newEmployee) => async (dispatch) => {
  const response = await csrfFetch(`/api/employees/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newEmployee)
  });

  const data = await response.json();
  // console.log('THUNK CREATE EMPLOYEE RAN DATA: ', data );

  return dispatch(newCreatedEmployee(data));
};


/** PUT EMPLOYEES */
export const thunkEditEmployee = (editedEmployee) => async (dispatch) => {

  const { id } = editedEmployee;
  // console.log("editedEmployee from reducer:", editedEmployee, id)
//  console.log('UPDATED EMPLOYEE FROM EMPLOYEES EDIT EMPLOYEE', updatedEmployee);

  const response = await csrfFetch(`/api/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedEmployee)
  });

  const data = await response.json();
  // console.log('THUNK EDIT EMPLOYEE RAN DATA: ', data );

  return dispatch(updateEmployee(data));
};


/** DELETE EMPLOYEES */
export const thunkDeleteEmployee = (employee) => async (dispatch) => {
  const employeeId = employee.id;
  const response = await csrfFetch(`/api/employees/${employeeId}`, {
    method: "DELETE",
  });
  response
  // const data = await response.json();
  // console.log('THUNK DELET EEMPLOYEE DEPARTMENT RAN: ', response );
  return dispatch(deleteEmployee(employee));
};



// /** RESTORE */
// export const thunkRestoreEmployeesAll = (data) => async (dispatch) => {
//   const {user} = data;
//   const response = await fetch("/api/employees");
//   const data = await response.json();
//   const employees = data.employees;
//   console.log(`THUNK RESTORE EMPLOYEES RAN - DATA`,  response);
//   // console.log('THUNK GET EMPLOYEES ALL RAN DATA: ', employees);

//   return dispatch(employeesAll(employees))
// };




/** REMOVE EMPLOYEE DATA FROM STORE */
export const thunkRemoveEmployeeDataFromStore = () => async (dispatch) => {
  return dispatch(removeEmployeeDataFromStore());
};


/** ==============INITIAL STATE: =============================================*/

const initialEmployeesState = {}

/** ==============REDUCER: ===================================================*/
const employeesReducer = (employeesState = initialEmployeesState, action) => {
  // console.log('EMPLOYEES REDUCER RAN - STATE AND ACTION', state, action)

  switch (action.type) {

    case EMPLOYEES_SEARCH:
      // console.log("EMPLOYEESREDUCER RAN EMPLOYEES_SEARCH CASE RETURNING: ", {...state, employees: action.payload})
      return {...employeesState, resultsEmployees: action.payload}

    case EMPLOYEES_ALL:
      // console.log("EMPLOYEESREDUCER RAN EMPLOYEES_CURRENT_USER CASE RETURNING: ", {...employeesState, employeesCurrentUser: action.payload})
      return {...employeesState, employees: action.payload}

    case EMPLOYEE_BY_ID:
      // console.log("EMPLOYEESREDUCER RAN EMPLOYEE_BY_ID CASE RETURNING: ", {...employeesState, employee: action.payload})
      return {...employeesState, employeeDetail: action.payload};

    case CREATE_EMPLOYEE:
      // console.log("EMPLOYEESREDUCER RAN CREATE_EMPLOYEE CASE RETURNING: ")
      return {...employeesState, NewEmployee: action.payload};

    case UPDATE_EMPLOYEE:
      // console.log("EMPLOYEESREDUCER RAN UPDATE_EMPLOYEE CASE RETURNING: ")
      return {...employeesState, EditedEmployee: action.payload};

    case DELETE_EMPLOYEE:
      // console.log("EMPLOYEESREDUCER RAN DELETE_EMPLOYEE CASE RETURNING: ")
      return {...employeesState, DeletedEmployee: action.payload};

    case REMOVE_EMPLOYEE_DATA_FROM_STORE:
      // console.log("EMPLOYEEESREDUCER RAN REMOVE FROM STORE CASE")
      return {};

    default:
      // console.log('EMPLOYEESREDUCER RAN DEFAULT')
      return employeesState;
  }
}

export default employeesReducer;
