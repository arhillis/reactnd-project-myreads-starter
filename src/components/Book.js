import React from 'react'
import * as BooksAPI from '../BooksAPI'

class Book extends React.Component{
    constructor(props){
        super(props)
        this.shelf = this.props.book.shelf
        this.moveBook = this.moveBook.bind(this)
    }
    moveBook(e){
        const shelf = e.target.value
        const book = this.props.book

        if(book.shelf !== shelf){
            BooksAPI.update(this.props.book, shelf).then(() => this.props.onRefreshAllBooks())
        }
        
    }
    render(){
        let book = this.props.book
        return (
            <li>
                <div className="book" key={book.title}>
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail}) `}}></div>
                    <div className="book-shelf-changer">
                        <select onInput={e => this.moveBook(e)}>
                        <option value="move">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}</div>
                </div>
            </li>
        )
    }
}

export default Book