import React from 'react';


class BookCard extends React.Component {

    constructor(props) {
        super(props);
        const defaultSelf = this.props.shelf ? this.props.shelf : "none"
        this.state = {
            selectedShelf: this.props.bookObj.shelf ? this.props.bookObj.shelf : defaultSelf,
        }
    }

    onHandleChangeShelf = async (e) => {
        this.props.onHandleChangeCardShelf(this.props.bookObj, e.target.value);
    }

    render() {
        const { bookObj } = this.props;
        let img = null
        try {
            img = bookObj.imageLinks.thumbnail
        } catch (e) { }
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${img}")` }}></div>
                        <div className="book-shelf-changer">
                            <select value={this.state.selectedShelf} onChange={this.onHandleChangeShelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{bookObj.title}</div>
                    <div className="book-authors">{bookObj.authors ? bookObj.authors.toString() : null}</div>
                </div>
            </li>
        )
    }
}

export default BookCard;