import React from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI'
import BookCard from './BookCard';


class BookSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            query: "",
            searchedBooks: [],
            shelvedBooks: {},
        }
        this.queryTimer = null
    }

    async componentDidMount() {
        const booksObj = Object.assign({}, ...this.props.books.map((book) => ({ [book.id]: book })));
        this.setState({ shelvedBooks: booksObj });
    }

    onHandleSearch = async (e) => {
        if (this.queryTimer) {
            clearTimeout(this.queryTimer);
        }
        this.setState({ query: e.target.value.trim() });

        this.queryTimer = setTimeout(async () => {
            try {
                const response = await BooksAPI.search(this.state.query)
                if (response.error) {
                    this.setState({ searchedBooks: [] })
                } else {
                    this.setState({ searchedBooks: response })
                }
            } catch (e) {
                this.setState({ searchedBooks: [] })
            }
        }, 1000);
    }

    onHandleChangeCardShelf = async (book, shelf) => {
        await BooksAPI.update(book, shelf);
        this.props.getAllBooks()
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.onHandleSearch}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.map((book) => {
                            let bookShelf = null
                            if (book.id in this.state.shelvedBooks) {
                                bookShelf = this.state.shelvedBooks[book.id].shelf
                            }
                            return (<BookCard bookObj={book} shelf={bookShelf} key={book.id} onHandleChangeCardShelf={this.onHandleChangeCardShelf} />)
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch;