//============================ CSS IMPORT AND BASE CLASS NAME===================================//

import './EmployeeDetailsKeyValue.css';
const BCIN = "EmployeeDetailsKeyValue";

//======================================OTHER IMPORTS===========================================//


//===================================FUNCTION DECLARATION=======================================//
function EmployeeDetailsKeyValue({k, v}){




//===================================FUNCTION RETURN========================================//
    return (<>
        <main className={`${BCIN}Main`}>
            <section className={`${BCIN}Section`}>
                <div className={`${BCIN}Div`}>
                    <p className={`${BCIN}P`}>{k}</p>
                </div>
                <div className={`${BCIN}Div`}>
                    <p className={`${BCIN}P`}>{v}</p>
                </div>


            </section>
        </main>
    </>)
}

//===================================FUNCTION EXPORT=========================================//
export default EmployeeDetailsKeyValue;
