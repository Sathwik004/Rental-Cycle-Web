import supabase from "../database/client";
import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);

    useEffect(() => {
        const session = supabase.auth.getSession()
            .then(({ data: { session } }) => {
                setSession(session);
                console.log('session after get', session);
            });

        const { data: { subscription: authListner } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setSession(session);
                console.log('session after authstatechange', session);
                console.log("event", event);
                if (event === "SIGNED_IN") {
                    setUser(session?.user);

                } else if (event === "SIGNED_OUT") {
                    console.log("Signed out");
                    window.location.href = "/login";
                    setUser(null);
                }

            }
        );
        return () => {
            authListner.unsubscribe();
        };
    }, [user]);

    return (
        <AppContext.Provider value={{ user, setUser, session, setSession }}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);
export { AppContext as default, AppContextProvider, useAppContext };