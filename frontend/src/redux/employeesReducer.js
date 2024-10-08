import { csrfFetch } from "./xCsrf";
// import camelCaseToTitleCase from "../components/_Helpers/camelCaseToTitleCase/camelCaseToTitleCase";
// import { useSelector } from "react-redux";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const EMPLOYEES_SEARCH = "employee/search";
const EMPLOYEES_ALL = "employees/all";
const EMPLOYEE_BY_ID = "employee/employeeById";
const CREATE_EMPLOYEE = "employee/createEmployee";
const UPDATE_EMPLOYEE = "employee/updateEmployee";
const DELETE_EMPLOYEE = "employee/deleteEmployee";
const REMOVE_EMPLOYEE_DATA_FROM_STORE = "employee/removeEmployeeDataFromStore";

const GENERATE_EMPLOYEE_KEYS_STATUS  = "generate employee keys status";
const UPDATE_EMPLOYEE_KEYS_STATUS  = "update employee keys status";

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




/** ------------------ ACTIONS FOR FRONTEND DATA ONLY ------------------- */


const generateEmployeeKeysStatus = (kS) => {
  // console.log('GENERATE_EMPLOYEE_KEYS_STATUS RAN - EMPLOYEES', employees);
  return {
    type: GENERATE_EMPLOYEE_KEYS_STATUS,
    payload: kS
  };
};


const updateEmployeeKeysStatus = (kS) => {
  // console.log('UPDATE_EMPLOYEE_KEYS_STATUS RAN - EMPLOYEES', employees);
  return {
    type: UPDATE_EMPLOYEE_KEYS_STATUS,
    payload: kS,
  };
};

const updateEmployeeList = (employees) => {
  // console.log('EMPLOYEES ALL RAN - EMPLOYEES', employees);
  return {
    type: EMPLOYEES_ALL,
    payload: employees
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

  dispatch(employeesAll(employees))
  return dispatch(thunkGenerateEmployeeKeysStatus(employees))
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




/** ------------------ THUNKS FOR FRONTEND DATA ONLY ------------------- */
let kS = []; // frontend global for keysStatus
// let listMirror = []; // frontend global for list

/** GENERATE EMPLOYEE KEYS STATUS */
export const thunkGenerateEmployeeKeysStatus = (list) => async (dispatch) => {
  // console.log(`list from thunkGenerateEmployeeKesStatus: ${list}` ); // these do not give same result
  console.log(`list from thunkGenerateEmployeeKesStatus: `, list ); // these do not give same result


  let keys = Object.keys(list[0]);
  // console.log("keys: ", keys);

  kS = keys.map(k => {
    // return {[camelCaseToTitleCase(k)]: 'off'}
    return {[k]: 'off'}
  });

  kS[0] = {id: 'asce'};

  // console.log('THUNK GENERATE EMPLOYEES KEY STATUS RAN DATA: ', kS);
  dispatch(thunkUpdateEmployeeList(list, kS))
  return dispatch(generateEmployeeKeysStatus(kS))
};



/** UPDATE EMPLOYEE KEYS STATUS */
export const thunkUpdateEmployeeKeysStatus = (list, k, v) => async (dispatch) => {
  // console.log('THUNK UPDATE EMPLOYEES KEY STATUS TOP: ', 'k: ', k, 'v: ', v);

  console.log(`list from thunkUpdateEmployeeKesStatus: `, list );

  let currIdx = kS.findIndex(ele => Object.keys(ele)[0] === k);
  let targetIdx = kS.findIndex(ele => Object.values(ele)[0] === 'off');

  // console.log(targetIdx);

  if(v === 'off') {
    kS[(currIdx)] = {[k]: v};
    // shifting
    if(currIdx !== 0) {
      while (currIdx < targetIdx) {
        [kS[currIdx], kS[currIdx + 1]] = [kS[currIdx + 1], kS[currIdx]];
        currIdx++;
      }
    }

  } else if(v === 'desc') {
    kS[(currIdx)] = {[k]: v};

  } else if(v === 'asce') {
    kS[(currIdx)] = {[k]: v};
    if(currIdx !== 0) {
      [kS[currIdx], kS[targetIdx]] = [kS[targetIdx], kS[currIdx]]
    }
  }

  dispatch(thunkUpdateEmployeeList(list, kS))
  // console.log('THUNK UPDATE EMPLOYEES KEY STATUS RAN DATA: ', kS);
  return dispatch(updateEmployeeKeysStatus(kS))
};

function compare( a, b ) {
  if ( a < b ){
    return -1;
  }
  if ( a > b ){
    return 1;
  }
  return 0;
}


/** UPDATE EMPLOYEE LIST */
export const thunkUpdateEmployeeList = (list, kS) => async (dispatch) => {

  console.log(`list from thunkUpdateEmployeeList: `, list );


  let sortedList = [];

  if (kS[0].id === 'asce') {
    // console.log("asce");
    // list.sort((a, b) => {return a.id - b.id});
   sortedList = list.sort((employee1, employee2) => compare(employee1.id, employee2.id));

  } else if (kS[0].id === 'desc') {
    // console.log("desc");
    // list.sort((a, b) => {return b.id - a.id});
    sortedList = list.sort((employee1, employee2) => compare(employee2.id, employee1.id));

  } else if (kS[0].id === 'off') {
    // console.log("off");
    // list.sort((a, b) => {return b.id - a.id});
    sortedList = list;
  }

console.log("in reducer - list[0]: ", list[0], "ks[0]: ", kS[0]);
console.log("in reducer - sortedList[0]: ", sortedList[0], "ks[0]: ", kS[0]);




  return dispatch(updateEmployeeList(sortedList));
}





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





    case GENERATE_EMPLOYEE_KEYS_STATUS:
      // console.log("EMPLOYEEESREDUCER RAN GENERATE EMPLOYEE KEYS STATUS CASE")
      return {...employeesState, employeeKeysStatus: action.payload};

    case UPDATE_EMPLOYEE_KEYS_STATUS:
      // console.log("EMPLOYEEESREDUCER RAN UPDATE EMPLOYEE KEYS STATUS CASE")
      return {...employeesState, employeeKeysStatus: action.payload};



    default:
      // console.log('EMPLOYEESREDUCER RAN DEFAULT')
      return employeesState;
  }
}

export default employeesReducer;
