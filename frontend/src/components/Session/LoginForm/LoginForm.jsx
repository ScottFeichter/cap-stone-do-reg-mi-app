import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import * as sessionActions from "../../../redux/sessionReducer.js";
import "./LoginForm.css";
import DemoRegistrarLogin from "../DemoLogins/DemoRegistrarLogin.jsx";

function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // if (sessionUser) return <Redirect to="/" />;

  if (sessionUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.thunkLogin({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
      <main id="LoginFormMain">

        <h1 id="LoginFormH1">Log In</h1>

        <form onSubmit={handleSubmit} id="LoginFormForm">
          <label className="LoginFormLabel">
            Username or Email
            <input
              className="LoginFormInput"
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className="LoginFormLabel">
            Password
            <input
              className="LoginFormInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {errors.credential && <p>{errors.credential}</p>}
          <button
            id="LoginFormButton"
            type="submit">Submit</button>

        </form>

        <DemoRegistrarLogin></DemoRegistrarLogin>


      </main>




    </>
  );
}

export default LoginForm;
