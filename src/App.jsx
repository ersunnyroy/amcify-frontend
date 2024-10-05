import "./App.css";
import Login from "./components/Login/Login";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    // Add the default class to the body
    document.body.classList.add(
      "layout-fixed",
      "sidebar-expand-lg",
      "bg-body-tertiary"
    );

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove(
        "layout-fixed",
        "sidebar-expand-lg",
        "bg-body-tertiary"
      );
    };
  }, []);

  return (
    <>{isLoggedin ? <h1>Welcome to the Protected Page!</h1> : <Login />}</>
  );
}

export default App;