import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useCategoryItemContext } from '../context/CategoryItemContext'

const useItem = () => {
  const params = useParams<{ category: string }>()
  const categoryItemContext = useCategoryItemContext()

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
  }, [categoryItemContext, params.category])

  return categoryItemContext.categoryItem
}

export default useItem
