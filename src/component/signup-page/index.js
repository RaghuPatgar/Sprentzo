import SignupPageLogo from '../signup-page/signuplogo/index';
import SignUpForm from '../signup-page/signup-form/index';
import SignupSocialimage from '../signup-page/signup-social/index';
import SignButton from '../signup-page/signbutton/index';

function SignUpPage(){
    return (
    <div className="signup-page-container" style={{ height: "100%" }}>
        <SignupPageLogo />
        <SignButton />
        <SignUpForm />
        <SignupSocialimage />
    </div>
    );
}

export default SignUpPage;