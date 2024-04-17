import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useItem from '../hooks/useItem'

const PhotoList = () => {
  const categoryItem = useItem()
  const params = useParams<{ category: string }>()

  if (!categoryItem) {
    return null
  }

  return (
    <section>
      <div className="container">
        <nav className="breadcrumb">
          <ul>
            <li>
              <Link to={'/'}>
                <span className="icon">
                  <i className="fa fa-home" aria-hidden="true" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li className="is-active">
              <Link to={`/${params.category}`}>{categoryItem.title}</Link>
            </li>
          </ul>
        </nav>
        <h3 className="title">{categoryItem.title}</h3>
        <h4 className="subtitle">{categoryItem.description}</h4>
        <div className="columns is-multiline">
          {categoryItem.photos.map((photo, index) => (
            <div className="column is-one-third" key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="card-image">
                    <figure className="image">
                      <Link to={`/${params.category}/${index}`}>
                        <img src={photo.imageURL} alt={photo.title} />
                      </Link>
                      <figcaption>
                        <Link to={`/${params.category}/${index}`}>
                          {photo.title}
                        </Link>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="content" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotoList
