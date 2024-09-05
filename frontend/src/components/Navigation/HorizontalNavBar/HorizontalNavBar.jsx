import './HorizontalNavBar.css';
// import { useSelector } from 'react-redux';

import GlobalSearch from './GlobalSearch/GlobalSearch.jsx';
import HomeButton from './HomeButton/HomeButton.jsx';
import ProfileButton from './ProfileButton/ProfileButton.jsx'
import LogoutButton from './LogoutButton/LogoutButton.jsx';
import ModeButton from './ModeButton/ModeButton.jsx';


function HorizontalNavBar() {

  // const sessionUser = useSelector(state => state.session.user);



  return(
    <>
      <main id="HorizontalNavBarMain">

          <HomeButton />

          <ModeButton />

          <GlobalSearch />

          <ProfileButton />

          <LogoutButton />

      </main>
    </>
  )
}

export default HorizontalNavBar;
