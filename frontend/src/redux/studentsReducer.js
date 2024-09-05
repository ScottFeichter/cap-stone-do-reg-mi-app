import { csrfFetch } from "./xCsrf";

/** =============ACTION TYPE CONSTANTS:=======================================*/

const STUDENTS_SEARCH = "student/search";
const STUDENTS_ALL = "students/all";
const STUDENT_BY_ID = "student/studentById";
const CREATE_STUDENT = "student/createStudent";
const UPDATE_STUDENT = "student/updateStudent";
const DELETE_STUDENT = "student/deletedStudent";
const REMOVE_STUDENT_DATA_FROM_STORE = "student/removeStudentDataFromStore";

/** ==============ACTION CREATORS:============================================*/

const studentsSearch = (students) => {
  // console.log('STUDENTS_SEARCH RAN - STUDENTS', students);
  return {
    type: STUDENTS_ALL,
    payload: students
  };
};

const studentsAll = (students) => {
  // console.log('STUDENTS ALL RAN - STUDENTS', students);
  return {
    type: STUDENTS_ALL,
    payload: students
  };
};


const studentById = (student) => {
  // console.log('STUDENT BY ID RAN - STUDENTS', student);
  return {
    type: STUDENT_BY_ID,
    payload: student
  };
};

const newCreatedStudent = (student) => {
  // console.log('NEW CREATED STUDENT RAN - STUDENTS', student);
  return {
    type: CREATE_STUDENT,
    payload: student
  };
};

const updateStudent = (student) => {
  // console.log('UPDATED STUDENT RAN - STUDENTS', student);
  return {
    type: UPDATE_STUDENT,
    payload: student
  };
};

const deleteStudent = (student) => {
  // console.log('DELETED STUDENT RAN - STUDENTS', student);
  return {
    type: DELETE_STUDENT,
    payload: student
  };
};

const removeStudentDataFromStore = () => {
  // console.log('REMOVE STUDENT DATA FROM STORE RAN);
  return {
    type: REMOVE_STUDENT_DATA_FROM_STORE,
    payload: {}
  };
};


/** ==============THUNKS:=====================================================*/

/** SEARCH STUDENTS */
export const search = (/*search*/) => async (dispatch) => {

  const response = await csrfFetch("/api/students");
  const data = await response.json();
  const students = data.students;
  // console.log('THUNK SEARCH RAN DATA: ', students);

  return dispatch(studentsSearch(students))
};


/** GET STUDENTS */
export const thunkGetStudentsAll = () => async (dispatch) => {

  const response = await csrfFetch("/api/students");
  const data = await response.json();
  const students = data.students;
  // console.log('THUNK GET STUDENTS ALL RAN DATA: ', students);

  return dispatch(studentsAll(students))
};


/** GET DETAILS OF A STUDENT FROM AN ID */
export const thunkGetStudentById = (studentId) => async (dispatch) => {
  // console.log('STUDENTID FORM STUDENTDETAILS STUDENTS 89', studentId)
  const response = await csrfFetch(`/api/students/${studentId}`);
  const data = await response.json();
  // console.log('THUNK GET STUDENT BY ID RAN DATA: ', data );

  return dispatch(studentById(data));
};


/** POST STUDENTS */
export const thunkCreateStudent = (newStudent) => async (dispatch) => {
  const response = await csrfFetch(`/api/students/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newStudent)
  });

  const data = await response.json();
  // console.log('THUNK CREATE STUDENT RAN DATA: ', data );

  return dispatch(newCreatedStudent(data));
};


/** PUT STUDENTS */
export const thunkEditStudent = (editedStudent) => async (dispatch) => {
  const { studentId, updatedStudent } = editedStudent;
//  console.log('UPDATED STUDENT FROM STUDENTS EDIT STUDENT', updatedStudent);

  const response = await csrfFetch(`/api/students/${studentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedStudent)
  });

  const data = await response.json();
  // console.log('THUNK EDIT STUDENT RAN DATA: ', data );

  return dispatch(updateStudent(data));
};


/** DELETE STUDENTS */
export const thunkDeleteStudent = (student) => async (dispatch) => {
  const studentId = student.id;
  const response = await csrfFetch(`/api/students/${studentId}`, {
    method: "DELETE",
  });
  response
  // const data = await response.json();
  // console.log('THUNK DELET EEMPLOYEE DEPARTMENT RAN: ', response );
  return dispatch(deleteStudent(student));
};


/** REMOVE STUDENT DATA FROM STORE */
export const thunkRemoveStudentDataFromStore = () => async (dispatch) => {
  return dispatch(removeStudentDataFromStore());
};

/** ==============INITIAL STATE: =============================================*/

const initialStudentsState = {}

/** ==============REDUCER: ===================================================*/
const studentsReducer = (studentsState = initialStudentsState, action) => {
  // console.log('STUDENTS REDUCER RAN - STATE AND ACTION', state, action)

  switch (action.type) {

    case STUDENTS_SEARCH:
      // console.log("STUDENTSREDUCER RAN STUDENTS_SEARCH CASE RETURNING: ", {...state, students: action.payload})
      return {...studentsState, resultsStudents: action.payload}

    case STUDENTS_ALL:
      // console.log("STUDENTSREDUCER RAN STUDENTS_CURRENT_USER CASE RETURNING: ", {...studentsState, studentsCurrentUser: action.payload})
      return {...studentsState, students: action.payload}

    case STUDENT_BY_ID:
      // console.log("STUDENTSREDUCER RAN STUDENT_BY_ID CASE RETURNING: ", {...studentsState, student: action.payload})
      return {...studentsState, studentDetail: action.payload};

    case CREATE_STUDENT:
      // console.log("STUDENTSREDUCER RAN CREATE_STUDENT CASE RETURNING: ")
      return {...studentsState, NewStudent: action.payload};

    case UPDATE_STUDENT:
      // console.log("STUDENTSREDUCER RAN UPDATE_STUDENT CASE RETURNING: ")
      return {...studentsState, EditedStudent: action.payload};

    case DELETE_STUDENT:
      // console.log("STUDENTSREDUCER RAN DELETE_STUDENT CASE RETURNING: ")
      return {...studentsState, DeletedStudent: action.payload};

    case REMOVE_STUDENT_DATA_FROM_STORE:
      // console.log("STUDENTESREDUCER RAN REMOVE FROM STORE CASE")
      return {};

    default:
      // console.log('STUDENTSREDUCER RAN DEFAULT')
      return studentsState;
  }
}

export default studentsReducer;
