import { csrfFetch } from "./xCsrf";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const BRANCHES_SEARCH = "branch/search";
const BRANCHES_ALL = "branches/all";
const BRANCH_BY_ID = "branch/branchById";
const CREATE_BRANCH = "branch/createBranch";
const UPDATE_BRANCH = "branch/updateBranch";
const DELETE_BRANCH = "branch/deletedBranch";
const REMOVE_BRANCH_DATA_FROM_STORE = "branch/removeBranchDataFromStore";

/** ==============ACTION CREATORS:============================================*/

const branchesSearch = (branches) => {
  // console.log('BRANCHES_SEARCH RAN - BRANCHES', branches);
  return {
    type: BRANCHES_ALL,
    payload: branches
  };
};

const branchesAll = (branches) => {
  // console.log('BRANCHES ALL RAN - BRANCHES', branches);
  return {
    type: BRANCHES_ALL,
    payload: branches
  };
};


const branchById = (branch) => {
  // console.log('BRANCH BY ID RAN - BRANCHES', branch);
  return {
    type: BRANCH_BY_ID,
    payload: branch
  };
};

const newCreatedBranch = (branch) => {
  // console.log('NEW CREATED BRANCH RAN - BRANCHES', branch);
  return {
    type: CREATE_BRANCH,
    payload: branch
  };
};

const updateBranch = (branch) => {
  // console.log('UPDATED BRANCH RAN - BRANCHES', branch);
  return {
    type: UPDATE_BRANCH,
    payload: branch
  };
};

const deletedBranch = (branch) => {
  // console.log('DELETED BRANCH RAN - BRANCHES', branch);
  return {
    type: DELETE_BRANCH,
    payload: branch
  };
};

const removeBranchDataFromStore = () => {
  // console.log('REMOVE BRANCH DATA FROM STORE RAN - BRANCHES');
  return {
    type: REMOVE_BRANCH_DATA_FROM_STORE,
    payload: {}
  };
};


/** ==============THUNKS:=====================================================*/

/** SEARCH BRANCHES */
export const search = (/*search*/) => async (dispatch) => {

  const response = await csrfFetch("/api/branches");
  const data = await response.json();
  const branches = data.branches;
  // console.log('THUNK SEARCH RAN DATA: ', data, 'BRANCHES: ', branches);

  return dispatch(branchesSearch(branches))
};


/** GET BRANCHES */
export const thunkGetBranchesAll = () => async (dispatch) => {

  const response = await csrfFetch("/api/branches");
  const data = await response.json();
  const branches = data.branches;
  // console.log('THUNK GET BRANCHES ALL RAN DATA: ', data, 'BRANCHES: ', branches);

  return dispatch(branchesAll(branches))
};


/** GET DETAILS OF A BRANCH FROM AN ID */
export const thunkGetBranchById = (branchId) => async (dispatch) => {
  // console.log('GET BRANCH BY ID, branchId)
  const response = await csrfFetch(`/api/branches/${branchId}`);
  const data = await response.json();
  // console.log('THUNK GET BRANCH BY ID RAN DATA: ', data );

  return dispatch(branchById(data));
};


/** POST BRANCHES */
export const thunkCreateBranch = (newBranch) => async (dispatch) => {
  const response = await csrfFetch(`/api/branches/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newBranch)
  });

  const data = await response.json();
  // console.log('THUNK CREATE BRANCH RAN DATA: ', data );

  return dispatch(newCreatedBranch(data));
};


/** PUT BRANCHES */
export const thunkEditBranch = (editedBranch) => async (dispatch) => {
  const { branchId, updatedBranch } = editedBranch;
//  console.log('THUNK EDIT BRANCH FROM BRANCHES REDUCER RAN', updatedBranch);

  const response = await csrfFetch(`/api/branches/${branchId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedBranch)
  });

  const data = await response.json();
  // console.log('THUNK EDIT BRANCH RAN DATA: ', data );

  return dispatch(updateBranch(data));
};


/** DELETE BRANCHES */
export const thunkDeleteBranch = (branch) => async (dispatch) => {
  const branchId = branch.id;
  const response = await csrfFetch(`/api/branches/${branchId}`, {
    method: "DELETE",
  });
  response
  // const data = await response.json();
  // console.log('THUNK DELETE BRANCH RAN: ', response );
  return dispatch(deletedBranch(branch));
};


/** REMOVE BRANCH DATA FROM STORE */
export const thunkRemoveBranchDataFromStore = () => async (dispatch) => {
  return dispatch(removeBranchDataFromStore());
};




/** ==============INITIAL STATE: =============================================*/

const initialBranchesState = {}

/** ==============REDUCER: ===================================================*/
const branchesReducer = (branchesState = initialBranchesState, action) => {
  // console.log('BRANCHES REDUCER RAN - STATE AND ACTION', state, action)

  switch (action.type) {

    case BRANCHES_SEARCH:
      // console.log("BRANCHESREDUCER RAN BRANCHES_SEARCH CASE RETURNING: ", {...state, branches: action.payload})
      return {...branchesState, resultsBranches: action.payload}

    case BRANCHES_ALL:
      // console.log("BRANCHESREDUCER RAN BRANCHES_CURRENT_USER CASE RETURNING: ", {...branchesState, branchesCurrentUser: action.payload})
      return {...branchesState, branches: action.payload}

    case BRANCH_BY_ID:
      // console.log("BRANCHESREDUCER RAN BRANCH_BY_ID CASE RETURNING: ", {...branchesState, branch: action.payload})
      return {...branchesState, branchDetail: action.payload};

    case CREATE_BRANCH:
      // console.log("BRANCHESREDUCER RAN CREATE_BRANCH CASE RETURNING: ")
      return {...branchesState, NewBranch: action.payload};

    case UPDATE_BRANCH:
      // console.log("BRANCHESREDUCER RAN UPDATE_BRANCH CASE RETURNING: ")
      return {...branchesState, EditedBranch: action.payload};

    case DELETE_BRANCH:
      // console.log("BRANCHESREDUCER RAN DELETE_BRANCH CASE RETURNING: ")
      return {...branchesState, DeletedBranch: action.payload};

    case REMOVE_BRANCH_DATA_FROM_STORE:
      // console.log("BRANCHESREDUCER RAN REMOVE FROM STORE CASE")
      return {};

    default:
      // console.log('BRANCHESREDUCER RAN DEFAULT')
      return branchesState;
  }
}

export default branchesReducer;
