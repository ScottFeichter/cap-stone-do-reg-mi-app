//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListSortButton";
import './SSListSortButton.css';

//==================PROGRAM IMPORTS=====================//

import { useState } from 'react';
import { useEffect } from 'react';
import { BsCaretUpFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";

//================COMPONENT IMPORTS=====================//

// import updateKeysStatus from '../../../_SSListHelpers/updateKeysSortStatus';


//===============FUNCTION DECLARATION===================//
function SSListSortButton({k, v, keysStatus}){
    // console.log("SSListSortButton TOP");
    // console.log("SSListSortButton: ", "k: ", k, "v: ", v, "keysStatus: ", keysStatus);
    // if(setKeysStatus) "stop yelling at me linter";
    if(keysStatus) "stop yelling at me linter";

    // if(k === undefined) k = 'k';
    // if(v === undefined) v = 'off';

    // sortStatus can be off, 'asce', or 'desc'
    const [sortStatus, setSortStatus] = useState(v);

    //buttonClasses can be `${BCIN}ButtonOff` or `${BCIN}ButtonOn`
    const [buttonClasses, setButtonClasses] = useState(`${BCIN}ButtonOff`)


    // console.log("LINE 28: ", "v: ", v, "k: ", k, "sortStatus: ", sortStatus);

    useEffect(() => {

        if (k === 'ID') {
            setButtonClasses(`${BCIN}ButtonOn`);
            setSortStatus('asce')
        }
        
    }, []);



    const handleSortButton= (e) => {
        // console.log("handleSortButton TOP");
        // console.log("k: ", k);
        // console.log("e.currentTarget.id: ", e.currentTarget.id);
        console.log("handleSortButton TOP: ", "k: ", k, "v: ", v, "sortStatus: ", sortStatus, "keysStatus", keysStatus);

        e.preventDefault();

        let currIdx = keysStatus.findIndex(ele => Object.keys(ele)[0] === k);
        let targetIdx = keysStatus.findIndex(ele => ele[Object.keys(ele)[0]] === 'off');

        console.log("currIdx: ", currIdx, "targetIdx: ", targetIdx);

        if (sortStatus === 'off') {

            setSortStatus('asce');
            setButtonClasses(`${BCIN}ButtonOn`);
            v = 'asce';

            setKeysStatus(prev => ({
                ...prev,
                [k]: v,
            }));

            setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx]] = [keysStatus[targetIdx], keysStatus[currIdx]])

        } else if (sortStatus === 'asce') {
            setSortStatus('desc');
            setButtonClasses(`${BCIN}ButtonOn`);
            v = 'desc';

            // setKeysStatus(prev => ([
            //     ...prev,
            //     keysStatus[(currIdx)] = {[k]: v},
            //     {[k]: v}
            // ]));

            setKeysStatus([...keysStatus, keysStatus[(currIdx)] = {[k]: v},]



            );

            // setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx]] = [keysStatus[targetIdx], keysStatus[currIdx]])


        } else if (sortStatus === 'desc') {
            setSortStatus('off');
            setButtonClasses(`${BCIN}ButtonOff`);
            v = 'off'

            setKeysStatus(prev => ({
                ...prev,
                [k]: v,
            }));

            setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx - 1]] = [keysStatus[targetIdx - 1], keysStatus[currIdx]])

        }



        console.log("handleSortButton BOTTOM: ", "k: ", k, "v: ", v, "sortStatus: ", sortStatus, "keysStatus", keysStatus);


        // return console.log("handleSortButton RETURN: ", {v: v}, {sortStatus: sortStatus});
        // {[k]: sortStatus} {[k]: v} ;

      }





//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>
          <button className={buttonClasses} id={k} onClick={handleSortButton}>
            {/* {console.log("LINE 86: ", "v: ", v, "sortStatus: ", sortStatus)} */}
            {sortStatus === 'desc' ? <BsCaretDownFill /> : <BsCaretUpFill />}
          </button>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListSortButton;
