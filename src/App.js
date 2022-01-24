import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BookList from './components/BookList';
import BookSearch from './components/BookSearch';
import * as BooksAPI from './BooksAPI'

class App extends React.Component {
  state = {
    books: [],
  }

  getAllBooks = async () => {
    const response = await BooksAPI.getAll();
    this.setState({ books: response });
  }

  async componentDidMount() {
    this.getAllBooks()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" exact element={<BookList books={this.state.books} getAllBooks={this.getAllBooks} />} />
            <Route path="/search" element={<BookSearch books={this.state.books} getAllBooks={this.getAllBooks} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;