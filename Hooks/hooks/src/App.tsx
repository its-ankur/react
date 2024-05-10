import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CTimer from "./assets/components/CTimer";
import Signin from "./assets/components/Signin";
import Count from "./assets/components/Count";

interface IContext {
  signedIn: boolean;
  setSignedIn: (result: boolean) => void;
}
export const Context = React.createContext<IContext>({
  signedIn: false,
  setSignedIn: (result: boolean) => {},
});
function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
    <Count/>
      <Context.Provider value={{ signedIn, setSignedIn }}>
        <Signin />
      </Context.Provider>
      {signedIn?'Sign out':'Sign in'}
    </>
  );
}

export default App;
