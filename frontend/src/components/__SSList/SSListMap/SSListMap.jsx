//============CSS IMPORT AND BASE CLASS NAME============//

const BCIN = "SSListMap";
import './SSListMap.css';

//==================PROGRAM IMPORTS=====================//

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { useState } from 'react';

//================COMPONENT IMPORTS=====================//

import SSListItem from './SSListItem/SSListItem.jsx';


// import ListElePagination from '../ListElePagination/ListElePagination.jsx';


//===============FUNCTION DECLARATION===================//
function SSListMap(){
// console.log("list SSListMap: ", list);

// let keysStatus = useSelector(state => state?.employees?.employeeKeysStatus);
let list = useSelector(state => state?.employees?.employees);
console.log("SSListMap list[0]: ", list[0]);


// =========================COMPARE HELPER FUNCTION========================== //

// function compare( a, b ) {
//   if ( a < b ){
//     return -1;
//   }
//   if ( a > b ){
//     return 1;
//   }
//   return 0;
// }



// console.count("list before sort: ", list, "keysStatus before sort: ", keysStatus);

// use effect does not work on the redux reducer state?
// primitive vs non primitive dependencies
// component vs react vs browser
// useEffect runs AFTER the component render?
// updating function?
// clean up function?

// useEffect(() => {


//     if (keysStatus[0].ID === 'asce') {
//       console.log("asce");
//       // list.sort((a, b) => {return a.id - b.id});
//       list.sort((employee1, employee2) => compare(employee1.id, employee2.id));

//     } else if (keysStatus[0].ID === 'desc') {
//       console.log("desc");
//       // list.sort((a, b) => {return b.id - a.id});
//       list.sort((employee1, employee2) => compare(employee2.id, employee1.id));
//     }

//   console.log("keysStatus in useEffect ran - list: ", list, "keysStatus: ", keysStatus);

// }, [keysStatus[0].ID]);


// console.log("list after sort: ", list);


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
   if(list[0] === undefined) return null;


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
