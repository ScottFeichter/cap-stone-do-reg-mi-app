//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListSortButton";
import './SSListSortButton.css';

//==================PROGRAM IMPORTS=====================//

import { useState } from 'react';
import { BsCaretUpFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";

//================COMPONENT IMPORTS=====================//



//===============FUNCTION DECLARATION===================//
function SSListSortButton({k, v}){
    // console.log("SSListSortButton TOP");
    // console.log("k: ", v, "v: ", v);

    if(k === undefined) k = 'ID';
    if(v === undefined) v = 'off';

    // sortStatus can be off, 'asce', or 'desc'
    const [sortStatus, setSortStatus] = useState(v);

    //buttonClasses can be `${BCIN}ButtonOff` or `${BCIN}ButtonOn`
    const [buttonClasses, setButtonClasses] = useState(`${BCIN}ButtonOff`)


    console.log("LINE 28: ", "v: ", v, "sortStatus: ", sortStatus);


    const handleSortButton= (e) => {
        // console.log("handleSortButton TOP");
        // console.log("k: ", k);
        // console.log("e.currentTarget.id: ", e.currentTarget.id);
        console.log("handleSortButton TOP: ", "v: ", v, "sortStatus: ", sortStatus);

        e.preventDefault();


        // document.getElementById("myBtn").disabled = true;


        if (sortStatus === 'off') {
            setSortStatus('asce');
            setButtonClasses(`${BCIN}ButtonOn`);
            v = 'asce';

            //   employeesList.sort((employee1, employee2) => (employee1.id - employee2.id))
            //   console.log("sorted employeeList by ID FALSE: ", employeesList)

        } else if (sortStatus === 'asce') {
            setSortStatus('desc');
            setButtonClasses(`${BCIN}ButtonOn`);
            v = 'desc';

            //   employeesList.sort((employee1, employee2) => (employee1.id - employee2.id))
            //   console.log("sorted employeeList by ID FALSE: ", employeesList)

        } else if (sortStatus === 'desc') {
            setSortStatus('off');
            setButtonClasses(`${BCIN}ButtonOff`);
            v = 'off'

            //   employeesList.sort((employee1, employee2) => (employee2.id - employee1.id))
            //   console.log("sorted employeeList by ID TRUE: ", employeesList)
        }




        // console.log("handleSortButton BOTTOM");
        return console.log("handleSortButton RETURN: ", {v: v}, {sortStatus: sortStatus});

        // {[k]: sortStatus} {[k]: v} ;

      }





//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>
          <button className={buttonClasses} id={k} onClick={handleSortButton}>
            {console.log("LINE 86: ", "v: ", v, "sortStatus: ", sortStatus)}
            {sortStatus === 'desc' ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListSortButton;
