import React from 'react'
import Shelf from './Shelf'

class Bookshelves extends React.Component{
    state = {}

    componentDidMount(){
        this.props.onRefreshAllBooks()
    }
    updateShelves = () => {
        let shelves =  {
            currentlyReading: {
                name: 'Currently Reading',
                key: 'currentlyReading',
                books: this.props.books.filter(book => book.shelf === 'currentlyReading')
            },
            wantToRead: {
                name: 'Want to Read',
                key: 'wantToRead',
                books: this.props.books.filter(book => book.shelf === 'wantToRead')
            },
            read: {
                name: 'Read',
                key: 'read',
                books: this.props.books.filter(book => book.shelf === 'read')
            }
        }
        return shelves
    }
    render(){  
        let shelves = {}
        if(this.props.books && this.props.books.length){
            shelves = this.updateShelves() 
        }
               
        return (
                <div className="list-books-content">
                <div>
                    <Shelf shelf={shelves.currentlyReading} onRefreshAllBooks={this.props.onRefreshAllBooks} key="currentlyReading"/>
                    <Shelf shelf={shelves.wantToRead} onRefreshAllBooks={this.props.onRefreshAllBooks} key="wantToRead"/>
                    <Shelf shelf={shelves.read} onRefreshAllBooks={this.props.onRefreshAllBooks} key="read"/>
                </div>
                
                </div>
            )
        }
}

export default Bookshelves