import React from 'react'
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI'
import BookCard from './BookCard';


class BooksList extends React.Component {
    state = {
        books: [],
    }

    async componentDidMount() {
        const response = await BooksAPI.getAll();
        this.setState({ books: response });
    }


    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.books.map((book) => {
                                        if (book.shelf === "currentlyReading") {
                                            return (<BookCard bookObj={book} key={book.id} />)
                                        } else {
                                            return null
                                        }
                                    })}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.books.map((book) => {
                                        if (book.shelf === "wantToRead") {
                                            return (<BookCard bookObj={book} key={book.id} />)
                                        } else {
                                            return null
                                        }
                                    })}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.state.books.map((book) => {
                                        if (book.shelf === "read") {
                                            return (<BookCard bookObj={book} key={book.id} />)
                                        } else {
                                            return null
                                        }
                                    })}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search"><button>Add a book</button></Link>
                </div>
            </div>
        )
    }
}

export default BooksList;
