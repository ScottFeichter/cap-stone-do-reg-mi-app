//============================ CSS IMPORT AND BASE CLASS NAME===================================//

import './EmployeeDetailsKeyValue.css';
const BASE_CLASS_NAME = "EmployeeDetailsKeyValue";

//======================================OTHER IMPORTS===========================================//


//===================================FUNCTION DECLARATION=======================================//
function EmployeeDetailsKeyValue({k, v}){




//===================================FUNCTION RETURN========================================//
    return (<>
        <main className={`${BASE_CLASS_NAME}Main`}>
            <section className={`${BASE_CLASS_NAME}Section`}>
                <div className={`${BASE_CLASS_NAME}Div`}>
                    <p className={`${BASE_CLASS_NAME}P`}>{k}</p>
                </div>
                <div className={`${BASE_CLASS_NAME}Div`}>
                    <p className={`${BASE_CLASS_NAME}P`}>{v}</p>
                </div>


            </section>
        </main>
    </>)
}

//===================================FUNCTION EXPORT=========================================//
export default EmployeeDetailsKeyValue;
