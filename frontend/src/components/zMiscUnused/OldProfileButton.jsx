// //============CSS IMPORT AND BASE CLASS NAME============//

// // const BASE_CLASS_NAME = "OldProfileButton";
// import './OldProfileButton.css';

// //==================PROGRAM IMPORTS=====================//
// import { LuUserCircle2 } from "react-icons/lu";
// import { useState, useEffect, useRef } from "react";
// // import { useSelector } from "react-redux";

// //================COMPONENT IMPORTS=====================//
// // import OldProfileButtonDropdown from './OldProfileButtonDropdown.jsx'


// //===============FUNCTION DECLARATION===================//
// function OldProfileButton() {


//   const [showMenu, setShowMenu] = useState(false);
//   const ulRef = useRef();



//   // called onClick from button to toggle showMenu
//   const toggleMenu = () => {
//     if (showMenu) {
//       setShowMenu(false)
//       return;
//     }
//     setShowMenu(true);
//   };


//   // if showMenu is false return otherwise when showMenu is true
//   // add event listener for click anywhere on page
//   // and when click close Menu and set showMenu to false
//   useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = (e) => {
//       if (!ulRef.current.contains(e.target)) {
//         setShowMenu(false);
//       }
//     };

//     document.addEventListener('click', closeMenu);

//     return () => document.removeEventListener("click", closeMenu);
//   }, [showMenu]);





//   const ulClassName = "OldProfileButtonDropdownUl" + (showMenu ? "" : " OldProfileButtonDropdownUlHidden");


// //=================FUNCTION RETURN======================//
//   return (
//     <>
//       <main id="OldProfileButtonMain">

//         <button
//           onClick={toggleMenu}
//           ref={ulRef}
//           id="OldProfileButtonButton">
//             <LuUserCircle2
//             id="OldProfileButtonLuUserCircle2"/>
//         </button>

//         {/* <OldProfileButtonDropdown className={ulClassName}/> */}

//       </main>
//     </>
//   );
// }

// //===================FUNCTION EXPORT====================//
// export default OldProfileButton;
