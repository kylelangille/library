import React, { useState } from "react";
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

  let content = (
    <h2 style={{ textAlign: "center", color: "#ccc", marginTop: "1rem" }}>
      No books found. Maybe add one?
    </h2>
  );

  if (books.length > 0) {
    content = <Books items={books} onDeleteBook={deleteBookHandler} />;
  }

  return (
    <div>
      <Header />
      <NewBook onAddBook={addBookHandler} />
      {content}
      <Footer />
    </div>
  );
}

export default App;
