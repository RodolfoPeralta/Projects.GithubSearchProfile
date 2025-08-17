import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

function ProfileContextProvider({ children }) {

    const [ loading, setLoading ] = useState(false);
    const [ profile, setProfile ] = useState(null);

    return(
        <ProfileContext.Provider value={{profile, setProfile, loading, setLoading}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileContextProvider;

export const useProfile = () => useContext(ProfileContext);