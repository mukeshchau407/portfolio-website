import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Splash";
import CustomCursor from "./components/CustomCursor";

const App = ({ darkMode, setDarkMode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
