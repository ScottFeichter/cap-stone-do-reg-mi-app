import './Branches.css';
// import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import BranchesList from './BranchesList/BranchesList.jsx';
// import BranchesSearchBar from './BranchesSearch/SearchBar/BranchesSearchBar';

function Branches() {
  const navigate = useNavigate();


  const handleClick = (e) => {
    e.preventDefault();
    navigate('/createNewBranchForm');
  }


  return(
    <>
        <h1 id="BranchesH1">Employee Departments</h1>

        <main id="BranchesMain">

          {/* <BranchesSearchBar /> */}


            <nav id="BranchesNav">
              {/* <input type="text" id="BranchesSearchBar" placeholder="Search Branches" ></input> */}

              <button id="BranchesCreateButton" onClick={handleClick}>Create New Employee Department</button>
            </nav>


            <BranchesList />

        </main>
    </>
  )
}

export default Branches;
