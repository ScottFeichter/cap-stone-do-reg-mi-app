//============CSS IMPORT AND BASE CLASS NAME============//

const BASE_CLASS_NAME = "ZeeTemplate";
import './ZeeTemplate.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function ZeeTemplate(){





//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BASE_CLASS_NAME}Main`}>
            <div className={`${BASE_CLASS_NAME}Div`}>
                <h1 className={`${BASE_CLASS_NAME}H1`}></h1>
                    <p className={`${BASE_CLASS_NAME}P`}></p>
            </div>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default ZeeTemplate;
