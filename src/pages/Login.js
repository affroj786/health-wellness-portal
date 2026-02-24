import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  /* 👁️ Show/Hide Password */
  const [showPassword, setShowPassword] = useState(false);

  /* ⏳ Loading Spinner */
  const [loading, setLoading] = useState(false);

  /* 🔐 CAPTCHA (Stable) */
  const [num1] = useState(Math.floor(Math.random() * 10));
  const [num2] = useState(Math.floor(Math.random() * 10));
  const [captchaInput, setCaptchaInput] = useState("");

  /* Email & Password */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
     localStorage.setItem("isLoggedIn", "true");

// 🔥 Notify Navbar
window.dispatchEvent(new Event("login"));

navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };


  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center text-primary">Login</h2>

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
<div className="input-group mb-3">

  <input
    type={showPassword ? "text" : "password"}
    className="form-control"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <button
    className="btn btn-outline-secondary"
    onClick={() => setShowPassword(!showPassword)}
  >
    👁️
  </button>

</div>
      <div className="mt-3">
  <label>Solve: {num1} + {num2} = ?</label>

  <input
    type="text"
    className="form-control"
    placeholder="Enter answer"
    value={captchaInput}
    onChange={(e) => setCaptchaInput(e.target.value)}
  />
  <button
  className="btn btn-secondary mt-2"
  onClick={() => window.location.reload()}
>
  Refresh CAPTCHA
</button>
</div>

      <button
  className="btn btn-success w-100"
  onClick={() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      handleLogin();
    }, 1500);
  }}
>
  {loading ? "Logging in..." : "Login"}
</button>
    </div>
  );
}

export default Login;
