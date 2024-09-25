//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListMap";
import './SSListMap.css';

//==================PROGRAM IMPORTS=====================//

// import { useState } from 'react';

//================COMPONENT IMPORTS=====================//

import SSListItem from './SSListItem/SSListItem.jsx';

// import ListElePagination from '../ListElePagination/ListElePagination.jsx';


//===============FUNCTION DECLARATION===================//
function SSListMap({list}){

// console.log("list SSListMap: ", list);
//----------------------PAGINATION----------------------//

    // const [currentPage, setCurrentPage] = useState(1);

    // const [listElesPerPage, setEmployeesPerPage] = useState(30);
    // setEmployeesPerPage(30);


    // const lastPostIndex = currentPage * listElesPerPage;
    // const firstPostIndex = lastPostIndex - listElesPerPage;

    // let currentPost;
    // const currentPost = currentPost = list.slice(firstPostIndex, lastPostIndex);

    // if(list !== undefined && list.length !== 0) {
      // console.log("line 29");
      // currentPost = list.slice(firstPostIndex, lastPostIndex);
    // } else {
      // console.log("line 32")
      // list = [{test1: "test1"},{test2: "test"}];
      // currentPost = list.slice(firstPostIndex, lastPostIndex);
      // dispatch(thunkGetEmployeesAll());
      // navigate('/listEles');
    // }


    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log("list 41: ", list);
    // console.log("currentPage: ", currentPage, "listElesPerPage : ", listElesPerPage, "lastPostIndex: ", lastPostIndex, "firstPostIndex: ", firstPostIndex, "currentPost: ", currentPost, "paginate: ");


    // THE MAP IS OVER CURRENT POST WHEN USING PAGINATION



   if(list === undefined) return null;


//=================FUNCTION RETURN======================//
    return (<>
        <main className={`${BCIN}Main`}>
            <div className={`${BCIN}Div`}>

                {list.map((listEle, idx) => {
                    return (
                      <SSListItem
                      listEle={listEle}
                      key={idx}
                      // totalPages={list.length}
                      // listElesPerPage={listElesPerPage}
                      />
                    );
                 })
                }


                {/* <ListElePagination
                listElesPerPage={listElesPerPage}
                totalPages={list.length + 1}
                paginate={paginate}
                /> */}


            </div>
        </main>




    </>)
}

//===================FUNCTION EXPORT====================//
export default SSListMap;
