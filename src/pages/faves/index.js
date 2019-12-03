import React, { Fragment } from 'react'
import Layout from '../../components/Layout'
import faves from '../../utils/faves'
import { FAVE_TYPES } from '../../utils/constants'
import { Link } from 'gatsby'

export default props => (
  <Layout location={props.location}>
    {Object.values(FAVE_TYPES).map(type => (
      <div className="faves-category">
        <h2>{type}</h2>
        <div className="faves-grid">
          {faves
            .filter(fave => fave.type === type)
            .map(fave => (
              <div className="fave">
                <Link to={`/faves/${fave.page}`}>
                  <img src={fave.imageUrl} alt={fave.name} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    ))}
  </Layout>
)
