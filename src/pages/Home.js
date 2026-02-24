import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* ⭐ HERO SECTION */}
      <div
        style={{
          background: "linear-gradient(to right, #1e3c72, #2a5298)",
          color: "white",
          padding: "100px 0"
        }}
      >
        <div className="container">

          <div className="text-center">

            <h1 className="fw-bold">
              Student Health & Wellness Platform
            </h1>

            <p className="mt-3">
              Your one-stop solution for mental health, fitness,
              and nutrition support.
            </p>

            <Link to="/login" className="btn btn-light m-2 px-4">
              Login
            </Link>

            <Link to="/register" className="btn btn-warning m-2 px-4">
              Get Started
            </Link>

          </div>

        </div>
      </div>

      {/* ⭐ FEATURES SECTION */}
      <div className="container text-center mt-5">

        <h3 className="text-primary mb-4">
          What We Offer
        </h3>

        <div className="row">

          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h5>Mental Health Support</h5>
              <p>Counseling and stress management resources</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h5>Fitness Programs</h5>
              <p>Workout plans and physical activities</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h5>Nutrition Guidance</h5>
              <p>Healthy diet plans for students</p>
            </div>
          </div>

        </div>

      </div>

      {/* ⭐ STATS SECTION */}
      <div className="container text-center mt-5 mb-5">

        <div className="row">

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h4>500+</h4>
              <p>Students Helped</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h4>50+</h4>
              <p>Wellness Programs</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h4>24/7</h4>
              <p>Support Available</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h4>100%</h4>
              <p>Secure Platform</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;