
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

   const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
);


const [showProfile, setShowProfile] = useState(false);

useEffect(() => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  window.addEventListener("login", handleLogin);

  return () => window.removeEventListener("login", handleLogin);
}, []);
  
  return (
    <nav
      style={{
        background: "linear-gradient(to right, #1e3c72, #2a5298)"
      }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container">

        {/* Logo / Title */}
        <Link className="navbar-brand fw-bold" to="/">
          Wellness Portal 💙
        </Link>

        {/* Right Side Buttons */}
      <div className="d-flex align-items-center">

  {!isLoggedIn ? (
    <>
      <Link className="btn btn-light m-1" to="/login">
        Login
      </Link>

      <Link className="btn btn-warning m-1" to="/register">
        Register
      </Link>
    </>
  ) : (
    <>
      {/* Profile Icon */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="profile"
        style={{
          width: "40px",
          cursor: "pointer",
          marginRight: "10px"
        }}
        onClick={() => setShowProfile(!showProfile)}
      />

      {/* Logout Button */}
 <button
  className="btn btn-danger"
  onClick={() => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setShowProfile(false);

    navigate("/"); // 🔥 Redirect to Home
  }}
>
  Logout
</button>
    </>
  )}

</div>
      </div>
      {showProfile && (
  <div
    style={{
      position: "absolute",
      top: "70px",
      right: "20px",
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      width: "250px",
      zIndex: 1000
    }}
  >
    <h5>Student Profile</h5>

    <p><strong>Name:</strong> AFFROJ SHAIK</p>
    <p><strong>Email:</strong> affroj@example.com</p>
    <p><strong>Course:</strong> B.Tech CSE</p>
    <p><strong>Year:</strong> 3rd Year</p>
    <p><strong>Status:</strong> Active</p>

    <Link className="btn btn-danger w-100 mt-2" to="/">
      Logout
    </Link>
  </div>
)}
    </nav>
  );
}

export default Navbar;