import axios from 'axios'
import React from 'react'
import { CategoryType } from '../types/PhotoListTypes'
import { useCategoryItemContext } from '../context/CategoryItemContext'

const useItems = () => {
  const categoryItemContext = useCategoryItemContext()

  React.useEffect(() => {
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
  }, [])

  return categoryItemContext.categoryItems
}

export default useItems
