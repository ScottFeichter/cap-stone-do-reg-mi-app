import * as branchesActions from '../../../redux/branchesReducer';

export const initialLoader = async () => {


  branchesActions.thunkGetBranchesAll();
  // console.log("===============InitialLoader RAN===================")

  return null
};
