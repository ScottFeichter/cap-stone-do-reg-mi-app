//============CSS IMPORT AND BASE CLASS NAME============//
const BASE_CLASS_NAME = "HomeButton";
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
        <main className={`${BASE_CLASS_NAME}Main`}>
            <NavLink id={`${BASE_CLASS_NAME}Button`} onClick={handleHomeClick}>
                <IoHome id={`${BASE_CLASS_NAME}IoHome`} ></IoHome>
            </NavLink>
        </main>
    </>)
}

//===================FUNCTION EXPORT====================//
export default HomeButton;
