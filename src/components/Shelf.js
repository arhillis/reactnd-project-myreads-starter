import React from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Shelf extends React.Component{
    state = {}

    componentDidMount(){
        BooksAPI.getAll().then(
            this.setState({
            header: this.props.name,
            books: this.props.books
        })
        )
        

    }
    render(){
        const shelf = this.props.shelf || {name: 'Shelf comming soon', key: 'key', books: []}
            return (
                <div key={shelf.key}>
                    <h2 className='bookshelf-title'>{shelf.name}</h2>
                    <ol className='books-grid'>
                        {shelf.books.map((book) => (
                            <Book book={book} onRefreshAllBooks={this.props.onRefreshAllBooks} shelf={shelf}/>
                        ))}
                    </ol>
                    
                </div>
            )
        
        
    }
}

export default Shelf