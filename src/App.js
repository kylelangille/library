import React, { useEffect, useState } from "react";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import NewBook from "./components/NewBook/NewBook";
import Books from "./components/Books/Books";

const DUMMY_BOOKS = [
  {
    id: "b1",
    title: "A Thousand Plateaus",
    author: "Deleuze and Guattari",
    hasRead: true,
  },
];

function App() {
  const [books, setBooks] = useState(DUMMY_BOOKS);

  useEffect(() => {
    localStorage.setItem("bookData", JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("bookData"));
    if (books) {
      setBooks(books);
    }
  }, [books]);

  const addBookHandler = (book) => {
    setBooks((prevBooks) => {
      return [book, ...prevBooks];
    });
  };

  const deleteBookHandler = (bookId) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => book.id !== bookId);
      return updatedBooks;
    });
  };

  return (
    <div>
      <Header />
      <NewBook onAddBook={addBookHandler} />
      <Books items={books} onDeleteBook={deleteBookHandler} />
      <Footer />
    </div>
  );
}

export default App;
