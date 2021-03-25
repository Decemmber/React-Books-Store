import "./App.css";
import React, { useEffect, useState, Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import BooksCards from "./components/BooksCards";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import BookPage from "./components/BookPage/BookPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const initialCart = JSON.parse(window.localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(initialCart);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(null);
  let searchParams = new URLSearchParams(useLocation().search);
  searchParams.get("search");

  // Add item to cart
  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Total price on the cart
  const totalPrice = cart.reduce(
    (previousPrice, currentPrice) =>
      previousPrice + parseFloat(currentPrice.price),
    0
  );

  // Remove book from the cart
  const removeFromCartHandler = (bookToRemove) => {
    console.log(bookToRemove);
    setCart(cart.filter((book) => book !== bookToRemove));
    console.log(cart.book);
  };

  // Toggle open/close modal
  const toggleModal = () => {
    setModal(!modal);
  };

  // Filtered books by Search
  const filteredBooks = books.filter((book) => {
    const search = searchParams.get("search");
    if (search === null) {
      return book;
    } else if (book.title.toLowerCase().includes(search.toLowerCase())) {
      return book;
    }
  });

  // Fetch data from API
  useEffect(async () => {
    const result = await axios(
      "http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books"
    );
    setBooks(result.data.books);
  }, []);

  return (
    <>
      <Navigation cart={cart} modalToggleHandler={toggleModal} />
      <Switch>
        <Route path="/books/:id" children={<BookPage onClick={books} />} />
        <Route path="/" exact>
          <div className="App">
            <BooksCards
              filteredBooks={filteredBooks}
              books={books}
              onClick={addToCart}
            />
            <ShoppingBag
              totalPrice={totalPrice.toFixed(2)}
              removeFromCart={removeFromCartHandler}
              booksOnTheCart={cart}
              modalState={modal}
              modalToggleHandler={toggleModal}
            />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
