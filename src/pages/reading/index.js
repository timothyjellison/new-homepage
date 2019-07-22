import React from 'react'
import '../index.css';
import PageTransition from 'gatsby-plugin-page-transitions';
import books from '../../../static/books';

class BlogIndex extends React.PureComponent {
  render() {
    return (
      <PageTransition>
        <div className="home-page">
          <p>I've always been a big reader, and I love to share when I've found a good book.</p>
          <div className="books-grid">
            {books.map(book => {
              return <div className="book">
                <img src={book.imageUrl} />
                <h2>{book.title}</h2>
                <h3>by {book.author}</h3>
                <p>{book.review}</p>
              </div>
            })}
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default BlogIndex
