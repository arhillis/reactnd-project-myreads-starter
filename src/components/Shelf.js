import React from 'react'
import * as BooksAPI from '../BooksAPI'

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
        const shelf = this.props.shelf || {name: 'Shelf comming soon'}
            return (
                <div>
                    <h2>{shelf.name}</h2>
                </div>
            )
        
        
    }
}

export default Shelf