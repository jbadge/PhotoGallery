import React from 'react'
import response from '../photos.json'
import { useCategoryItemContext } from '../context/CategoryItemContext'

const useItems = () => {
  const categoryItemContext = useCategoryItemContext()
  const categoryItemContextRef = React.useRef(categoryItemContext)

  React.useEffect(() => {
    async function fetchItems() {
      try {
        const data = Object.entries(response).map(
          ([category, categoryItem]: [string, any]) => ({
            category,
            categoryItem: {
              title: categoryItem.title,
              description: categoryItem.description,
              photos: categoryItem.photos,
            },
          })
        )
        categoryItemContextRef.current.setCategoryItems(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchItems()
  }, [categoryItemContextRef])

  return categoryItemContext.categoryItems
}

export default useItems
