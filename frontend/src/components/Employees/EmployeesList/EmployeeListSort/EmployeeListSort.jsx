//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "EmployeeListSort";
import './EmployeeListSort.css';

//==================PROGRAM IMPORTS=====================//

import { RiFilterFill } from 'react-icons/ri';
import { FaSort } from 'react-icons/fa6'

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function EmployeeListSort() {


//=================FUNCTION RETURN======================//
  return (
    <>
      <div className={`${BCIN}Container`}>

        <div className={`${BCIN}ItemContainerID`}>
          <button className={`${BCIN}SortButton`}><FaSort className={`${BCIN}FaSort`}/></button>
          <button className={`${BCIN}FilterButton`}><RiFilterFill className={`${BCIN}RiFilterFill`}/></button>
        </div>

        {/* <div className={`${BCIN}ItemContainerED`}>
          <h4 className={`${BCIN}ItemH4`}>ED</h4>
        </div> */}

        {/* <div className={`${BCIN}ItemContainerAD`}>
          <h4 className={`${BCIN}ItemH4`}>AD</h4>
        </div> */}

        <div className={`${BCIN}ItemContainerName`}>
            <button className={`${BCIN}SortButton`}><FaSort className={`${BCIN}FaSort`}/></button>
            <button className={`${BCIN}FilterButton`}><RiFilterFill className={`${BCIN}RiFilterFill`}/></button>
        </div>

        <div className={`${BCIN}ItemContainerStreet`}>
            <button className={`${BCIN}SortButton`}><FaSort className={`${BCIN}FaSort`}/></button>
            <button className={`${BCIN}FilterButton`}><RiFilterFill className={`${BCIN}RiFilterFill`}/></button>
        </div>

        <div className={`${BCIN}ItemContainerCity`}>
            <button className={`${BCIN}SortButton`}><FaSort className={`${BCIN}FaSort`}/></button>
            <button className={`${BCIN}FilterButton`}><RiFilterFill className={`${BCIN}RiFilterFill`}/></button>
        </div>

        <div className={`${BCIN}ItemContainerState`}>
            <button className={`${BCIN}SortButton`}><FaSort className={`${BCIN}FaSort`}/></button>
            <button className={`${BCIN}FilterButton`}><RiFilterFill className={`${BCIN}RiFilterFill`}/></button>
        </div>

        <div className={`${BCIN}ItemContainerZip`}>
            <button className={`${BCIN}SortButton`}><FaSort className={`${BCIN}FaSort`}/></button>
            <button className={`${BCIN}FilterButton`}><RiFilterFill className={`${BCIN}RiFilterFill`}/></button>
        </div>

        <div className={`${BCIN}ItemContainerPhone`}>
            <button className={`${BCIN}SortButton`}><FaSort className={`${BCIN}FaSort`}/></button>
            <button className={`${BCIN}FilterButton`}><RiFilterFill className={`${BCIN}RiFilterFill`}/></button>
        </div>

        <div className={`${BCIN}ItemContainerEmail`}>
            <button className={`${BCIN}SortButton`}><FaSort className={`${BCIN}FaSort`}/></button>
            <button className={`${BCIN}FilterButton`}><RiFilterFill className={`${BCIN}RiFilterFill`}/></button>
        </div>

        {/* <div className={`${BCIN}ItemContainerLang`}>
          <h4 className={`${BCIN}ItemH4`}>1st Lang</h4>
        </div> */}

        {/* <div className={`${BCIN}ItemContainerLang`}>
          <h4 className={`${BCIN}ItemH4`}>2nd Lang</h4>
        </div> */}

        {/* <div className={`${BCIN}ItemContainerInst`}>
          <h4 className={`${BCIN}ItemH4`}>1st Inst</h4>
        </div> */}

        {/* <div className={`${BCIN}ItemContainerInst`}>
          <h4 className={`${BCIN}ItemH4`}>2nd Inst</h4>
        </div> */}

      </div>

    </>
  );
}

//===================FUNCTION EXPORT====================//
export default EmployeeListSort;
