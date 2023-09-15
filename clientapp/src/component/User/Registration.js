import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Registration.css";

function Registration() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();

        //console.log({name, email, password, confirmPassword, contactNo, state, city});
        
        const userData = {
            name, 
            email,
            password,
            confirmPassword,
            contactNo,
            state,
            city

        };
        fetch("https://localhost:7291/api/account/signup", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(userData)
        }).then((res)=>{
            alert('Account successfully Created!');
            navigate('/');
        }).catch((err)=>{
            console.log(err.message);
        });
    
    
    }

  return (
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div
              class="card shadow-2-strong card-registration"
            //   style="borderRadius: 15px;"
            >
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">User Registration</h3>
                <form>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label">Name</label>
                        <input required
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          class="form-control form-control-lg"
                        />
                        
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label">Email</label>
                        <input
                          required
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          class="form-control form-control-lg"
                        />
                       
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label">Password</label>
                        <input
                          required
                          type="password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          class="form-control form-control-lg"
                        />
                        
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label">Confirm Password</label>
                        <input
                          required
                          type="password"
                          value={confirmPassword}
                          onChange={e => setConfirmPassword(e.target.value)}
                          class="form-control form-control-lg"
                        />
                       
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label">Contact No</label>
                        <input
                          required
                          type="text"
                          value={contactNo}
                          onChange={e => setContactNo(e.target.value)}
                          class="form-control form-control-lg"
                        />
                        
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label">State</label>
                        <input
                          required
                          type="text"
                          value={state}
                          onChange={e => setState(e.target.value)}
                          class="form-control form-control-lg"
                        />
                       
                      </div>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                      <label class="form-label">City</label>
                        <input
                          required
                          type="text"
                          value={city}
                          onChange={e => setCity(e.target.value)}
                          class="form-control form-control-lg"
                        />
                        
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                     
                       
                      </div>
                    </div>
                  </div>

                 
                 
                  <div class="mt-4 pt-2">
                    <input
                     
                      class="btn btn-primary btn-lg"
                      type="submit"
                      value="Submit"
                      onClick={submitHandler}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration;
