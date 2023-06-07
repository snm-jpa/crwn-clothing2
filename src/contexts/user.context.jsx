import { useState, createContext, useEffect } from 'react';
import {
    onAuthStateChangedListener,
    signOutUser,
    createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils';
// as the actual value you want to access
//const someContext = createContext(defaultValue)
export const UserContext = createContext({
    currentUser: "sonam",
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        console.log('useeffect called');
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}   