import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import axios from "axios";
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import "./BookPage.css";
import Loader from "../Loader/Loader";

const BookPage = (props) => {
  let { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(async () => {
    const result = await axios(
      "http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books"
    );
    const books = result.data.books;
    const book = books.find((book) => book.isbn13 === id);
    setBook(book);
  }, []);

  if (!book) {
    return <Loader />;
  }
  return (
    <MDBContainer>
      <MDBRow style={{ paddingTop: "20px" }}>
        <MDBCol md="6">
          <h3 style={{ paddingLeft: "50px" }}>{book.title}</h3>

          <img src={book.image} alt="book" />

          <div class="text-left">
            <MDBBtn
              onClick={() => props.onClick(book)}
              style={{ marginLeft: "50px" }}
              color="indigo darken-1"
            >
              Add to cart
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="6">
          <div style={{ marginLeft: "50px", marginTop: "85px" }}>
            <h4>
              <strong>Description</strong>
            </h4>
            <p style={{ width: "350px" }}>{book.subtitle}</p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default BookPage;
