import { createContext, useState } from "react";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const authInfo = {
        user,
        setUser,
    };
    return <AuthContext.Provider vaule={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;