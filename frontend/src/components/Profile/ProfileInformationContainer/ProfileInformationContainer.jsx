//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "ProfileInformationContainer";
import './ProfileInformationContainer.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function ProfileInformationContainer(props){
    // console.log("props", props);

    const k = props.info[0];
    const v = props.info[1];

    const infoDivider = ":";
    const nullReplacer = `- -`





//=================FUNCTION RETURN======================//
    return (<>

            <div id='firstName1Container' className='ProfileDetailsFormLabelInputContainer'>
                <div className='ProfileDetailsFormLabel'>{k}</div>
                <div className='ProfileDetailsFormInfoDivider'>{infoDivider}</div>
                <div className='ProfileDetailsFormInput'>{v ? v : nullReplacer}</div>
            </div>

    </>)
}

//===================FUNCTION EXPORT====================//
export default ProfileInformationContainer;
