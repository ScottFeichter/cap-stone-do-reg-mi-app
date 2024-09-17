//============CSS IMPORT AND BASE CLASS NAME============//

// const BCIN = "FacilityDetails";

import './FacilityDetails.css';

//==================PROGRAM IMPORTS=====================//
import {useNavigate} from 'react-router-dom';
// import { useSelector } from 'react-redux';

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function FacilityDetails(props){

    const navigate = useNavigate()

    // const branches = useSelector(state => state.branches.branches)
    const facility = props.facility;

    // const facilityObjectKeys = Object.keys(facility);
    // const facilityObjectValues = Object.values(facility);
    // const facilityObjectEntries = Object.entries(facility);

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

        <main id="FacilityDetailsMain">

                <div id='FacilityDetailsForm' >
{/* form section 1---------------------------------------------------------- */}

                    <section id="FacilityDetailsFormSection1">

                        <h4 id="FacilityDetailsFormSection1H4">Information</h4>

                        <div id='nameContainer' className='FacilityDetailsFormLabelInputContainer'>
                                <div className='FacilityDetailsFormLabel'>{"ID"}</div>
                                <div className='FacilityDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='FacilityDetailsFormInput'>{facility.id ? facility.id : nullReplacer}</div>
                        </div>


                        <div id='nameContainer' className='FacilityDetailsFormLabelInputContainer'>
                                <div className='FacilityDetailsFormLabel'>{"Name"}</div>
                                <div className='FacilityDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='FacilityDetailsFormInput'>{facility.name ? facility.name : nullReplacer}</div>
                        </div>


                        <div id='branchIdContainer' className='FacilityDetailsFormLabelInputContainer'>
                                <div className='FacilityDetailsFormLabel'>{"Branch ID"}</div>
                                <div className='FacilityDetailsFormInfoDivider'>{infoDivider}</div>
                                <div className='FacilityDetailsFormInput'>{facility.branch_Id ? facility.branch_Id : nullReplacer}</div>
                        </div>


                    </section>

                    <hr className='FacilityDetailsHr'></hr>
{/* form section 2---------------------------------------------------------- */}



                        <div id="FacilityDetailsButtonContainer">
                            <button
                                id="FacilityDetailsButton"
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
export default FacilityDetails;
