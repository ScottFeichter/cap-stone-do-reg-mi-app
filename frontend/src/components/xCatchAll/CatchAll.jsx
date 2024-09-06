//============CSS IMPORT AND BASE CLASS NAME============//

const BASE_CLASS_NAME = "CatchAll";
import './CatchAll.css';

//==================PROGRAM IMPORTS=====================//
import { TbError404 } from "react-icons/tb";
import { TbFaceIdError } from "react-icons/tb";
import { FaHeartBroken } from "react-icons/fa";
import { ImHeartBroken } from "react-icons/im";

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function CatchAll(){



//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BASE_CLASS_NAME}Main`}>

        <h1 className={`${BASE_CLASS_NAME}H1`}>404 Page Not Found</h1>
            <div className={`${BASE_CLASS_NAME}Div`}>
                    <h3 className={`${BASE_CLASS_NAME}H3`}>Not all those who wander are lost...</h3>

                    <FaHeartBroken id={`${BASE_CLASS_NAME}FaHeartBroken`}/>

                    <h3 className={`${BASE_CLASS_NAME}H3`}>...but it seems you may have taken a wrong turn.</h3>
            </div>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default CatchAll;
