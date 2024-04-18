import supabase from "../database/client";
import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [source, setSource] = useState(null);
    const [locations, setLocations] = useState([]);


    useEffect(() => {


        const { data: { subscription: authListner } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                
                if (event === 'SIGNED_OUT') {
                    setSession(null);
                }
                if(event === 'INITIAL_SESSION')
                {
                    supabase.auth.getSession().then(({data:{session}}) => {
                        setSession(session);
                        console.log('session in initial',session);
                    });

                }
                if(event === 'TOKEN_REFRESHED')
                {
                    console.log('token refreshed');
                    setSession(session);
                }
                else{
                    setSession(session);
                }
            }
        );
        return () => authListner.unsubscribe();
    }, []);

    useEffect(() => {
        if (session) {
            setUser(session.user);
        } else {
            setUser(null);
        }
    }, [session]);

    return (
        <AppContext.Provider value={{ user, setUser, session, source, setSource,locations,setLocations }}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);
export { AppContext as default, AppContextProvider, useAppContext };