import './Departments.css';
// import { useSelector } from 'react-redux';
import EmployeeDepartments from './EmployeeDepartments/EmployeeDepartments.jsx';

function Departments() {
  // const employeeDepartments = useSelector(state => state.employeeDepartments.employeeDepartments);
  // const academicDepartments = useSelector(state => state.academicDepartments.academicDepartments);
  // console.log("employeeDepartments: ", employeeDepartments);
  // console.log("academicDepartments: ", academicDepartments);



  return(
    <>
        <main>
            <div>

                <EmployeeDepartments></EmployeeDepartments>
            </div>
        </main>

    </>
  )
}

export default Departments;
