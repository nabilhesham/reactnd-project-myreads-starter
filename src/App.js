import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BookList from './components/BookList';
import BookSearch from './components/BookSearch';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" exact element={<BookList />} />
            <Route path="/search" element={<BookSearch />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;