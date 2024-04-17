import React from 'react'
import { Link } from 'react-router-dom'
import useItems from '../hooks/useItems'

// HOME PAGE
const CategoryList = () => {
  const categoryItems = useItems()

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
          {categoryItems.map((categoryItem) => (
            <div className="column" key={categoryItem.category}>
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <h2>
                      <Link to={`/${categoryItem.category}`}>
                        {categoryItem.categoryItem.title}
                      </Link>
                    </h2>
                    <p>{categoryItem.categoryItem.description}</p>
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image">
                    {categoryItem.showAllPhotos
                      ? categoryItem.categoryItem.photos.map((photo) => (
                          <img
                            key={photo.title}
                            src={photo.imageURL}
                            alt={photo.title}
                          />
                        ))
                      : categoryItem.categoryItem.photos.length > 0 && (
                          <img
                            src={categoryItem.categoryItem.photos[0].imageURL}
                            alt={categoryItem.categoryItem.photos[0].title}
                          />
                        )}
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
