import './Splash.css';
import LoginForm from "./LoginForm/LoginForm.jsx";
import SignupForm from "./SignupForm/SignupForm.jsx";


function SplashPage() {



    return (
        <>
          <main id="SplashMain">
            <div id="SplashDivBanner">
                <h1 id="SplashH1">Welcome To Do Reg Mi</h1>
            </div>

            <div id="SplashDivLoginSignupContainer">
                <LoginForm></LoginForm>
                <SignupForm></SignupForm>
            </div>

          </main>


        </>
    )
}

export default SplashPage;
