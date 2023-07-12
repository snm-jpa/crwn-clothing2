import { useState, createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';
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

export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    //const [currentUser, setCurrentUser] = useState(null);
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        //dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    };

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
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

/*
    const usrReducer = (state, action) => {
        return {
            currentUser: null
        }
    }
*/