//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "EmployeeListSort";
import './EmployeeListSort.css';

//==================PROGRAM IMPORTS=====================//

import { useState } from 'react';

import { MdFilterAlt } from "react-icons/md";
import { MdFilterAltOff } from "react-icons/md";

import { BsCaretUpFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";

//================COMPONENT IMPORTS=====================//

import EmployeesListMap from '../EmployeesListMap/EmployeesListMap';


//===============FUNCTION DECLARATION===================//
function EmployeeListSort({employeesList}) {

  console.log("employeesList: ", employeesList);


//====================SORT VARIABLES====================//
  const [sortIDStatus, setSortIDStatus] = useState(false);
  const [sortNameStatus, setSortNameStatus] = useState(false);
  const [sortStreetStatus, setSortStreetStatus] = useState(false);
  const [sortCityStatus, setSortCityStatus] = useState(false);
  const [sortStateStatus, setSortStateStatus] = useState(false);
  const [sortZipStatus, setSortZipStatus] = useState(false);
  const [sortPhoneStatus, setSortPhoneStatus] = useState(false);
  const [sortEmailStatus, setSortEmailStatus] = useState(false);

  const [sorts, setSorts] = useState([{ID: false}, {Name: false}, {Street: false}, {City: false}, {State: false}, {Zip: false}, {Phone: false}, {Email: false},])



// =========================COMPARE HELPER FUNCTION========================== //

function compare( a, b ) {
  if ( a < b ){
    return -1;
  }
  if ( a > b ){
    return 1;
  }
  return 0;
}



 //====================SORT HANDLERS====================//

//  data.sort((a, b) => a.city.localeCompare(b.city) || b.price - a.price);

// ====================START: USING USESTATE MAY PREVENT ME FROM MAKING THIS DRY===================
// if I did not have to useState I could use regular let and key would represent whichever variable
  // const handleSort= (e, key) => {
  //   e.preventDefault();
  //   console.log(`sort${key}Status TOP: `, sortIDStatus);


  //   if (sortIDStatus) {
  //     [`setSort${key}Status`](false);

  //     employeesList.sort((employee1, employee2) => (employee1.key - employee2.key))

  //     console.log(`sorted employeeList by ${key} FALSE: `, employeesList)

  //   } else if (!sortIDStatus) {
  //     setSortIDStatus(true);
  //     employeesList.sort((employee1, employee2) => (employee2.key - employee1.key))

  //     console.log(`sorted employeeList by ${key} TRUE: `, employeesList)
  //   }


  //   console.log(`sort${key}Status BOTTOM: `, sortIDStatus)
  //   return console.log(`sort${key}Status RETURN: `, sortIDStatus);
  // }
  // =====================END: USING USESTATE MAY PREVENT ME FROM MAKING THIS DRY===================






  const handleSortID= (e) => {
    e.preventDefault();
    console.log("sortIDStatus TOP: ", sortIDStatus);


    if (sortIDStatus) {
      setSortIDStatus(false);

      employeesList.sort((employee1, employee2) => compare(employee1.id, employee2.id))

      console.log("sorted employeeList by ID FALSE: ", employeesList)

    } else if (!sortIDStatus) {
      setSortIDStatus(true);
      employeesList.sort((employee1, employee2) => compare(employee2.id, employee1.id))

      console.log("sorted employeeList by ID TRUE: ", employeesList)
    }


    console.log("sortIDStatus BOTTOM: ", sortIDStatus)
    return console.log("sortIDStatus RETURN: ", sortIDStatus);


  }




  const handleSortName= (e) => {
    e.preventDefault();
    if (sortNameStatus) {
      setSortNameStatus(false);

      employeesList.sort((employee1, employee2) => compare(employee1.lastName, employee2.lastName))

      console.log("sorted employeeList by name FALSE: ", employeesList)

    } else if (!sortNameStatus) {
      setSortNameStatus(true);
      employeesList.sort((employee1, employee2) => compare(employee2.lastName, employee1.lastName))

      console.log("sorted employeeList by name TRUE: ", employeesList)
    }


    console.log("sortNameStatus BOTTOM: ", sortNameStatus)
    return console.log("sortNameStatus RETURN: ", sortNameStatus);

  }



  const handleSortStreet= (e) => {
    e.preventDefault();
    if (sortStreetStatus) {
      setSortStreetStatus(false);

      employeesList.sort((employee1, employee2) => compare(employee1.street, employee2.street))

      console.log("sorted employeeList by Street FALSE: ", employeesList)

    } else if (!sortStreetStatus) {
      setSortStreetStatus(true);
      employeesList.sort((employee1, employee2) => compare(employee2.street, employee1.street))

      console.log("sorted employeeList by Street TRUE: ", employeesList)
    }


    console.log("sortStreetStatus BOTTOM: ", sortStreetStatus)
    return console.log("sortStreetStatus RETURN: ", sortStreetStatus);

  }


  const handleSortCity= (e) => {
    e.preventDefault();
    if (sortCityStatus) {
      setSortCityStatus(false);

      employeesList.sort((employee1, employee2) => compare(employee1.city, employee2.city))

      console.log("sorted employeeList by City FALSE: ", employeesList)

    } else if (!sortCityStatus) {
      setSortCityStatus(true);
      employeesList.sort((employee1, employee2) => compare(employee2.city, employee1.city))

      console.log("sorted employeeList by City TRUE: ", employeesList)
    }


    console.log("sortCityStatus BOTTOM: ", sortCityStatus)
    return console.log("sortCityStatus RETURN: ", sortCityStatus);

  }



  const handleSortState= (e) => {
    e.preventDefault();
    if (sortStateStatus) {
      setSortStateStatus(false);

      employeesList.sort((employee1, employee2) => compare(employee1.state, employee2.state))

      console.log("sorted employeeList by State FALSE: ", employeesList)

    } else if (!sortStateStatus) {
      setSortStateStatus(true);
      employeesList.sort((employee1, employee2) => compare(employee2.state, employee1.state))

      console.log("sorted employeeList by State TRUE: ", employeesList)
    }


    console.log("sortStateStatus BOTTOM: ", sortStateStatus)
    return console.log("sortStateStatus RETURN: ", sortStateStatus);

  }



  const handleSortZip= (e) => {
    e.preventDefault();
    if (sortZipStatus) {
      setSortZipStatus(false);

      employeesList.sort((employee1, employee2) => compare(employee1.zip, employee2.zip))

      console.log("sorted employeeList by Zip FALSE: ", employeesList)

    } else if (!sortZipStatus) {
      setSortZipStatus(true);
      employeesList.sort((employee1, employee2) => compare(employee2.zip, employee1.zip))

      console.log("sorted employeeList by Zip TRUE: ", employeesList)
    }


    console.log("sortZipStatus BOTTOM: ", sortZipStatus)
    return console.log("sortZipStatus RETURN: ", sortZipStatus);

  }




  const handleSortPhone= (e) => {
    e.preventDefault();
    if (sortPhoneStatus) {
      setSortPhoneStatus(false);

      employeesList.sort((employee1, employee2) => compare(employee1.phone, employee2.phone))

      console.log("sorted employeeList by Phone FALSE: ", employeesList)

    } else if (!sortPhoneStatus) {
      setSortPhoneStatus(true);
      employeesList.sort((employee1, employee2) => compare(employee2.phone, employee1.phone))

      console.log("sorted employeeList by Phone TRUE: ", employeesList)
    }


    console.log("sortPhoneStatus BOTTOM: ", sortPhoneStatus)
    return console.log("sortPhoneStatus RETURN: ", sortPhoneStatus);

  }



  const handleSortEmail= (e) => {
    e.preventDefault();
    if (sortEmailStatus) {
      setSortEmailStatus(false);

      employeesList.sort((employee1, employee2) => compare(employee1.email, employee2.email))

      console.log("sorted employeeList by Email FALSE: ", employeesList)

    } else if (!sortEmailStatus) {
      setSortEmailStatus(true);
      employeesList.sort((employee1, employee2) => compare(employee2.email, employee1.email))

      console.log("sorted employeeList by Email TRUE: ", employeesList)
    }


    console.log("sortEmailStatus BOTTOM: ", sortEmailStatus)
    return console.log("sortEmailStatus RETURN: ", sortEmailStatus);

  }





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

  console.log("filterIDStatus TOP: ", filterIDStatus);


  if (filterIDStatus) {
    setFilterIDStatus(false);

    employeesList.filter((employee1, employee2) => (employee1.id - employee2.id))

    console.log("filtered employeeList by ID FALSE: ", employeesList)

  } else if (!filterIDStatus) {
    setFilterIDStatus(true);
    employeesList.filter((employee1, employee2) => (employee2.id - employee1.id))

    console.log("filtered employeeList by ID TRUE: ", employeesList)
  }


  console.log("filterIDStatus BOTTOM: ", filterIDStatus)
  return console.log("filterIDStatus RETURN: ", filterIDStatus);

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
  return (
    <>
      <div className={`${BCIN}Container`}>

        <div className={`${BCIN}ItemContainerID`}>
          <button className={`${BCIN}SortButton`} onClick={handleSortID}>
            {sortIDStatus ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>

          <button className={`${BCIN}FilterButton`} onClick={handleFilterID}>
            {filterIDStatus ? <MdFilterAltOff/> : <MdFilterAlt />}
          </button>
        </div>


        <div className={`${BCIN}ItemContainerName`}>
          <button className={`${BCIN}SortButton`} onClick={handleSortName}>
            {sortNameStatus ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>

          <button className={`${BCIN}FilterButton`} onClick={handleFilterName}>
            {filterNameStatus ? <MdFilterAltOff/> : <MdFilterAlt />}
          </button>
        </div>


        <div className={`${BCIN}ItemContainerStreet`}>
          <button className={`${BCIN}SortButton`} onClick={handleSortStreet}>
            {sortStreetStatus ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>

          <button className={`${BCIN}FilterButton`} onClick={handleFilterStreet}>
            {filterStreetStatus ? <MdFilterAltOff/> : <MdFilterAlt />}
          </button>
        </div>


        <div className={`${BCIN}ItemContainerCity`}>
          <button className={`${BCIN}SortButton`} onClick={handleSortCity}>
            {sortCityStatus ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>

          <button className={`${BCIN}FilterButton`} onClick={handleFilterCity}>
            {filterCityStatus ? <MdFilterAltOff/> : <MdFilterAlt />}
          </button>
        </div>


        <div className={`${BCIN}ItemContainerState`}>
          <button className={`${BCIN}SortButton`} onClick={handleSortState}>
            {sortStateStatus ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>

          <button className={`${BCIN}FilterButton`} onClick={handleFilterState}>
            {filterStateStatus ? <MdFilterAltOff/> : <MdFilterAlt />}
          </button>
        </div>


        <div className={`${BCIN}ItemContainerZip`}>
          <button className={`${BCIN}SortButton`} onClick={handleSortZip}>
            {sortZipStatus ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>

          <button className={`${BCIN}FilterButton`} onClick={handleFilterZip}>
            {filterZipStatus ? <MdFilterAltOff/> : <MdFilterAlt />}
          </button>
        </div>


        <div className={`${BCIN}ItemContainerPhone`}>
          <button className={`${BCIN}SortButton`} onClick={handleSortPhone}>
            {sortPhoneStatus ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>

          <button className={`${BCIN}FilterButton`} onClick={handleFilterPhone}>
            {filterPhoneStatus ? <MdFilterAltOff/> : <MdFilterAlt />}
          </button>
        </div>


        <div className={`${BCIN}ItemContainerEmail`}>
          <button className={`${BCIN}SortButton`} onClick={handleSortEmail}>
            {sortEmailStatus ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>

          <button className={`${BCIN}FilterButton`} onClick={handleFilterEmail}>
            {filterEmailStatus ? <MdFilterAltOff/> : <MdFilterAlt />}
          </button>
        </div>

      </div>


       <EmployeesListMap employeesList={employeesList} />
    </>
  );
}

//===================FUNCTION EXPORT====================//
export default EmployeeListSort;
