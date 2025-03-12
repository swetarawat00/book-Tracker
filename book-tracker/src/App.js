import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const addBook = () => {
    if (title && author && genre) {
      setBooks([...books, { title, author, genre, status: "To Read" }]);
      setTitle("");
      setAuthor("");
      setGenre("");
    }
  };

  const updateStatus = (index, status) => {
    const updatedBooks = books.map((book, i) =>
      i === index ? { ...book, status } : book
    );
    setBooks(updatedBooks);
  };

  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="title">📚 Book Tracker</h1>
      <div className="input-group">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          placeholder="Enter book title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input"
          placeholder="Enter author name"
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="input"
          placeholder="Enter book genre"
        />
        <button onClick={addBook} className="add-button">Add Book</button>
      </div>
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <div>
              <p className="book-title">{book.title}</p>
              <p className="book-details">{book.author} - {book.genre}</p>
              <p className={`book-status ${book.status.toLowerCase()}`}>{book.status}</p>
            </div>
            <div className="button-group">
              <button onClick={() => updateStatus(index, "Reading")} className="status-button reading">📖</button>
              <button onClick={() => updateStatus(index, "Completed")} className="status-button completed">✅</button>
              <button onClick={() => removeBook(index)} className="status-button delete">❌</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
