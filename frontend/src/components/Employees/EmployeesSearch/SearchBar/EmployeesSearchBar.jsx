// import { useEffect, useState } from "react";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// // import * as searchActions from '../../../search'
// // import * as employeesActions from "../../../../redux/employeesReducer";
// // import { useDispatch } from "react-redux";
// import "./EmployeesSearchBar.css";

// // NOTE: DOC STRINGS MAY NEED UPDATED SORRY!!!!!! THINGS CHANGE AND I FORGET TO UPDATE THEM...

// function EmployeesSearchBar() {
//   const navigate = useNavigate();
//   const employees = useSelector((state) => state?.employees?.employees);
//   // const dispatch = useDispatch();

//   // useEffect(() => {
//   //   dispatch(employeesActions.employees());
//   //   console.log("FROM SEARCHBAR.JSX dispatch(employeesActions.employees());")
//   // }, []);

//   // =======================STATEFUL VARIABLES=======================
//   // some of these may not be used after all

//   const [placeHolder, setPlaceHolder] = useState("Search");

//   const [search, setSearch] = useState("");

//   const [searchSuggestions, setSearchSuggestions] = useState([]);

//   // const [selectedSuggestion, setSelectedSuggestion] = useState();

//   // const [stockDetailTicker, setStockDetailTicker] = useState();

//   // const [stockDetail, setStockDetail] = useState();

//   // const [errors, setErrors] = useState({});

//   // =======================GLOBAL VARIABLES (NOT STATEFUL)=======================
//   // some of these may not be used after all

//   let displayedSuggestions = [];

//   // ===========================USE EFFECT FOR SEARCH===============================

//   /**
//    * This useEffect runs everytime there is a change in the variable search
//    * It captures the search value and filters it through the employees (aka searchables)
//    * The result is the array of stock objects named suggestions
//    * Then it creates an array called displaySuggestions which mirrors suggestions...
//    * But it only contains a string of name_symbol, company_name, and ceo...
//    * This is so the suggestion list is readable and helpful to the user
//    */
//   useEffect(() => {
//     // console.log("search ===========", search, typeof search, !!search);
//     if (!!search === false) return setSearchSuggestions([]);

//     const suggestions = searchables.filter(
//       (searchable) =>
//         searchable.firstName1.toLowerCase().includes(search) ||
//         searchable.firstName1.toUpperCase().includes(search) ||
//         // searchable.firstName2.toLowerCase().includes(search) ||
//         // searchable.firstName2.toUpperCase().includes(search) ||
//         // searchable.middleName.toLowerCase().includes(search) ||
//         // searchable.middleName.toUpperCase().includes(search) ||
//         searchable.lastName1.toUpperCase().includes(search.toUpperCase()) ||
//         searchable.lastName1.toLowerCase().includes(search.toLowerCase())
//         // searchable.lastName2.toUpperCase().includes(search.toUpperCase()) ||
//         // searchable.lastName2.toLowerCase().includes(search.toLowerCase())
//     );
//     displayedSuggestions = suggestions.map(
//       (suggestion) =>
//         `${suggestion.firstName1} ${suggestion.lastName1} `
//     );

//     setSearchSuggestions(displayedSuggestions);
//     // console.log("suggestions: ", suggestions)
//     // console.log("displayedSuggestions ==== ", displayedSuggestions)
//     // console.log("searchSuggestions: ", searchSuggestions)
//   }, [search]);

//   // ===========================HANDLE SUBMIT FOR SEARCH===============================
//   /**
//    * This handles the search when user submits.
//    * User can submit by pressing maginfying glass or when input in focus pressing return.
//    * If the search is empty it will change the place holder to indicate to enter a value.
//    * If the search is not empty it will execute the search and redirect.
//    * @param {*} e
//    * @returns
//    */
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!search || search === undefined || search === "")
//       return setPlaceHolder("Enter a value to search");

//     // console.log("e.target.value in handlesubmit", e.target.value);
//     // console.log("search = ", search);

//     // if(e.target.value === "" || e.target.value === undefined){
//     //   setSearch("");
//     //   return
//     // }

//     // setErrors({});

//     // dispatch(searchActions.search({search}));

//     // console.log("THIS IS PSUEDO FOR A SEARCH RUNNING WITH: ", search);

//     // setSelectedSuggestion("")

//     setSearch("");

//     // console.log("HANDLE SUBMIT SEARCH RAN");

//     return navigate("/searchResults", {
//       state: { suggestions: searchSuggestions },
//     });
//   };

//   // ===========================HANDLE SEARCH SUGGESTION BUTTON===============================

//   /**
//    * This handler occurs when user clicks on a selection from the dropdown suggestions.
//    * It will set the search variable to the e.target.value.
//    * Then is will set the selectedSuggestion to e.target.value also though this may be unnecessary.
//    * Lastly it grabs the input element in the document and returns focus to it.
//    * @param {*} e
//    */
//   const handleSearchSuggestionButton = (e) => {
//     e.preventDefault();
//     // console.log("e.target.value============== ", e.target.value);

//     // setSelectedSuggestion(e.target.value);
//     // console.log("selectedSelection", selectedSuggestion)

//     let firstName1 = e.target.value;

//     // console.log("firstName1 line 152", firstName1, employees);
//     for (let i = 0; i < employees.length; i++) {
//       if (employees[i].firstName1 === firstName1) {
//         displayedSuggestions = [{ test: "test" }];
//         // console.log(displayedSuggestions);

//         document.getElementById("EmployeesSearchBarInput").focus();
//         setSearch(firstName1);
//         // console.log(search);
//         setSearch("");
//         return navigate(`/employees/${employees[i].id}`, {
//           state: { suggestions: employees[i].id },
//         });
//       }
//     }

//     // const stockDetail = searchSuggestions.find(suggestion => suggestion.name_symbol = name.toUpperCase())

//     // setSearch(name);
//     // setStockDetailTicker(name);
//     // setStockDetail(stockDetail)

//     // console.log("handleSearchSuggestionButton ran setSearch to: ", search, "setStockDetailTicker to: ", stockDetailTicker, "setStockDetail to: ", stockDetail);
//   };

//   // ===========================HANDLE FOCUS ===============================

//   // /**
//   //  * I am not using it.
//   //  * It can be called when user focus on input.
//   //  * @param {*} e
//   //  */
//   // const handleFocus = (e) => {
//   //   console.log("handleFocus e: ", e.target.value)
//   //   setSelectedSuggestion("")
//   // }

//   // ===========================HANDLE CHANGE ===============================
//   /**
//    * This controls the value of the search variable when there is a change to input.
//    * It also resets the placeholder in case that it had change to the message from if user tried empty search.
//    * @param {*} e
//    * @returns
//    */
//   const handleChange = (e) => {
//     // e.preventDefault();
//     setPlaceHolder("Search");
//     return setSearch(e.target.value);
//   };

//   // ===========================RETURN ===============================
//   // =======================GRABING STOCK DATA FROM STORE=======================
//   const navEmployees = useSelector((store) => store.employees.employees);
//   // console.log("navEmployees from searchBar = ", navEmployees)
//   if (navEmployees === null) return null;

//   const searchables = navEmployees;

//   // const searchables = navEmployees.filter((navEmployee) => {
//   //   navEmployee.firstName1 !== null
//   // });

//   // const searchables = ["AAPL", "AMZN", "BUTT"]
//   // console.log("searchables from searchbar ============= ", searchables)

//   return (
//     <>
//       <main id="EmployeesSearchBarMain">
//         <form id="EmployeesSearchBarForm" onSubmit={handleSubmit}>
//           <label id="EmployeesSearchBarLabel">
//             <FaMagnifyingGlass onClick={handleSubmit} id="FaMagnifyingGlass" />
//             <input
//               id="EmployeesSearchBarInput"
//               type="text"
//               value={search}
//               placeholder={placeHolder}
//               // onFocus={handleFocus} --ended up not needing this keep just in case
//               // onChange={(e) => setSearch(e.target.value)} --this is the old version keep just in case
//               onChange={(e) => handleChange(e)}
//             />
//           </label>
//           {/* {errors.search && <p>{errors.search}</p>} */}

//           <button type="submit" id="EmployeesSearchBarButton">
//             submit
//           </button>
//         </form>

//         <ul id="EmployeesSearchBarSuggestionsUl">
//           {searchSuggestions.length !== 0
//             ? searchSuggestions.map((ele) => (
//                 <li
//                   key={searchSuggestions.indexOf(ele)}
//                   className="EmployeesSearchBarSuggestionsUlLi"
//                 >
//                   <button
//                     onClick={handleSearchSuggestionButton}
//                     value={ele}
//                     className="EmployeesSearchBarSuggestionsUlLiButton"
//                   >
//                     {ele}
//                   </button>
//                 </li>
//               ))
//             : ""}
//         </ul>
//       </main>
//     </>
//   );
// }

// export default EmployeesSearchBar;
