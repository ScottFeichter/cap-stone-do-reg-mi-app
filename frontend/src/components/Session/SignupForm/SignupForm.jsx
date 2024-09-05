import "./SignupForm.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import * as sessionActions from "../../../redux/sessionReducer.js";
import DemoRegistrarSignup from "../DemoSignups/DemoRegistrarSignup.jsx";



function SignupForm() {
  // const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  setErrors({});

  // if (sessionUser) return <Redirect to="/" />;

  if (sessionUser); // to stop yelling at me linter

  const handleSubmit = (e) => {
    if(e);
    // e.preventDefault();
    // setErrors({});
    // return dispatch(sessionActions.thunkSignup({ credential, password })).catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
  };

  return (
    <>
      <main id="SignupFormMain">

        <h1 id="SignupFormH1">Sign Up</h1>

        <form onSubmit={handleSubmit} id="SignupFormForm">
          <label className="SignupFormLabel">
            Username or Email
            <input
              className="SignupFormInput"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className="SignupFormLabel">
            Password
            <input
              className="SignupFormInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {errors.credential && <p>{errors.credential}</p>}

          <NavLink to='/signupform'>
          <button
            onClick={handleSubmit}
            id="SignupFormButton"
            type="submit">Submit</button>
            </NavLink>

          </form>


          <DemoRegistrarSignup></DemoRegistrarSignup>


      </main>





    </>
  );
}


export default SignupForm;
