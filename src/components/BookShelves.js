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
                books: this.props.books.filter(book => book.shelf === 'currentlyReading')
            },
            wantToRead: {
                name: 'Want to Read',
                books: this.props.books.filter(book => book.shelf === 'wantToRead')
            },
            read: {
                name: 'Read',
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
                    <Shelf shelf={shelves.currentlyReading}/>
                    <Shelf shelf={shelves.wantToRead} />
                    <Shelf shelf={shelves.read} />
                </div>
                
                </div>
            )
        }
}

export default Bookshelves