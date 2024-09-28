//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = 'EmployeesSearchBar';
import "./EmployeesSearchBar.css";

//==================PROGRAM IMPORTS=====================//

import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { json, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//================COMPONENT IMPORTS=====================//


// import * as searchActions from '../../../search'
import * as employeesActions from "../../../../redux/employeesReducer";


//===============FUNCTION DECLARATION===================//
function EmployeesSearchBar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  // this is the placeholder for the search bar input box
  const [placeHolder, setPlaceHolder] = useState("Search Employees");

  // this is the search value being captured in the input
  const [search, setSearch] = useState("");

  // this is the list of search suggestions based on search value
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  // cannot be state bc would be behind render and can't be used in a different useEffect
  let displayedSuggestions = [];




// ===========================USE EFFECT FOR SEARCH=============================== //

  /**
   * Runs everytime there is a change in the variable identified as "search"
   *
   * It captures the search value and checks for matches in employees (aka searchables)
   * The result is the array of employee objects
   * The array is identified as "suggestions"
   *
   * Then it asigns to an array identified as "displaySuggestions"
   * Which mirrors suggestions...
   * But only contains limited information from the employee object...
   * This is so the suggestion list is readable and helpful to the user
   *
   * Finally it sets the state variable identified as "searchSuggestions"
   * To the value of displayed suggestions
   * So that we can track and remember the displayed suggestions as needed...
   */
  useEffect(() => {

    if (!!search === false) return setSearchSuggestions([]);

    const suggestions = searchables.filter(
        (searchable) =>
            searchable.firstName.toLowerCase().includes(search) ||
            searchable.firstName.toUpperCase().includes(search) ||
            searchable.lastName.toUpperCase().includes(search.toUpperCase()) ||
            searchable.lastName.toLowerCase().includes(search.toLowerCase())
    );

    displayedSuggestions = suggestions.map((suggestion) =>`${suggestion.firstName} ${suggestion.lastName}`);

    setSearchSuggestions(displayedSuggestions);

  }, [search]);



// ===========================HANDLE SUBMIT=============================== //

  /**
   * This handles the search when user submits.
   *
   * User can submit by pressing maginfying glass or when input in focus pressing return.
   *
   * If the search is empty it will change the input box place holder to prompt user to enter a value.
   *
   *
   * If the search is not empty it will execute the search and redirect to results.
   *
   * @param {*} e
   * @returns
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search || search === undefined || search === "")
      return setPlaceHolder("Enter a value to search");



    // console.log("HANDLE SUBMIT SEARCH RAN");
    return navigate("/employeeSearchResults", {
      state: { suggestions: searchSuggestions },
    });
  };


// ===========================HANDLE SEARCH SUGGESTION SELECTION============================= //


  /**
   * This handler occurs if user clicks on a selection from the dropdown suggestions.
   * They should also be able to trigger this by tabBing to selection and pressing enter.
   *
   * It will set the variable identified as "search" to the e.target.value.
   *
   * Lastly it grabs the input element in the document and returns focus to it.
   * @param {*} e
   */
  const handleSearchSuggestionButton = (e) => {

    e.preventDefault();

    setSearch(e.target.value);

    document.getElementById(`${BCIN}Input`).focus();
  };



  // ===========================HANDLE FOCUS================================= //


  // /**
  //  * I am not using it.
  //  * It can be called when user focus on input.
  //  * @param {*} e
  //  */
  // const handleFocus = (e) => {
  //   console.log("handleFocus e: ", e.target.value)
  //   setSelectedSuggestion("")
  // }



  // ===========================HANDLE CHANGE================================= //


  /**
   * This controls the value of the search variable when there is a change to input.
   * It also resets the placeholder in case that it had change to the message for if user tried empty search.
   * @param {*} e
   * @returns
   */
  const handleChange = (e) => {
    // e.preventDefault();
    setPlaceHolder("Search Employees");
    return setSearch(e.target.value);
  };



// ===========================GET DATA TO SEARCH ============================== //
   // this must be at the bottom because the if cannot be above the hooks

   // this is the data that will be searched
   const employees = useSelector((state) => state?.employees?.employees);

   // this is an escape hatch if there is trouble getting data from state
   if (employees === null) {
     dispatch(employeesActions.employees());
     return null;
   }

   // this is in case the data needs to be screened (add filter if need screening)
   const searchables = employees;


//=================FUNCTION RETURN======================//
  return (
    <>
      <main id={`${BCIN}Main`}>

      <form id={`${BCIN}Form`} onSubmit={handleSubmit}>
        {/* <button id={`${BCIN}Button`}> */}
            <label id={`${BCIN}Label`}>
              <input
                id={`${BCIN}Input`}
                type={`text`}
                placeholder={placeHolder}
                value={search}
                onChange={(e) => handleChange(e)}
              />
            </label>
        {/* </button> */}
      </form>




        <ul id={`${BCIN}SuggestionsUl`}>
          {searchSuggestions.length !== 0
            ? searchSuggestions.map((ele) => (
                <li
                  key={searchSuggestions.indexOf(ele)}
                  className={`${BCIN}SuggestionsUlLi`}
                >
                  <button
                    onClick={handleSearchSuggestionButton}
                    value={ele}
                    className={`${BCIN}SuggestionsUlLiButton`}
                  >
                    {ele}
                  </button>
                </li>
              ))
            : ""}
        </ul>
      </main>
    </>
  );
}



//===================FUNCTION EXPORT====================//
export default EmployeesSearchBar;
