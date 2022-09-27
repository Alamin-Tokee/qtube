import React, { useState } from "react";
import "./Login.css";
import { logIn, signUp } from "../../actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  //Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  //handle change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="container-fluid tm-mt-60">
      <div className="row tm-mb-50 justify-content-center">
        <div className="col-lg-4 col-12 mb-5">
          <h2 className="tm-text-primary mb-5">
            {isSignUp ? "Register" : "Login"}
          </h2>
          <form
            id="contact-form"
            class="tm-contact-form mx-auto"
            onSubmit={handleSubmit}
          >
            {isSignUp && (
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  class="form-control rounded-0"
                  placeholder="Firstname"
                  value={data.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {isSignUp && (
              <div className="form-group">
                <input
                  type="text"
                  name="lastname"
                  class="form-control rounded-0"
                  placeholder="Lastname"
                  value={data.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="form-group">
              <input
                type="email"
                name="email"
                class="form-control rounded-0"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                class="form-control rounded-0"
                placeholder="Confirm Password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>

            {isSignUp && (
              <div className="form-group">
                <input
                  type="confirmpass"
                  name="confirmpass"
                  class="form-control rounded-0"
                  placeholder="Confirm Password"
                  value={data.confirmpass}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {/* <div className="form-group">
              <select
                className="form-control"
                id="contact-select"
                name="inquiry"
              >
                <option value="-">Subject</option>
                <option value="sales">Sales &amp; Marketing</option>
                <option value="creative">Creative Design</option>
                <option value="uiux">UI / UX</option>
              </select>
            </div> */}
            {/* <div class="form-group">
              <textarea
                rows="8"
                name="message"
                className="form-control rounded-0"
                placeholder="Message"
                required
              ></textarea>
            </div> */}

            <div className="form-group tm-text-right">
              <button type="submit" class="btn btn-primary" disabled={loading}>
                {loading ? "Loading.." : isSignUp ? "SignUp" : "SignIn"}
              </button>
            </div>

            {isSignUp ? (
              <h5>
                You have an account ?{" "}
                <span
                  onClick={() => {
                    resetForm();
                    setIsSignUp((prev) => !prev);
                  }}
                >
                  Login Here
                </span>
              </h5>
            ) : (
              <h5>
                Dont have an acount?{" "}
                <span
                  onClick={() => {
                    resetForm();
                    setIsSignUp((prev) => !prev);
                  }}
                >
                  SignUp Here
                </span>
              </h5>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
