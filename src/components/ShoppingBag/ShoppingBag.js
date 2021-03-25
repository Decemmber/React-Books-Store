import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import classes from "./ShoppingBag.module.css";

class ModalPage extends Component {
  render() {
    const booksList = this.props.booksOnTheCart.map((book, index) => (
      <tr key={index}>
        <td className="align-middle">{index + 1}</td>
        <td>
          <img style={{ height: "70px", width: "60px" }} src={book.image} />
        </td>
        <td className="text-left align-middle">{book.title}</td>
        <td className="align-middle">
          <i className="fas fa-dollar-sign"></i> <strong>{book.price}</strong>
        </td>
        <td className="align-middle">
          <button
            className={classes.removeButton}
            onClick={() => this.props.removeFromCart(book)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    ));

    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.props.modalState}
          toggle={this.props.modalToggleHandler}
          size="lg"
        >
          <MDBModalHeader toggle={this.props.modalToggleHandler}>
            Shopping Cart
          </MDBModalHeader>
          <MDBTable bordered>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Cover</th>
                <th>Book Title</th>
                <th>Price</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>{booksList}</MDBTableBody>
          </MDBTable>
          <h3 style={{ paddingRight: "21px" }} className="text-right">
            Total price: <strong>${this.props.totalPrice}</strong>
          </h3>
          <MDBModalFooter>
            <MDBBtn color="indigo darken-1">Checkout</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
