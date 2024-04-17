import React from 'react'
import data from '../photos.json'
import { useParams } from 'react-router-dom'
import { useCategoryItemContext } from '../context/CategoryItemContext'

const useItem = () => {
  const params = useParams<{ category: string }>()
  const categoryItemContext = useCategoryItemContext()

  React.useEffect(() => {
    try {
      const category = params.category as keyof typeof data
      if (params.category && data[category]) {
        categoryItemContext.setCategoryItem(data[category])
      } else {
        console.error(`Category with title ${params.category} not found.`)
      }
    } catch (error) {
      console.error('Error loading category item:', error)
    }
  }, [categoryItemContext, params.category])

  return categoryItemContext.categoryItem
}

export default useItem
