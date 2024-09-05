//============CSS IMPORT AND BASE CLASS NAME============//

const BASE_CLASS_NAME = "CatchAll";
import './CatchAll.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function CatchAll(){





//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BASE_CLASS_NAME}Main`}>
            <div className={`${BASE_CLASS_NAME}Div`}>
                <h1 className={`${BASE_CLASS_NAME}H1`}>404 Page not found</h1>
                    <p className={`${BASE_CLASS_NAME}P`}>
                        Not all those who wander are lost, but it seems you may have taken a wrong turn.</p>
            </div>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default CatchAll;
