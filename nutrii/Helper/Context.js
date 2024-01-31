'use client'

import { createContext, useState } from "react";
export const myContext = createContext();

const context = ({children})=>
{
    const [login, setLogin] = useState(true);

    return(
        <myContext.Provider value={{ login, setLogin}}>
            {children}
        </myContext.Provider>
    )
}

export default context;