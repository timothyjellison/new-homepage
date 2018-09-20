import React from 'react';
import Link from 'gatsby-link'

export default (props) => {
  return (
    <div>
      <h3>
        <Link to={props.url}>
          {props.title}
        </Link>
      </h3>
      <small>{props.date}</small>
      <p dangerouslySetInnerHTML={{ __html: props.excerpt }} />
    </div>
  );
}
