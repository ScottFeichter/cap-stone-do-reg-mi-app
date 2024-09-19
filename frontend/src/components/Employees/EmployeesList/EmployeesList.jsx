import './EmployeesList.css';
import { useSelector } from 'react-redux'
import EmployeesListItemHeader from './EmployeesListItemHeader';
import EmployeeListSort from './EmployeeListSort/EmployeeListSort';


// ========================FUNCTION DECLARATION======================== //
function EmployeesList(){

    let employeesList = useSelector(state => state?.employees?.employees);


// ==========================FUNCTION RETURN============================ //
    return(
      <>
        <main className="EmployeeListMain">

          <EmployeesListItemHeader />
          <EmployeeListSort employeesList={employeesList} />

        </main>
      </>
    )
}

// ===========================FUNCTION EXPORT============================ //
export default EmployeesList;
