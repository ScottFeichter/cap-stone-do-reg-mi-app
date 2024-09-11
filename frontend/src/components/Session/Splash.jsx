import './Splash.css';
import LoginForm from "./LoginForm/LoginForm.jsx";
import SignupForm from "./SignupForm/SignupForm.jsx";
import DoRegMiStaff from "../../../../admin/images/DoRegMiStaff-1white.png";


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

            <footer id="SplashFooter" >
                <img id="SplashImg" src={DoRegMiStaff}  />
            </footer>

          </main>


        </>
    )
}

export default SplashPage;
