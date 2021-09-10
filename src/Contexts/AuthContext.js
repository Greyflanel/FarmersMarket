import { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = props => {
    const [auth, setAuth] = useState({
        email: '',
        role: '',
        isLoggedIn: false,
        isAdmin: false,
    });

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    )
}