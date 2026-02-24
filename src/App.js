import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Programs from "./pages/Programs";
import Support from "./pages/Support";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>

      <div
        style={{
          backgroundColor: darkMode ? "#121212" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          minHeight: "100vh"
        }}
      >

        <Navbar />

        {/* 🌙 Dark Mode Button */}
        <div className="text-end p-2">
          <button
            className="btn btn-dark"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/support" element={<Support />} />
        </Routes>
       <footer
  style={{
    background: "#f1f1f1",
    padding: "15px",
    textAlign: "center",
    marginTop: "30px"
  }}
>
  © 2026 Student Health & Wellness Platform | All Rights Reserved
</footer>

      </div>

    </BrowserRouter>
  );
}

export default App;