//============CSS IMPORT AND BASE CLASS NAME============//

// const BCIN = "ProfileInformationContainer";
import './ProfileInformationContainer.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//

import camelCaseToTitleCase from "../../_Helpers/camelCaseToTitleCase/camelCaseToTitleCase.js";


//===============FUNCTION DECLARATION===================//
function ProfileInformationContainer(props){
    // console.log("props", props);

    const k = props.info[0];
    const v = props.info[1];

    const infoDivider = ":";
    const nullReplacer = `- -`





//=================FUNCTION RETURN======================//
    return (<>

            <div className='ProfileDetailsFormLabelInputContainer'>
                <div className='ProfileDetailsFormLabel'>{camelCaseToTitleCase(k)}</div>
                <div className='ProfileDetailsFormInfoDivider'>{infoDivider}</div>
                <div className='ProfileDetailsFormInput'>{v ? v : nullReplacer}</div>
            </div>

    </>)
}

//===================FUNCTION EXPORT====================//
export default ProfileInformationContainer;
