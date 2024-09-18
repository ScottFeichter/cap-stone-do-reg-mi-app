//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "BranchDropDownFacilityList";
import './BranchDropDownFacilityList.css';

//==================PROGRAM IMPORTS=====================//


//================COMPONENT IMPORTS=====================//

// import FacilitiesListItem from "../../Facilities/FacilitiesList/FacilitiesListItem";
import BranchDropDownFacilityListItem from './BranchDropDownFacilityListItem';
import BranchDropDownFacilityListItemHeader from './BranchDropDownFacilityListItemHeader';


//===============FUNCTION DECLARATION===================//
function BranchDropDownFacilityList({facilitiesList, branchId}){

// console.log("facilitiesList: ", facilitiesList, "branchId: ", branchId);







//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>

                    <BranchDropDownFacilityListItemHeader />

                    {facilitiesList.map((facility) => {
                        // console.log("facility: ", facility);
                        if (facility.branch_Id === branchId) {
                        return (
                            <BranchDropDownFacilityListItem
                            facility={facility}

                            key={facility.id}
                            // totalPages={facilitiesList.length}
                            // facilitiesPerPage={facilitiesPerPage}
                            />
                        );
                      }
                    })}
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default BranchDropDownFacilityList;
