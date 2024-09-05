// import { thunkGetBranchesAll, thunkRemoveBranchDataFromStore } from "./branchesReducer";
// import { thunkGetFacilitiesAll, thunkRemoveFacilitiesDataFromStore } from "./facilitiesReducer";
// import { thunkGetAcademicDepartmentsAll, thunkRemoveAcademicDepartmentsDataFromStore } from "./academicDepartmentsReducer";
// import { thunkGetEmployeeDepartmentsAll, thunkRemoveEmployeeDepartmentsDataFromStore } from "./employeeDepartmentsReducer";
// import { thunkGetUserTypesAll, thunkRemoveUserTypeDataFromStore } from "./userTypesReducer";
// import { thunkGetHouseholdsAll, thunkRemoveHouseholdDataFromStore } from "./householdsReducer";
// import { thunkGetEmployeesAll, thunkRemoveEmployeeDataFromStore } from "./employeesReducer";
// import { thunkGetStudentsAll, thunkRemoveStudentDataFromStore } from "./studentsReducer";

import Cookies from 'js-cookie'

export const csrfFetch = async (url, options = {}) => {


  options.method = options.method || 'GET'
  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
    options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
  }

  // console.log("url and options", url, options);
  const res = await window.fetch(url, options);
  const resClone = res.clone()

  // console.log("res and resClone", res, resClone);
  const data = await resClone.json();


  if(!data["XSRF-Token"]){
    if(data.user !== null) {
      // console.log("data.user", data.user);
      // console.log("url and options", url, options);
      // window.dispatch(thunkGetBranchesAll());
      // window.dispatch(thunkGetFacilitiesAll());
      // window.dispatch(thunkGetAcademicDepartmentsAll());
      // window.dispatch(thunkGetEmployeeDepartmentsAll());
      // window.dispatch(thunkGetUserTypesAll());
      // window.dispatch(thunkGetHouseholdsAll());
      // window.dispatch(thunkGetEmployeesAll());
      // window.dispatch(thunkGetStudentsAll());


      // window.store.dispatch(thunkGetEmployeesAll());
    }
  }


  if (res.status >= 400) throw res;
  return res;
}

// call this to get the "XSRF-TOKEN" cookie, should only be used in development
export function restoreCSRF() {
  return csrfFetch('/api/csrf/restore');
}
