import './Splash.css';
import LoginForm from "./LoginForm/LoginForm.jsx";
import SignupFormModal from "./SignupForm/SignupFormModal/SignupFormModal.jsx";


function SplashPage() {



    return (
        <>
          <main id="SplashMain">
            <div id="SplashDivBanner">
                <h1 id="SplashH1">Welcome To Do Reg Mi</h1>
            </div>

            <div id="SplashDivLoginSignupContainer">
                <LoginForm></LoginForm>
                <SignupFormModal></SignupFormModal>
            </div>

          </main>


        </>
    )
}

export default SplashPage;
