
import './Navigation.css';
import { useSelector } from 'react-redux';
import VerticalNavBar from './VerticalNavBar/VerticalNavBar.jsx';
import HorizontalNavBar from './HorizontalNavBar/HorizontalNavBar.jsx';

function Navigation(){
    const user = useSelector(state => state.session.user);


  return (
    <>
     <main id="NavigationMain">
        <HorizontalNavBar user={user}/>
        <VerticalNavBar />
      </main>
    </>
  );
}

export default Navigation;
