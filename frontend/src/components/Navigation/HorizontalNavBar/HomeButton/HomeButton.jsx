//============CSS IMPORT AND BASE CLASS NAME============//
const BCIN = "HomeButton";
import './HomeButton.css';

//==================PROGRAM IMPORTS=====================//
import { IoHome } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom'

//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function HomeButton(){
    const navigate = useNavigate()

    const handleHomeClick = () => {
        async () =>
        // await dispatch(spotsActions.search()).then(() => navigate(`/'`));
        navigate(`/'`);
      }

//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>
            <NavLink id={`${BCIN}Button`} onClick={handleHomeClick}>
                <IoHome id={`${BCIN}IoHome`} ></IoHome>
            </NavLink>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default HomeButton;
