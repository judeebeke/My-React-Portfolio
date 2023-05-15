import { useState } from "react";
import portfolioContext from "./AppContext";

const PorfolioContextProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false);

    const setDarkModeHandler = () => {
        setDarkMode(prev => !prev)
    }

    const appContext = {
        darkMode,
        changeDisplay: setDarkModeHandler,
    }

  return (
    <portfolioContext.Provider value={appContext}>{props.children}</portfolioContext.Provider>
  );
};


export default PorfolioContextProvider;