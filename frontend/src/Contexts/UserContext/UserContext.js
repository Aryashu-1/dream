import { createContext, useState } from "react";
export let UserContext= createContext()

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    );
}