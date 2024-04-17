import React from 'react'
import { Link } from 'react-router-dom'
import useItems from '../hooks/useItems'

// HOME PAGE
const CategoryList = () => {
  const categoryItems = useItems()

  if (!categoryItems) {
    return null
  }

  return (
    <section>
      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li className="is-active">
              <Link to="/">
                <span className="icon">
                  <i className="fa fa-home" aria-hidden="true" />
                </span>
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="columns">
          {categoryItems.map((item) => (
            <div className="column" key={item.category}>
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <h2>
                      <Link to={`/${item.category}`}>
                        {item.categoryItem.title}
                      </Link>
                    </h2>
                    <p>{item.categoryItem.description}</p>
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image">
                    <img
                      src={item.categoryItem.photos[0].imageURL}
                      alt={item.categoryItem.photos[0].title}
                    />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryList
