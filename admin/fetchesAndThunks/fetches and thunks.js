// // ==============================FETCHES======================================//

// //  fetch from backend to test
// fetch("/api/test",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-Token": "TOKEN GOES HERE !!!!!!!!!"
//     },
//     body: JSON.stringify({credential: "Demo-lition", password: "password"})
//   }).then(res => res.json()).then(data => console.log(data));


// // fetch from frontend to test - expect object requestBody:
//  window.csrfFetch('/api/test', {
//   method: 'POST',
//   body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
// }).then(res => res.json()).then(data => console.log(data));



// // log out but not working may need xsrf
// fetch('/api/session/', {
//   method: 'DELETE',
// });



// // ==============================SESSION THUNKS===============================//


// //  login thunk action test in the browser's dev tools console:
// window.store.dispatch(
//     window.sessionActions.thunkLogin({
//       credential: "Demo-lition",
//       password: "password",
//     })
//   );

// window.store.dispatch(window.sessionActions.thunkLogout());
// window.store.dispatch(window.sessionActions.thunkRestoreUser());

// window.store.dispatch(
//   window.sessionActions.signup({
//     username: "NewUser",
//     firstName: "New",
//     lastName: "User",
//     email: "new@user.io",
//     password: "password",
//   })
// );


// // ==============================USER TYPES THUNKS===============================//

// window.store.dispatch(window.userTypesActions.thunkGetUserTypesAll());
