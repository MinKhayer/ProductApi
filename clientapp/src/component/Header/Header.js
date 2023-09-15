import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Header() {
  let login = sessionStorage.getItem('jwttoken') ? sessionStorage.getItem('jwttoken') : " ";

  const logoutHandeler = () => {
    // remove session storage
    sessionStorage.removeItem('jwttoken');
    sessionStorage.removeItem('username');
    Navigate('/signin');
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Product Shop
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav topnav  ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                <span>Product</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/allOrder">
                All Order
              </a>
            </li>
            <li class="nav-item">
              { (login !== " ") ? (
                <a onClick={logoutHandeler} class="nav-link" href="">
                  Logout
                </a>
              ): ""}
              {(login === " ") ? (
                <a href="/signin" class="nav-link">
                  Login
                </a>
              ): ""}
              {(login === " " ) ? (
                <a href="/signup" class="nav-link">
                  Reg
                </a>
              ): ''}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
