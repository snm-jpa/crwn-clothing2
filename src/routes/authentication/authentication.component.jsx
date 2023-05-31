import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import './authentication.styles.scss';
import {
    auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import SignInForm  from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {

    // useEffect(() => {
    //     async function getRedirect(){
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     getRedirect();
    // }, [])

    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }

    return (
        <div className="authentication-container">
            {/* <button onClick={logGoogleUser}> Sign in with google popup</button> 
            <button onClick={signInWithGoogleRedirect}> Sign in with google Redirect</button> */}
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;