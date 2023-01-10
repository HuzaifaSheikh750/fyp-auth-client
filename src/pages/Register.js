import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "../styles/Register.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Register = () => {
  const navigate=useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const generateError=(err)=>
    toast.error(err, {
      position: "bottom-right"
    })
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000/register",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );
      // console.log(data);

      if (data) {
        if (data.errors) {
          const {email,password}=data.errors;
          if(email) generateError(email)
          else if(password) generateError(password)
        } else {
          navigate("/")
        }
      }
    } catch (error) {
      console.log(error);
    }
    //  console.log(values);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="container-fluid" id="cont">
          <div className="row justify-content-center" id="row-register">
            <div className="col-md-4" id="reg-row">
              <h1 id="reg-heading">Register</h1>

              <div className="mb-3">
                <label class="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="name"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={(e) =>
                    setValues({ ...values, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <button type="submit" id="registerbtn">
                submit
              </button>

              <div>
                Already have an account? <Link to="/login">Login</Link>
              </div>
            </div>
            <ToastContainer />
            {/* row end */}
          </div>
          {/* container end */}
        </div>
      </form>
    </>
  );
};

export default Register;
