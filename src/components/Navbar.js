import React from "react";
import "./styles.css";

const Navbar = (props) => {
  
  return (
    <nav id="go-to-top" class="navbar navbar-expand-lg selectDisable">
      <a class="navbar-brand" href="/">EduChain</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item navlink-border">
            <a className="nav-link px-4" href="/resources">
              Resources
            </a>
          </li>
          <li className="nav-item navlink-border">
            <a className="nav-link px-4" href="/contribute">
              Contribute
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li className="nav-item ">
            {
              props.account!=="" &&
              <a className="nav-link px-4" href="/">{ props.account.substring(0, 15) }{ props.account.length >= 10 && `.....` }</a>
            }
          </li>
          <li className="nav-item ">
            <a className="nav-link px-4" href="/">{ props.ECTbalance.toString() } ECT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;