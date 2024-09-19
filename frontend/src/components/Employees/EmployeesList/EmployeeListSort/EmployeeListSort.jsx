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




//===============FUNCTION DECLARATION===================//
function EmployeeListSort() {



//====================SORT VARIABLES====================//
  const [sortIDStatus, setSortIDStatus] = useState(false);
  const [sortNameStatus, setSortNameStatus] = useState(false);
  const [sortStreetStatus, setSortStreetStatus] = useState(false);
  const [sortCityStatus, setSortCityStatus] = useState(false);
  const [sortStateStatus, setSortStateStatus] = useState(false);
  const [sortZipStatus, setSortZipStatus] = useState(false);
  const [sortPhoneStatus, setSortPhoneStatus] = useState(false);
  const [sortEmailStatus, setSortEmailStatus] = useState(false);

 //====================SORT HANDLERS====================//
  const handleSortID= (e) => {
    e.preventDefault();
    sortIDStatus ? setSortIDStatus(false) : !sortIDStatus ? setSortIDStatus(true) : "";
    return console.log("sortIDStatus: ", sortIDStatus);
  }

  const handleSortName= (e) => {
    e.preventDefault();
    sortNameStatus ? setSortNameStatus(false) : !sortNameStatus ? setSortNameStatus(true) : "";
    return console.log("sortNameStatus: ", sortNameStatus);
  }

  const handleSortStreet= (e) => {
    e.preventDefault();
    sortStreetStatus ? setSortStreetStatus(false) : !sortStreetStatus ? setSortStreetStatus(true) : "";
    return console.log("sortStreetStatus: ", sortStreetStatus);
  }

  const handleSortCity= (e) => {
    e.preventDefault();
    sortCityStatus ? setSortCityStatus(false) : !sortCityStatus ? setSortCityStatus(true) : "";
    return console.log("sortCityStatus: ", sortCityStatus);
  }

  const handleSortState= (e) => {
    e.preventDefault();
    sortStateStatus ? setSortStateStatus(false) : !sortStateStatus ? setSortStateStatus(true) : "";
    return console.log("sortStateStatus: ", sortStateStatus);
  }

  const handleSortZip= (e) => {
    e.preventDefault();
    sortZipStatus ? setSortZipStatus(false) : !sortZipStatus ? setSortZipStatus(true) : "";
    return console.log("sortZipStatus: ", sortZipStatus);
  }

  const handleSortPhone= (e) => {
    e.preventDefault();
    sortPhoneStatus ? setSortPhoneStatus(false) : !sortPhoneStatus ? setSortPhoneStatus(true) : "";
    return console.log("sortPhoneStatus: ", sortPhoneStatus);
  }

  const handleSortEmail= (e) => {
    e.preventDefault();
    sortEmailStatus ? setSortEmailStatus(false) : !sortEmailStatus ? setSortEmailStatus(true) : "";
    return console.log("sortEmailStatus: ", sortEmailStatus);
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

    </>
  );
}

//===================FUNCTION EXPORT====================//
export default EmployeeListSort;
