function Support() {
  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>

      <h2 className="text-center text-primary">
        Support & Counseling
      </h2>

      <input
        className="form-control mb-3"
        placeholder="Enter Your Name"
      />

      <input
        className="form-control mb-3"
        placeholder="Enter Your Email"
      />

      <textarea
        className="form-control mb-3"
        placeholder="Describe your issue"
        rows="4"
      ></textarea>

      <button className="btn btn-danger w-100">
        Submit Request
      </button>

    </div>
  );
}

export default Support;