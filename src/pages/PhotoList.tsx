import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
// import { CategoryItemType } from '../types/PhotoListTypes'
import { useCategoryItemContext } from '../context/CategoryItemContext'

const PhotoList = () => {
  const params = useParams<{ category: string }>()
  const categoryItemContext = useCategoryItemContext()
  // const [categoryItem, setCategoryItem] = React.useState<CategoryItemType>({
  //   title: '',
  //   description: '',
  //   photos: [],
  // })

  React.useEffect(() => {
    async function loadItem() {
      try {
        const response = await axios.get('/photos.json')
        if (response.status === 200) {
          const data = response.data
          if (params.category && data[params.category]) {
            categoryItemContext.setCategoryItem(data[params.category])
          } else {
            console.error(`Category with title ${params.category} not found.`)
          }
        }
      } catch (error) {
        console.error('Error loading category item:', error)
      }
    }
    loadItem()
  }, [params.category])

  if (!categoryItemContext.categoryItem) {
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
              <Link to={`/${params.category}`}>
                {categoryItemContext.categoryItem.title}
              </Link>
            </li>
          </ul>
        </nav>
        <h3 className="title">{categoryItemContext.categoryItem.title}</h3>
        <h4 className="subtitle">
          {categoryItemContext.categoryItem.description}
        </h4>
        <div className="columns is-multiline">
          {categoryItemContext.categoryItem.photos.map((photo, index) => (
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
