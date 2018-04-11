import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Templates/header';

class HeaderContainer extends Component {
    render() {
        const { books } = this.props;
        let bookCount = books.filter((book) => !book.checked).length;
        return (
            <Header name="Joh" bookCount={ bookCount }/>
        )
    } 
}

export default connect(
    (state) => ({books: state.books})
)(HeaderContainer);