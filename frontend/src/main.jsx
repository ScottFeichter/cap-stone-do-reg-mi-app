import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import configureStore from './redux/zStore.js';
import { restoreCSRF, csrfFetch } from './redux/xCsrf.js';
import * as sessionActions from './redux/sessionReducer.js';
import * as userTypesActions from './redux/userTypesReducer.js';
import * as academicDepartmentsActions from './redux/academicDepartmentsReducer.js';
import * as employeeDepartmentsActions from './redux/employeeDepartmentsReducer.js';
import * as employeesActions from './redux/employeesReducer.js';
import * as branchesActions from './redux/branchesReducer.js';
import * as facilitiesActions from './redux/facilitiesReducer.js';
import * as householdsActions from './redux/householdsReducer.js';
import * as studentsActions from './redux/studentsReducer.js';

import { router } from "./router/Router.jsx";
import './index.css'




const store = configureStore();

// import.meta.env.MODE
// process.env.NODE_ENV

if (process.env.NODE_ENV !== 'production') {

  restoreCSRF()

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.academicDepartmentsActions = academicDepartmentsActions;
  window.employeeDepartmentsActions = employeeDepartmentsActions;
  window.userTypesActions = userTypesActions;
  window.employeesActions = employeesActions;
  window.branchesActions = branchesActions;
  window.facilitiesActions = facilitiesActions;
  window.householdsActions = householdsActions;
  window.studentsActions = studentsActions;

}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
  </React.StrictMode>
)
