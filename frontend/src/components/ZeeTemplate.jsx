//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "ZeeTemplate";
import './ZeeTemplate.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function ZeeTemplate(){





//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>
            <div className={`${BCIN}Div`}>
                <h1 className={`${BCIN}H1`}></h1>
                    <p className={`${BCIN}P`}></p>
            </div>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default ZeeTemplate;
