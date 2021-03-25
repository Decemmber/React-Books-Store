import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
} from "mdbreact";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BooksCards = (props) => {
  const booksList = props.filteredBooks.map((book, index) => (
    <MDBCol key={index} lg="3" md="4" sm="6" style={{ paddingBottom: "20px" }}>
      <MDBCard narrow>
        <MDBView cascade>
          <Link to={`/books/${book.isbn13}`}>
            <MDBCardImage
              hover
              overlay="white-slight"
              className="card-img-top"
              src={book.image}
              alt="book"
            />
          </Link>
        </MDBView>
        <MDBCardBody style={{ paddingTop: "0px" }}>
          <MDBCardTitle
            style={{ height: "56px", overflow: "hidden" }}
            className="text-left font-weight-bold"
          >
            {book.title}
          </MDBCardTitle>
          <MDBCardText
            style={{ height: "42px", overflow: "hidden" }}
            className="text-left"
          >
            {book.subtitle}
          </MDBCardText>

          <div
            className="text-left"
            style={{ marginBottom: "10px", fontSize: "18px" }}
          >
            <i class="fas fa-dollar-sign"></i> <strong>{book.price}</strong>
          </div>

          <div class="text-left">
            <MDBBtn
              onClick={() => props.onClick(book)}
              style={{ margin: "0" }}
              color="indigo darken-1"
            >
              Add to cart
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  ));

  return (
    <MDBContainer>
      <MDBRow style={{ paddingTop: "20px" }}>
        {booksList} {console.log("Filtered", props.filteredBooks)}
      </MDBRow>
    </MDBContainer>
  );
};

export default BooksCards;
