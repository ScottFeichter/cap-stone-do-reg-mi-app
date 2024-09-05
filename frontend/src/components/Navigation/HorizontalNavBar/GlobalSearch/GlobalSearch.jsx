//============CSS IMPORT AND BASE CLASS NAME============//

const BASE_CLASS_NAME = "GlobalSearch";
import './GlobalSearch.css';

//==================PROGRAM IMPORTS=====================//
// import { IoSearch } from "react-icons/io5";
// import { TbDatabaseSearch } from "react-icons/tb";
import { TbWorldSearch } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";


//================COMPONENT IMPORTS=====================//


//===============FUNCTION DECLARATION===================//
function GlobalSearch(){


    const navigate = useNavigate();
    // const stocks = useSelector((state) => state?.navStocks?.navStocks);
    const globalState = [window.store.getState()]
    // console.log("globalState", globalState);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(navStocksActions.navStocks());
    //   console.log("FROM SEARCHBAR.JSX dispatch(navStocksActions.navStocks());")
    // }, []);

    // =======================STATEFUL VARIABLES=======================
    // some of these may not be used after all

    const [placeHolder, setPlaceHolder] = useState("Global Search");

    const [search, setSearch] = useState("");

    const [searchSuggestions, setSearchSuggestions] = useState([]);

    // const [selectedSuggestion, setSelectedSuggestion] = useState();

    // const [stockDetailTicker, setStockDetailTicker] = useState();

    // const [stockDetail, setStockDetail] = useState();

    // const [errors, setErrors] = useState({});

    // =======================GLOBAL VARIABLES (NOT STATEFUL)=======================
    // some of these may not be used after all

    let displayedSuggestions = [];

    // ===========================USE EFFECT FOR SEARCH===============================

    /**
     * This useEffect runs everytime there is a change in the variable search
     * It captures the search value and filters it through the stocks (aka searchables)
     * The result is the array of stock objects named suggestions
     * Then it creates an array called displaySuggestions which mirrors suggestions...
     * But it only contains a string of name, firstName1, and ceo...
     * This is so the suggestion list is readable and helpful to the user
     */
    useEffect(() => {
      // console.log("search ===========", search, typeof search, !!search);
      if (!!search === false) return setSearchSuggestions([]);

      // const suggestions = searchables.filter(
      //   (searchable) =>
      //     searchable.name.toLowerCase().includes(search) ||
      //     searchable.name.toUpperCase().includes(search) ||
      //     searchable.firstName1.toUpperCase().includes(search.toUpperCase()) ||
      //     searchable.firstName1.toLowerCase().includes(search.toLowerCase())
      // );
      // displayedSuggestions = suggestions;
      // .map(
      //   (suggestion) =>
      //     `${suggestion.name} ${" - "} ${
      //       suggestion.firstName1
      //     } ${" - "} ${suggestion.ceo}`
      // );

      // setSearchSuggestions(suggestions);
      // console.log("suggestions: ", suggestions)
      // console.log("displayedSuggestions ==== ", displayedSuggestions)
      // console.log("searchSuggestions: ", searchSuggestions)
    }, [search]);

    // ===========================HANDLE SUBMIT FOR SEARCH===============================
    /**
     * This handles the search when user submits.
     * User can submit by pressing maginfying glass or when input in focus pressing return.
     * If the search is empty it will change the place holder to indicate to enter a value.
     * If the search is not empty it will execute the search and redirect.
     * @param {*} e
     * @returns
     */
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!search || search === undefined || search === "")
        return setPlaceHolder("Enter a value to search");

      // console.log("e.target.value in handlesubmit", e.target.value);
      // console.log("search = ", search);

      // if(e.target.value === "" || e.target.value === undefined){
      //   setSearch("");
      //   return
      // }
if(displayedSuggestions);
      // setErrors({});

      // dispatch(searchActions.search({search}));

      // console.log("THIS IS PSUEDO FOR A SEARCH RUNNING WITH: ", search);

      // setSelectedSuggestion("")

      setSearch("");

      // console.log("HANDLE SUBMIT SEARCH RAN");

      return navigate("/searchResults", {
        state: { suggestions: searchSuggestions },
      });
    };

    // ===========================HANDLE SEARCH SUGGESTION BUTTON===============================

    /**
     * This handler occurs when user clicks on a selection from the dropdown suggestions.
     * It will set the search variable to the e.target.value.
     * Then is will set the selectedSuggestion to e.target.value also though this may be unnecessary.
     * Lastly it grabs the input element in the document and returns focus to it.
     * @param {*} e
     */
    const handleSearchSuggestionButton = (e) => {
      e.preventDefault();
      // console.log("e.target.value============== ", e.target.value);

      // setSelectedSuggestion(e.target.value);
      // console.log("selectedSelection", selectedSuggestion)

      // let ticker = "";
      // for (let i = 0; i < 6; i++) {
      //   if (
      //     e.target.value[i] === "" ||
      //     e.target.value[i] === undefined ||
      //     e.target.value[i] === "-"
      //   )
      //     break;

      //   if (e.target.value[i] !== "" && e.target.value[i] !== undefined) {
      //     ticker += e.target.value[i];
      //   }
      // }
      // // console.log("ticker", ticker, stocks);
      // for (let i = 0; i < stocks.length; i++) {
      //   if (stocks[i].name === ticker.trim()) {
      //     displayedSuggestions = [{ test: "test" }];
      //     // console.log(displayedSuggestions);

      //     document.getElementById("SearchBarInput").focus();
      //     setSearch(ticker);
      //     // console.log(search);
      //     setSearch("");
      //     return navigate(`/stocks/${stocks[i].id}`, {
      //       state: { suggestions: stocks[i].id },
      //     });
      //   }
      // }

      // const stockDetail = searchSuggestions.find(suggestion => suggestion.name = ticker.toUpperCase())

      // setSearch(ticker);
      // setStockDetailTicker(ticker);
      // setStockDetail(stockDetail)

      // console.log("handleSearchSuggestionButton ran setSearch to: ", search, "setStockDetailTicker to: ", stockDetailTicker, "setStockDetail to: ", stockDetail);
    };

    // ===========================HANDLE FOCUS ===============================

    // /**
    //  * I am not using it.
    //  * It can be called when user focus on input.
    //  * @param {*} e
    //  */
    // const handleFocus = (e) => {
    //   console.log("handleFocus e: ", e.target.value)
    //   setSelectedSuggestion("")
    // }

    // ===========================HANDLE CHANGE ===============================
    /**
     * This controls the value of the search variable when there is a change to input.
     * It also resets the placeholder in case that it had change to the message from if user tried empty search.
     * @param {*} e
     * @returns
     */
    const handleChange = (e) => {
      // e.preventDefault();
      setPlaceHolder("Search");
      return setSearch(e.target.value);
    };

    // ===========================RETURN ===============================
    // =======================GRABING STOCK DATA FROM STORE=======================
    // const navStocks = useSelector((store) => store.navStocks.navStocks);
    // console.log("navStocks from searchBar = ", navStocks)
    if (globalState === null) return null;

    // const searchables = globalState.filter((stock) => stock.firstName1 !== null);

    // const searchables = ["AAPL", "AMZN", "BUTT"]
    // console.log("searchables from searchbar ============= ", searchables)


//=================FUNCTION RETURN======================//
    return (<>



    <main id={`${BASE_CLASS_NAME}Main`}>

        <form id={`${BASE_CLASS_NAME}Form`} onSubmit={handleSubmit}>
          <label id={`${BASE_CLASS_NAME}Label`}>
            <TbWorldSearch onClick={handleSubmit} id="TbWorldSearch" />
            <input
              id={`${BASE_CLASS_NAME}Input`}
              type="text"
              value={search}
              placeholder={placeHolder}
              // onFocus={handleFocus} --ended up not needing this keep just in case
              // onChange={(e) => setSearch(e.target.value)} --this is the old version keep just in case
              onChange={(e) => handleChange(e)}
            />
          </label>
          {/* {errors.search && <p>{errors.search}</p>} */}

          <button type="submit" id={`${BASE_CLASS_NAME}Button`}>
            submit
          </button>
        </form>

        <ul id={`${BASE_CLASS_NAME}SuggestionsUl`}>
          {searchSuggestions.length !== 0
            ? searchSuggestions.map((ele) => (
                <li
                  key={searchSuggestions.indexOf(ele)}
                  className={`${BASE_CLASS_NAME}SuggestionsUlLi`}
                >
                  <button
                    onClick={handleSearchSuggestionButton}
                    value={ele}
                    className={`${BASE_CLASS_NAME}SuggestionsUlLiButton`}
                  >
                    {ele}
                  </button>
                </li>
              ))
            : ""}
        </ul>
      </main>



    </>)
}

//===================FUNCTION EXPORT====================//
export default GlobalSearch;
