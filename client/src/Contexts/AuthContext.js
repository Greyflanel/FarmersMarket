import { createContext } from 'react';

const AuthContext = createContext({ authToken: ""});

export default AuthContext;

// Creates a new context named AuthContext