import React from "react";
function Programs() {

  
  return (
    <div className="container mt-5">

      <h2 className="text-center text-primary">
        Wellness Programs
      </h2>

      <div className="row mt-4">

        {/* Yoga Program */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h5>Yoga Program</h5>
            <p>Improve flexibility and reduce stress.</p>
            <button className="btn btn-success mt-2">
              Join
            </button>
          </div>
        </div>

        {/* Gym Training */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h5>Gym Training</h5>
            <p>Strength and fitness training sessions.</p>
            <button className="btn btn-primary mt-2"> 
              Join
            </button>
          </div>
        </div>

        {/* Meditation Course */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h5>Meditation Course</h5>
            <p>Enhance focus and mental well-being.</p>
            <button className="btn btn-warning mt-2">
              Join
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Programs;