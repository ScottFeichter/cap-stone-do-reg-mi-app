import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";

// import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
import sessionReducer from "./sessionReducer.js";
import employeeDepartmentsReducer from "./employeeDepartmentsReducer.js";
import academicDepartmentsReducer from "./academicDepartmentsReducer.js";
import userTypesReducer from "./userTypesReducer.js";
import employeesReducer from "./employeesReducer.js";
import branchesReducer from "./branchesReducer.js";
import facilitiesReducer from "./facilitiesReducer.js";
import householdsReducer from "./householdsReducer.js";
import studentsReducer from "./studentsReducer.js";

const rootReducer = combineReducers({
  session: sessionReducer,
  employeeDepartments: employeeDepartmentsReducer,
  academicDepartments: academicDepartmentsReducer,
  userTypes: userTypesReducer,
  employees: employeesReducer,
  branches: branchesReducer,
  facilities: facilitiesReducer,
  households: householdsReducer,
  students: studentsReducer,
});

let enhancer;

// import.meta.env.MODE
// process.env.NODE_ENV

if (process.env.NODE_ENV === "production") {
  // const logger = createLogger({
    // collapsed: true,
    // collapsed: (getState, action, logEntry) => !logEntry.error
  // });
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  // console.log("inside configureStore - store.getState(): ", store.getState());
  // console.log("CONFIGURE STORE RAN - RETURNS :", "ROOTREDUCER", rootReducer, "PRELOADED STATE: ", preloadedState, "ENHANCER: ", enhancer);
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
