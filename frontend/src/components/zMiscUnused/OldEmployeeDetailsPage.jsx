// //============CSS IMPORT AND BASE CLASS NAME============//

// import './OldEmployeeDetailsPage.css';
// const BCIN = "OldEmployeeDetailsPage";


// //==================OTHER IMPORTS=======================//


// import EmployeeDetailsKeyValue from './EmployeeDetailsKeyValue';
// import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
// // import { useSelector } from 'react-redux';


// //===============FUNCTION DECLARATION===================//

// function OldEmployeeDetailsPage() {
//   // const employee = useSelector(state => state.employees.employees[0]);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const {employee} = location.state;


//   const employeeObjectKeys = Object.keys(employee);
//   const employeeObjectValues = Object.values(employee);
//   const employeeObjectEntries = Object.entries(employee);
//   // const test = "test";


//  const {
//     id,
//     employeeDepartment_Id,
//     academicDepartment_Id,
//     level_Id,
//     firstName,
//     nickName,
//     middleName,
//     lastName,
//     familyName,
//     email,
//     phone,
//     street,
//     city,
//     state,
//     zip,
//     dob,
//     age,
//     ssn,
//     firstLang,
//     secondLang,
//     thirdLang,
//     firstInst,
//     secondInst,
//     thirdInst,
//     primaryTitle,
//     primaryStartDate,
//     primaryEndDate,
//     primaryPayRate,
//     secondaryTitle,
//     secondaryStartDate,
//     secondaryEndDate,
//     secondaryPayRate,
//     tertiaryTitle,
//     tertiaryStartDate,
//     tertiaryEndDate,
//     tertiaryPayRate,
//     quarternaryTitle,
//     quarternaryStartDate,
//     quarternaryEndDate,
//     quarternaryPayRate,
//     biography,
//     notes,

//      } = employee;

// //  console.log("OBJECT.KEYS EMPLOYEE: ", employeeObjectKeys);
// //  console.log("OBJECT.VALUES EMPLOYEE: ", employeeObjectValues);
// //  console.log("OBJECT.ENTRIES EMPLOYEE: ", employeeObjectEntries);

// //  console.log("DESTRUCTURED EMPLOYEE: ",
//     id,
//     employeeDepartment_Id,
//     academicDepartment_Id,
//     level_Id,
//     firstName,
//     nickName,
//     middleName,
//     lastName,
//     familyName,
//     email,
//     phone,
//     street,
//     city,
//     state,
//     zip,
//     dob,
//     age,
//     ssn,
//     firstLang,
//     secondLang,
//     thirdLang,
//     firstInst,
//     secondInst,
//     thirdInst,
//     primaryTitle,
//     primaryStartDate,
//     primaryEndDate,
//     primaryPayRate,
//     secondaryTitle,
//     secondaryStartDate,
//     secondaryEndDate,
//     secondaryPayRate,
//     tertiaryTitle,
//     tertiaryStartDate,
//     tertiaryEndDate,
//     tertiaryPayRate,
//     quarternaryTitle,
//     quarternaryStartDate,
//     quarternaryEndDate,
//     quarternaryPayRate,
//     biography,
//     notes,
// )


// const handleClickEditEmployee = (e) => {
//   e.preventDefault();
//   navigate('/employees/:employee_Id/editForm')
// }

// const handleClickDeleteEmployee = (e) => {
//   e.preventDefault();
//   navigate('/employees/:employee_Id/deleteModal')
// }




// //=================FUNCTION RETURN======================//

//   return(
//     <>
//         <main id={`${BCIN}Main`}>

//             <nav id={`${BCIN}Nav`}>
//               <button id={`${BCIN}EditButton`} onClick={handleClickEditEmployee}>Edit Employee</button>
//               <h1 id={`${BCIN}H1`}>Employee Details</h1>
//               <button id={`${BCIN}DeleteButton`} onClick={handleClickDeleteEmployee}>Delete Employee</button>
//             </nav>


//             <div>

//                {employeeObjectEntries.map((arr)=> {
//                 const kv = {k: arr[0], v: arr[1]}
//                 return <EmployeeDetailsKeyValue {...kv} key={employee.id}  />
//                 })}



//                 {/* {employeeObjectEntries.map((arr)=> { return (<p key={arr[0]}>{arr}</p>)})} */}



//             </div>
//         </main>
//     </>
//   )
// }


// //===================FUNCTION EXPORT====================//
// export default OldEmployeeDetailsPage;
