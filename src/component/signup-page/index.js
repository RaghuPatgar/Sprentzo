import SignupPageLogo from '../signup-page/signuplogo/index';
import SignUpForm from '../signup-page/signup-form/index';
import SignupSocialimage from '../signup-page/signup-social/index';
import SignButton from '../signup-page/signbutton/index';

import LogInForm from '../signup-page/login-form/index';

function SignUpPage(){
    return (
    <div className="signup-page-container" style={{ height: "100%" }}>
        <SignupPageLogo />
        <SignButton />
        <SignUpForm />
        <SignupSocialimage />

        <LogInForm />
    </div>
    );
}

export default SignUpPage;