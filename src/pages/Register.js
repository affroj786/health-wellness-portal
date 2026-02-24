import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

/* 👁️ Show/Hide Password */
const [showPassword, setShowPassword] = useState(false);

/* ⏳ Loading */
const [loading, setLoading] = useState(false);

/* 🔐 CAPTCHA (Stable) */
const [num1] = useState(Math.floor(Math.random() * 10));
const [num2] = useState(Math.floor(Math.random() * 10));
const [captchaInput, setCaptchaInput] = useState("");

/* Form fields */
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  //const handleRegister = () => {
   // setMessage("Registered Successfully ✅");
 // };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center text-primary">Register</h2>

      <input
  type="text"
  className="form-control mb-3"
  placeholder="Enter Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  />


<input
  type="email"
  className="form-control mb-3"
  placeholder="Enter Email"
  value={email}
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

<div className="mb-3">
  <label>Solve: {num1} + {num2} = ?</label>

  <input
    type="text"
    className="form-control"
    placeholder="Enter answer"
    value={captchaInput}
    onChange={(e) => setCaptchaInput(e.target.value)}
  />
</div>
<button
  className="btn btn-primary w-100"
  onClick={() => {

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (parseInt(captchaInput) !== num1 + num2) {
      alert("Incorrect CAPTCHA!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Registration Successful!");
      navigate("/login");
    }, 1500);
  }}
>
  {loading ? "Registering..." : "Register"}
</button>

      {message && (
        <p className="text-success mt-3 text-center">
          {message}
        </p>
      )}

    </div>
  );
}

export default Register;
