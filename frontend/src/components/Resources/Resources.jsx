import './Resources.css';

// import { useSelector } from 'react-redux';
import Branches from './Branches/Branches.jsx'
import Facilities from './Facilities/Facilities.jsx'

function Resources() {
  // const branches = useSelector(state => state.branches.branches);
  // const facilities = useSelector(state => state.facilities.facilities);
  // console.log("branches: ", branches);
  // console.log("facilities: ", facilities);

  return(
    <>
        <main>
            <div>
                <Branches></Branches>
                <Facilities></Facilities>
            </div>
        </main>
    </>
  )
}

export default Resources;
