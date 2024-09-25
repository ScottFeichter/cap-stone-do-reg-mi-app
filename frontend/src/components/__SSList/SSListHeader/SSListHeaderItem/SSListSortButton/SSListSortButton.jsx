//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListSortButton";
import './SSListSortButton.css';

//==================PROGRAM IMPORTS=====================//

import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BsCaretUpFill } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import { thunkUpdateEmployeeKeysStatus } from '../../../../../redux/employeesReducer';

//================COMPONENT IMPORTS=====================//

// import updateKeysStatus from '../../../_SSListHelpers/updateKeysSortStatus';


//===============FUNCTION DECLARATION===================//
function SSListSortButton({k, v}){
    const dispatch = useDispatch();


    // sortStatus can be off, 'asce', or 'desc'
    const [sortStatus, setSortStatus] = useState(v);

    //buttonClasses can be `${BCIN}ButtonOff` or `${BCIN}ButtonOn`
    const [buttonClasses, setButtonClasses] = useState(`${BCIN}ButtonOff`)


    useEffect(() => {

        if (k === 'ID') {
            setButtonClasses(`${BCIN}ButtonOn`);
            setSortStatus('asce');
        }

    }, []);



    const handleSortButton= (e) => {
        // console.log("handleSortButton TOP: ", "k: ", k, "v: ", v, "sortStatus: ", sortStatus);

        e.preventDefault();

        if (sortStatus === 'off') {

            setSortStatus('asce');
            setButtonClasses(`${BCIN}ButtonOn`);
            v = 'asce';

            dispatch(thunkUpdateEmployeeKeysStatus(k, v));

            // setKeysStatus(prev => ({
            //     ...prev,
            //     [k]: v,
            // }));

            // setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx]] = [keysStatus[targetIdx], keysStatus[currIdx]])

        } else if (sortStatus === 'asce') {
            setSortStatus('desc');
            setButtonClasses(`${BCIN}ButtonOn`);
            v = 'desc';

            dispatch(thunkUpdateEmployeeKeysStatus(k, v));

            // setKeysStatus(prev => ([
            //     ...prev,
            //     keysStatus[(currIdx)] = {[k]: v},
            //     {[k]: v}
            // ]));

            // setKeysStatus([...keysStatus, keysStatus[(currIdx)] = {[k]: v},]);

            // setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx]] = [keysStatus[targetIdx], keysStatus[currIdx]])


        } else if (sortStatus === 'desc') {
            setSortStatus('off');
            setButtonClasses(`${BCIN}ButtonOff`);
            v = 'off'

            dispatch(thunkUpdateEmployeeKeysStatus(k, v));

            // setKeysStatus(prev => ({
            //     ...prev,
            //     [k]: v,
            // }));

            // setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx - 1]] = [keysStatus[targetIdx - 1], keysStatus[currIdx]])

        }



        // console.log("handleSortButton BOTTOM: ", "k: ", k, "v: ", v, "sortStatus: ", sortStatus, "keysStatus", keysStatus);


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
