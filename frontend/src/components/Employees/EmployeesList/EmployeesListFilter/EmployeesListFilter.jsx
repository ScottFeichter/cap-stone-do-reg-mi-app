//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "EmployeesListFilter";
import './EmployeesListFilter.css';

//==================PROGRAM IMPORTS=====================//

import { useState } from 'react';

import { BsCaretUpFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function EmployeesListFilter(){

 //====================FILTER VARIABLES====================//
 const [filterIDStatus, setFilterIDStatus] = useState(false);
 const [filterNameStatus, setFilterNameStatus] = useState(false);
 const [filterStreetStatus, setFilterStreetStatus] = useState(false);
 const [filterCityStatus, setFilterCityStatus] = useState(false);
 const [filterStateStatus, setFilterStateStatus] = useState(false);
 const [filterZipStatus, setFilterZipStatus] = useState(false);
 const [filterPhoneStatus, setFilterPhoneStatus] = useState(false);
 const [filterEmailStatus, setFilterEmailStatus] = useState(false);

//====================FILTER HANDLERS====================//


 const handleFilterID= (e) => {
   e.preventDefault();
   filterIDStatus === false ? setFilterIDStatus(true) : filterIDStatus === true ? setFilterIDStatus(false) : "";
   return console.log("filterIDStatus: ", filterIDStatus);
 }

 const handleFilterName= (e) => {
   e.preventDefault();
   filterNameStatus === false ? setFilterNameStatus(true) : filterNameStatus === true ? setFilterNameStatus(false) : "";
   return console.log("filterNameStatus: ", filterNameStatus);
 }

 const handleFilterStreet= (e) => {
   e.preventDefault();
   filterStreetStatus === false ? setFilterStreetStatus(true) : filterStreetStatus === true ? setFilterStreetStatus(false) : "";
   return console.log("filterStreetStatus: ", filterStreetStatus);
 }

 const handleFilterCity= (e) => {
   e.preventDefault();
   filterCityStatus === false ? setFilterCityStatus(true) : filterCityStatus === true ? setFilterCityStatus(false) : "";
   return console.log("filterCityStatus: ", filterCityStatus);
 }

 const handleFilterState= (e) => {
   e.preventDefault();
   filterStateStatus === false ? setFilterStateStatus(true) : filterStateStatus === true ? setFilterStateStatus(false) : "";
   return console.log("filterStateStatus: ", filterStateStatus);
 }

 const handleFilterZip= (e) => {
   e.preventDefault();
   filterZipStatus === false ? setFilterZipStatus(true) : filterZipStatus === true ? setFilterZipStatus(false) : "";
   return console.log("filterZipStatus: ", filterZipStatus);
 }

 const handleFilterPhone= (e) => {
   e.preventDefault();
   filterPhoneStatus === false ? setFilterPhoneStatus(true) : filterPhoneStatus === true ? setFilterPhoneStatus(false) : "";
   return console.log("filterPhoneStatus: ", filterPhoneStatus);
 }

 const handleFilterEmail= (e) => {
   e.preventDefault();
   filterEmailStatus === false ? setFilterEmailStatus(true) : filterEmailStatus === true ? setFilterEmailStatus(false) : "";
   return console.log("filterEmailStatus: ", filterEmailStatus);
 }






//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>
            <div className={`${BCIN}Div`}>
                <h1 className={`${BCIN}H1`}></h1>
                    <p className={`${BCIN}P`}></p>
            </div>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default EmployeesListFilter;
