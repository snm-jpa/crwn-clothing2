import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
    auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth,
    signInWithAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formfields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formfields;

    //const { setCurrentUser} = useContext(UserContext);      //setCurrentuser is like setState, may be setContext.

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async (event) => {
        await signInWithGooglePopup();
        //await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInWithAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {

            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password for email");
                    break;
                case "auth/user-not-found":
                    alert("no user associated with this email");
                default:
                    console.log(error);
            }
        }

    }



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formfields, [name]: value })
    }


    return (
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and passowrd</span>

            <form onSubmit={handleSubmit}>


                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit" >SIGN IN</Button>
                    <Button type="button" name="google sign in" buttonType={'google'} onClick={signInWithGoogle} >SIGN IN WITH GOOOGLE</Button>
                </div>

            </form>

        </div>)
}

export default SignInForm;