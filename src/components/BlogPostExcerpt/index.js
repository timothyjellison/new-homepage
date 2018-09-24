import React from 'react';
import Link from 'gatsby-link'
import styles from './style.module.css';

class BlogPostExcerpt extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to={this.props.url} className={styles.container}>
          <h3 className={styles.title}>
              {this.props.title}
          </h3>
          <small className={styles.date}>{this.props.date}</small>
        </Link>
      </div>
    );
  }
}

export default BlogPostExcerpt;
