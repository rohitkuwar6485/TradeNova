    import React, { useState } from "react";
    import axios from "axios";

    const UserSignup = () => {
      const [state, setState] = useState("login"); // "login" or "signup"
      const [name, setName] = useState("");
      const [contact, setContact] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          // Prepare payload
          const payload =
            state === "login"
              ? { email, password }
              : { name, contact, email, password };

          // Send data to backend (same route structure you mentioned)
          const BASE_URL = import.meta.env.VITE_BACKEND_URL  || "http://localhost:8080";

          const url =
            state === "login"
              ? `${BASE_URL}/api/user/login`
              : `${BASE_URL}/api/user/signup`;

          const { data } = await axios.post(url, payload, {
            withCredentials: true,
          });

          if (data.success) {
            console.log("User Data:", data.user);
            window.location.href = import.meta.env.VITE_DASHBOARD_URL;
            alert(`✅ ${data.message}`);
          } else {
            alert(`❌ ${data.message}`);
          }
        } catch (error) {
          console.error("Error:", error);
          alert(error.response?.data?.message || "Something went wrong!");
        }
      };

      return (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-sm p-4">
                <h3 className="text-center mb-4">
                  {state === "login"
                    ? "Login to Your Account"
                    : "Create Your Account"}
                </h3>

                <form onSubmit={handleSubmit}>
                  {state === "signup" && (
                    <>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Contact Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          required
                        />
                      </div>
                    </>
                  )}

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    {state === "login" ? "Login" : "Signup"}
                  </button>
                </form>

                <p className="text-center mt-3">
                  {state === "login" ? (
                    <>
                      Don’t have an account?{" "}
                      <span
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={() => setState("signup")}
                      >
                        Signup here
                      </span>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <span
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        onClick={() => setState("login")}
                      >
                        Login here
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default UserSignup;
