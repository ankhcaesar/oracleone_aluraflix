import { createContext, useState } from "react";

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {

    const url = "http://localhost:3000";

    /** estado de botones home y nuevo video */
    const [botonHome, setBotonHome] = useState(true);
    const [botonNuevoVideo, setBotonNuevoVideo] = useState(false);


    return (
        <GlobalContext.Provider
            value={{
                botonHome, setBotonHome,
                botonNuevoVideo, setBotonNuevoVideo


            }} >
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider;