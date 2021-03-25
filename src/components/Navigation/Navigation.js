import React, { useEffect, useState, Component } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { useHistory, NavLink, BrowserRouter as Router } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const history = useHistory();
  const searchBook = (event) => {
    let keyword = event.target.value;
    if (event.key !== "Enter") {
      return;
    }
    history.push({
      search: `?search=${keyword}`,
      pathname: "/",
    });
    event.target.value = "";
  };

  return (
    <MDBNavbar color="indigo darken-1" dark expand="md">
      <MDBContainer>
        <MDBNavbarBrand>
          <NavLink to="/" exact>
            <strong className="white-text">BooksStore</strong>
          </NavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav>
            <MDBCol lg="6" md="8" style={{ padding: 0 }}>
              <div className="input-group d-flex justify-content-center">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input
                  onKeyPress={(e) => searchBook(e)}
                  type="text"
                  className="form-control"
                  placeholder="Search a book..."
                  aria-label="Search a book..."
                  aria-describedby="basic-addon"
                />
              </div>
            </MDBCol>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink
                onClick={props.modalToggleHandler}
                className="waves-effect waves-light"
                to="/"
              >
                <div className={classes.cartCountContainer}>
                  {props.cart.length > 0 ? (
                    <span className={classes.cartCount}>
                      {props.cart.length}
                    </span>
                  ) : null}
                  <i className="fas fa-shopping-bag"></i>
                </div>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navigation;
