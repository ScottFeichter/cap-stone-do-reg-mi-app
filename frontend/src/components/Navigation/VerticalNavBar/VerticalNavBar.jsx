import './VerticalNavBar.css';
import { useNavigate } from "react-router-dom";

function VerticalNavBar(){
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);

    //============================FOR USER TYPE ACCESS START====================================

    // const [showResources, setShowResources] = useState(true);
    // const [showDepartments, setShowDepartments] = useState(true);
    // const [showStudents, setShowStudents] = useState(true);
    // const [showEmployees, setShowEmployees] = useState(true);

    // const liResourcesClassName = "NavigationDropdownUlLi" + (showResources ? "" : " NavigationDropdownUlLiHidden");

    // const liDepartmentsClassName = "NavigationDropdownUlLi" + (showDepartments ? "" : " NavigationDropdownUlLiHidden");

    // const liStudentsClassName = "NavigationDropdownUlLi" + (showStudents ? "" : " NavigationDropdownUlLiHidden");

    // const liEmployeesClassName = "NavigationDropdownUlLi" + (showEmployees ? "" : " NavigationDropdownUlLiHidden");

    //============================FOR USER TYPE ACCESS END====================================


    //============================VERTICAL NAV HANDLERS START=================================



      const handleResourcesClick = (e) => {
        e.preventDefault;
        navigate('/resources/')
      }

      const handleDepartmentsClick = (e) => {
        e.preventDefault;
        navigate('/departments')
      }

      const handleStudentsClick = (e) => {
        e.preventDefault;
        navigate('/students')
      }

      const handleTeachersClick = (e) => {
        e.preventDefault;
        navigate('/teachers')
      }

      const handleEmployeesClick = (e) => {
        e.preventDefault;
        navigate('/employees')
      }
      //============================VERTICAL NAV HANDLERS END===================================


  return (
        <>
            <div id="VerticalNavBarDivContainer">

                    <button onClick={handleResourcesClick} className='VerticalNavBarButton'>Resources</button>
                    <button onClick={handleDepartmentsClick} className='VerticalNavBarButton'>Departments</button>
                    <button onClick={handleTeachersClick} className='VerticalNavBarButton'>Teachers</button>
                    <button onClick={handleStudentsClick} className='VerticalNavBarButton'>Students</button>
                    <button onClick={handleEmployeesClick} className='VerticalNavBarButton'>Employees</button>

            </div>
        </>
    );
}

export default VerticalNavBar;
