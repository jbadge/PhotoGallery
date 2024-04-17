import React from 'react'
import { CategoryType } from '../types/PhotoListTypes'
import { Link } from 'react-router-dom'

const CategoryItem = ({
  category,
  categoryItem: { title, description, photos },
  showAllPhotos = false,
}: CategoryType) => {
  return (
    <div className="card-content">
      <div className="content">
        <h2>
          <Link to={`/${category}`}>{title}</Link>
        </h2>
        <p>{description}</p>
      </div>
      <div className="card-image">
        <figure className="image">
          {showAllPhotos
            ? photos.map((photo) => (
                <img key={photo.title} src={photo.imageURL} alt={photo.title} />
              ))
            : photos.length > 0 && (
                <img src={photos[0].imageURL} alt={photos[0].title} />
              )}
        </figure>
      </div>
    </div>
  )
}

export default CategoryItem
