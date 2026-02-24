function Resources() {
  return (
    <div className="container mt-5">

      <h2 className="text-center text-primary">
        Health Resources
      </h2>

      <div className="row mt-4">

        {/* Mental Health */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h5>Mental Health</h5>
            <p>
              Meditation, stress management, and emotional support tips.
            </p>
          </div>
        </div>

        {/* Fitness */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h5>Fitness</h5>
            <p>
              Daily workout routines and physical wellness guidance.
            </p>
          </div>
        </div>

        {/* Nutrition */}
        <div className="col-md-4">
          <div className="card p-3 text-center shadow-sm">
            <h5>Nutrition</h5>
            <p>
              Healthy diet plans and nutritional advice for students.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Resources;