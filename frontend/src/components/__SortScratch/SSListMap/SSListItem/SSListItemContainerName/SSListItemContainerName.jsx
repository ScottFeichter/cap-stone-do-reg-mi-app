//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListItemContainerName";
import './SSListItemContainerName.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//

import { Link } from "react-router-dom";

//===============FUNCTION DECLARATION===================//
function SSListItemContainerName({route, id, k, v}){


    console.log("Name: ", "k: ", k, "v", v);


//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>

            <Link
                to={`/${route}/${id}`}
                // state={{employee: employee}}
                className={`${BCIN}P`}>
                    {v}
                {/* {employee.firstName + " " + employee.lastName} */}
            </Link>

        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListItemContainerName;
