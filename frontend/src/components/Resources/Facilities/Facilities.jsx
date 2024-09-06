import './Facilities.css';
// import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import FacilitiesList from './FacilitiesList/FacilitiesList.jsx';
// import FacilitiesSearchBar from './FacilitiesSearch/SearchBar/FacilitiesSearchBar';

function Facilities() {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    navigate('/createNewFacilityForm');
  }


  return(
    <>
        <h1 id="FacilitiesH1">Facilities</h1>

        <main id="FacilitiesMain">

          {/* <FacilitiesSearchBar /> */}


            <nav id="FacilitiesNav">
              {/* <input type="text" id="FacilitiesSearchBar" placeholder="Search Facilities" ></input> */}

              <button id="FacilitiesCreateButton" onClick={handleClick}>Create New Facility</button>
            </nav>


            <FacilitiesList />

        </main>
    </>
  )
}

export default Facilities;
