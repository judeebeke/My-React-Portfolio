import { createContext } from "react";

const portfolioContext = createContext({
    darkMode: null,
    changeDisplay: ()=>{},
});

export default portfolioContext;