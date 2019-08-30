import React from 'react';
import Link from 'gatsby-link'

export default ({ url, title, date }) => (
  <Link to={url} className={"blog-post-excerpt__container"}>
    <h3 className={"blog-post-excerpt__title"}>
        {title}
    </h3>
    <small className={"blog-post-excerpt__date"}>{date}</small>
  </Link>
);
