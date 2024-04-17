import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import CategoryList from './pages/CategoryList'
import PhotoDetail from './pages/PhotoDetail'
import PhotoList from './pages/PhotoList'
import { useCategoryItemContext } from './context/CategoryItemContext'
import { CategoryItemContextProvider } from './context/CategoryItemContext'
import { CategoryType } from './types/PhotoListTypes'

export function App() {
  const categoryItemContext = useCategoryItemContext()

  function loadAllItems() {
    async function fetchItems() {
      try {
        const response = await axios.get('/photos.json')

        if (response.status === 200) {
          const data: CategoryType[] = Object.entries(response.data).map(
            ([category, categoryData]: [string, any]) => ({
              category,
              categoryItem: {
                title: categoryData.title,
                description: categoryData.description,
                photos: categoryData.photos,
              },
              showAllPhotos: false,
            })
          )
          categoryItemContext.setCategoryItems(data)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchItems()
  }

  React.useEffect(() => {
    loadAllItems()
  }, [])

  return (
    <CategoryItemContextProvider>
      <main>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <Link to={'/'}>Things My Friend Jason Likes</Link>
              </h1>
              <h2 className="subtitle">
                A Replicated Photo Gallery by Jeremy Badger
              </h2>
            </div>
          </div>
        </section>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/:category" element={<PhotoList />} />
          <Route path="/:category/:id" element={<PhotoDetail />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </main>
    </CategoryItemContextProvider>
  )
}
