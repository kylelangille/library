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

  return (
    <div>
      <Header />
      <NewBook onAddBook={addBookHandler} />
      <Books items={books} />
      <Footer />
    </div>
  );
}

export default App;
