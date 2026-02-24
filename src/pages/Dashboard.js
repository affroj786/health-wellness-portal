import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    navigate("/login"); // or "/"
  }
}, [navigate]);
  return (
    <div className="container mt-5">

      <h2 className="text-center text-primary">
        Student Dashboard
      </h2>

     


<div className="row mt-4 text-center">

  <div className="col-md-4">
    <div className="card p-3 shadow-sm">
      <h4>5</h4>
      <p>Programs Joined</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card p-3 shadow-sm">
      <h4>12</h4>
      <p>Resources Viewed</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card p-3 shadow-sm">
      <h4>2</h4>
      <p>Support Requests</p>
    </div>
  </div>

</div>

<div className="card mt-4 p-3 text-center shadow-sm">

  <h5>💡 Daily Health Tip</h5>

  <p>
    Drink at least 8 glasses of water daily to stay hydrated and active.
  </p>

</div>
      <p className="text-center">
  Welcome back! Take care of your health today 💙
</p>
      <div className="row mt-4 text-center">
        

  <div className="col-md-4">
    <div className="card p-3 shadow-sm">
      
      <p>Programs Joined</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card p-3 shadow-sm">
      
      <p>Resources Viewed</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card p-3 shadow-sm">
      
      <p>Support Requests</p>
    </div>
  </div>

</div>
      <div className="row mt-4">

        {/* Resources Card */}
        <div className="col-md-4">
          <div className="card text-center p-4 shadow-sm">
            <h5>Mental Health</h5>
            <p>Access stress management and wellness tips</p>
            <Link to="/resources" className="btn btn-success mt-2">
              View Resources
            </Link>
          </div>
        </div>

        {/* Programs Card */}
        <div className="col-md-4">
          <div className="card text-center p-4 shadow-sm">
            <h5>Fitness Programs</h5>
            <p>Join workout and yoga sessions</p>
            <Link to="/programs" className="btn btn-primary mt-2">
              View Programs
            </Link>
          </div>
        </div>

        {/* Support Card */}
        <div className="col-md-4">
          <div className="card text-center p-4 shadow-sm">
            <h5>Support</h5>
            <p>Get counseling and assistance</p>
            <Link to="/support" className="btn btn-danger mt-2">
              Get Help
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;