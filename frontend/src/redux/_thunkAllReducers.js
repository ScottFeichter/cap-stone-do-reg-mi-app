import { useDispatch } from 'react-redux';
import { thunkGetBranchesAll, thunkRemoveBranchDataFromStore } from "./branchesReducer";
import { thunkGetFacilitiesAll, thunkRemoveFacilitiesDataFromStore } from "./facilitiesReducer";
import { thunkGetAcademicDepartmentsAll, thunkRemoveAcademicDepartmentsDataFromStore } from "./academicDepartmentsReducer";
import { thunkGetEmployeeDepartmentsAll, thunkRemoveEmployeeDepartmentsDataFromStore } from "./employeeDepartmentsReducer";
import { thunkGetUserTypesAll, thunkRemoveUserTypeDataFromStore } from "./userTypesReducer";
import { thunkGetHouseholdsAll, thunkRemoveHouseholdDataFromStore } from "./householdsReducer";
import { thunkGetEmployeesAll, thunkRemoveEmployeeDataFromStore } from "./employeesReducer";
import { thunkGetStudentsAll, thunkRemoveStudentDataFromStore } from "./studentsReducer";


export function ThunkGetAllReducer() {
  const dispatch = useDispatch();
  dispatch(thunkGetBranchesAll());
  dispatch(thunkGetFacilitiesAll());
  dispatch(thunkGetAcademicDepartmentsAll());
  dispatch(thunkGetEmployeeDepartmentsAll());
  dispatch(thunkGetUserTypesAll());
  dispatch(thunkGetHouseholdsAll());
  dispatch(thunkGetEmployeesAll());
  dispatch(thunkGetStudentsAll());
  return
}



export function ThunkRemoveAllReducer() {
  const dispatch = useDispatch();
  dispatch(thunkRemoveBranchDataFromStore());
  dispatch(thunkRemoveFacilitiesDataFromStore());
  dispatch(thunkRemoveAcademicDepartmentsDataFromStore());
  dispatch(thunkRemoveEmployeeDepartmentsDataFromStore());
  dispatch(thunkRemoveUserTypeDataFromStore());
  dispatch(thunkRemoveHouseholdDataFromStore());
  dispatch(thunkRemoveEmployeeDataFromStore());
  dispatch(thunkRemoveStudentDataFromStore());
  return 
}
