import './EmployeesList.css';
import { useSelector } from 'react-redux'
import EmployeesListItemHeader from './EmployeesListItemHeader/EmployeesListItemHeader.jsx';
import EmployeesListSort from './EmployeesListSort/EmployeeListSort.jsx';


// ========================FUNCTION DECLARATION======================== //
function EmployeesList(){

    let employeesList = useSelector(state => state?.employees?.employees);


// ==========================FUNCTION RETURN============================ //
    return(
      <>
        <main className="EmployeeListMain">

          <EmployeesListItemHeader />
          <EmployeesListSort employeesList={employeesList} />

        </main>
      </>
    )
}

// ===========================FUNCTION EXPORT============================ //
export default EmployeesList;
