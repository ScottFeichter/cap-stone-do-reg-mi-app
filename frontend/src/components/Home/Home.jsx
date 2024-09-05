import './Home.css';

// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Clock from './Clock/Clock';

function Home() {
  const sessionUser = useSelector(state => state.session.user);


  return(
    <>
        <main id="HomeMain">
          {/* <h1 id="HomeH1">Home</h1> */}
          <h2 id="HomeH2">Welcome back {sessionUser.username}!</h2>
           <div id="HomeDiv">
              <div id="HomeDivClock">
                  <Clock id="HomeClock"/>
              </div>
              <h3 id="HomeH3">Current Local Time</h3>


           </div>

        </main>

    </>
  )
}

export default Home;
