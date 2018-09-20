import React from 'react';
import Link from 'gatsby-link'

export default (props) => {
  const {prevTitle, prevURL, nextTitle, nextURL} = props;

  return (
    <ul>
      <li>
        {prevTitle && prevURL &&
          <Link to={prevURL} rel="prev">
            {prevTitle}
          </Link>
        }
      </li>
      <li>
        {nextTitle && nextURL &&
          <Link to={nextURL} rel="next">
            {nextTitle}
          </Link>
        }
      </li>
    </ul>
  );
}