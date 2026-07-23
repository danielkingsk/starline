import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./AuthContext";

function HomePage() {
  return <h1>Welcome</h1>;
}

function AboutPage() {
  return <h1>About Page</h1>;
}

function App() {
  const [user, setUser] = useState({ name: "", isAuth: false });

  function login(name) {
    setUser({ name: name, isAuth: true });
  }

  return (
    <>
      <AuthContext.Provider value={{ user, login }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
