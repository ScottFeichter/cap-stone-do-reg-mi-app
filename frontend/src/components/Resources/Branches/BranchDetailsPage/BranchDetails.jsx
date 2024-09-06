//============CSS IMPORT AND BASE CLASS NAME============//

// const BASE_CLASS_NAME = "BranchDetails";

import './BranchDetails.css';

//==================PROGRAM IMPORTS=====================//
import {useNavigate} from 'react-router-dom';
// import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function BranchDetails(props){

    const navigate = useNavigate()

    // const branch = useSelector(state => state.branches.branches[1])
    const branch = props.branch;

    // const branchObjectKeys = Object.keys(branch);
    // const branchObjectValues = Object.values(branch);
    // const branchObjectEntries = Object.entries(branch);

    const infoDivider = ":";
    const nullReplacer = `- -`

//     function getKeyByValue(object, value) {
//         return Object.keys(object).find(key =>
//             object[key] === value);
//     }

//--------------------handleScroll-----------------------//

    const handleScroll = (e) => {
        e.preventDefault();
        // document.body.scrollTop = 0; // For Safari
        // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        navigate('/resources')
    }


//=================FUNCTION RETURN======================//
    return (<>

        <main id="BranchDetailsMain">

                <div id='BranchDetailsForm' >
{/* form section 1---------------------------------------------------------- */}

                    <section id="BranchDetailsFormSection1">

                        <h4 id="BranchDetailsFormSection1H4">Information</h4>

                        <div id='nameContainer' className='BranchDetailsFormLabelInputContainer'>
                                <div className='BranchDetailsFormLabel'>{"ID"}</div>
                                <div className='BranchDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='BranchDetailsFormInput'>{branch.id ? branch.id : nullReplacer}</div>
                        </div>


                        <div id='nameContainer' className='BranchDetailsFormLabelInputContainer'>
                                <div className='BranchDetailsFormLabel'>{"name"}</div>
                                <div className='BranchDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='BranchDetailsFormInput'>{branch.name ? branch.name : nullReplacer}</div>
                        </div>


                        <div id='streetContainer' className='BranchDetailsFormLabelInputContainer'>
                                <div className='BranchDetailsFormLabel'>{"street"}</div>
                                <div className='BranchDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='BranchDetailsFormInput'>{branch.street ? branch.street : nullReplacer}</div>
                        </div>

                        <div id='cityContainer' className='BranchDetailsFormLabelInputContainer'>
                                <div className='BranchDetailsFormLabel'>{"city"}</div>
                                <div className='BranchDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='BranchDetailsFormInput'>{branch.city ? branch.city : nullReplacer}</div>
                        </div>


                        <div id='stateContainer' className='BranchDetailsFormLabelInputContainer'>
                                <div className='BranchDetailsFormLabel'>{"state"}</div>
                                <div className='BranchDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='BranchDetailsFormInput'>{branch.state ? branch.state : nullReplacer}</div>
                        </div>


                        <div id='zipContainer' className='BranchDetailsFormLabelInputContainer'>
                                <div className='BranchDetailsFormLabel'>{"zip"}</div>
                                <div className='BranchDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='BranchDetailsFormInput'>{branch.zip ? branch.zip : nullReplacer}</div>
                        </div>




                    </section>

                    <hr className='BranchDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}



                        <div id="BranchDetailsButtonContainer">
                            <button
                                id="BranchDetailsButton"
                                type="submit"
                                onClick={handleScroll}
                                >Back
                            </button>
                        </div>

                </div> {/* form div end tag I think */}

        </main>

    </>)
}

//===================FUNCTION EXPORT====================//
export default BranchDetails;
