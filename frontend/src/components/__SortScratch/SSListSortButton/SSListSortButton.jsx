//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListSortButton";
import './SSListSortButton.css';

//==================PROGRAM IMPORTS=====================//

import { useState } from 'react';
import { BsCaretUpFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";


//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function SSListSortButton(k, v){

    // sortStatus can be null, 'asce', or 'desc'

    const [sortStatus, setSortStatus] = useState(v);


    const handleSortButton= (e) => {
        console.log("handleSortButton TOP");
        console.log("k: ", k);
        console.log("v: ", v);
        console.log("sortStatus: ", sortStatus);

        console.log("e: ", e);
        console.log("e.target: ", e.target);
        console.log("e.detail: ", e.detail);
        console.log("e.eventPhase: ", e.eventPhase);
        console.log("e.key: ", e.key);
        console.log("e.relatedTarget: ", e.relatedTarget);
        console.log("e.type: ", e.type);
        console.log("e.view: ", e.view);

        const clickedEle = e.target;
        let clickedEleTagName = clickedEle.tagName;
        console.log("clickedEleTagName: ", clickedEleTagName)

        const eListenerTriggerEle = e.currentTarget;
        let eListenerTriggerEleTagName = eListenerTriggerEle.tagName;
        console.log("eListenerTriggerEleTagName: ", eListenerTriggerEleTagName);



        e.preventDefault();
        // console.log("sortStatus TOP: ", sortStatus);




        if (sortStatus) {
          setSortStatus(false);

        //   employeesList.sort((employee1, employee2) => (employee1.id - employee2.id))

        //   console.log("sorted employeeList by ID FALSE: ", employeesList)

        } else if (!sortStatus) {
          setSortStatus(true);
        //   employeesList.sort((employee1, employee2) => (employee2.id - employee1.id))

        //   console.log("sorted employeeList by ID TRUE: ", employeesList)
        }


        // console.log("sortStatus BOTTOM: ", sortStatus)
        // return console.log("sortStatus RETURN: ", sortStatus);
      }

let on = false;
let buttonClasses = on ? `${BCIN}Button ${BCIN}ButtonOn` : `${BCIN}Button`;


//=================FUNCTION RETURN======================//
    return (<>
        <main className={buttonClasses}>
          <button className={`${BCIN}Button`} onClick={handleSortButton()}>
            {sortStatus === 'desc' ? <BsCaretDownFill /> : <BsCaretUpFill />}
            {sortStatus === 'asce' ? on = true : on = false }
          </button>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListSortButton;
