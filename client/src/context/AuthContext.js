import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        _id:"616d17fca99a5c43bff89e1d",
        username:"Jane",
        profilePicture:"person/1.jpeg",
        coverPicture:"post/3.jpeg",
        team:"New York Mets",
        followers:[],
        following:[],
        isAdmin:false,
    },
    isFetching:false,
    error:false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    return (
        <AuthContext.Provider 
            value={{
                user:state.user, 
                isFetching:state.isFetching, 
                error:state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};