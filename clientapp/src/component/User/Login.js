
import {React, useState} from 'react';

import './Login.css';


function Login()
{
   
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    let loginData = {
        password,
        email
    };
    const submitHandeler = (e)=>{

           e.preventDefault();

        fetch("https://localhost:7291/api/account/login",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(loginData)
        }).then((res)=>{
            return res.text();
        }).then((result)=>{
            sessionStorage.setItem("username", email);
            sessionStorage.setItem("jwttoken", result);
            window.location.href = 'http://localhost:3000/';
        }).catch((err)=>{
            alert("Email or Password is wrong");
        })

        
    }

    return (
        <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card bg-light ">
                <div class="card-body p-5 text-center">
      
                  <div class="mb-md-5 mt-md-4 pb-5">
      
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class=" mb-5">Please enter your login and password!</p>
      
                    <div class="form-outline  mb-4">
                    <label class="form-label" >Email</label>
                      <input type="email" id="typeEmailX" class="form-control form-control-lg" onChange={e => setEmail(e.target.value)}/>
                     
                    </div>
      
                    <div class="form-outline form-white mb-4">
                    <label class="form-label" >Password</label>
                      <input type="password" id="typePasswordX" class="form-control form-control-lg" onChange={e => setPassword(e.target.value)} />
                     
                    </div>
      
                    <button class="btn btn-outline-info btn-lg px-5" type="submit" onClick={submitHandeler}>Login</button>

      
                  </div>
      
                  <div>
                    <p class="mb-0">Don't have an account? <a href="/signup" class=" fw">Sign Up</a>
                    </p>
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Login;