import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useItem from '../hooks/useItem'

const PhotoDetail = () => {
  const categoryItem = useItem()
  const params = useParams<{ category: string; id: string }>()
  const photo = categoryItem.photos[parseInt(params.id!)]

  if (!photo) {
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
            <li>
              <Link to={`/${params.category}`}>{categoryItem.title}</Link>
            </li>
            <li className="is-active">
              <Link to={`/${params.category}/${params.id}`}>{photo.title}</Link>
            </li>
          </ul>
        </nav>
        <h3 className="title">{photo.title}</h3>
        <>
          <figure key={photo.title} className="image">
            <img src={photo.imageURL} alt={photo.title} />
          </figure>
          <p className="is-small">
            <a href={photo.sourceURL}>Source</a>
          </p>
        </>
      </div>
    </section>
  )
}

export default PhotoDetail
