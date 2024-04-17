import React from 'react'
import { CategoryItemType, CategoryType } from '../types/PhotoListTypes'

export type CategoryItemContextType = {
  categoryItem: CategoryItemType
  setCategoryItem: React.Dispatch<React.SetStateAction<CategoryItemType>>
  categoryItems: CategoryType[]
  setCategoryItems: React.Dispatch<React.SetStateAction<CategoryType[]>>
}

const defaultCategoryItem: CategoryItemType = {
  title: '',
  description: '',
  photos: [],
}

const defaultCategoryItems: CategoryType[] = []

export const CategoryItemContext = React.createContext<CategoryItemContextType>(
  {
    categoryItem: defaultCategoryItem,
    setCategoryItem: () => {},
    categoryItems: defaultCategoryItems,
    setCategoryItems: () => {},
  }
)

type Props = {
  children: React.ReactNode
}

export const CategoryItemContextProvider = ({ children }: Props) => {
  const [categoryItem, setCategoryItem] =
    React.useState<CategoryItemType>(defaultCategoryItem)
  const [categoryItems, setCategoryItems] =
    React.useState<CategoryType[]>(defaultCategoryItems)

  const memoizedContextValue = React.useMemo(() => {
    return { categoryItem, setCategoryItem, categoryItems, setCategoryItems }
  }, [categoryItem, setCategoryItem, categoryItems, setCategoryItems])

  return (
    <CategoryItemContext.Provider value={memoizedContextValue}>
      {children}
    </CategoryItemContext.Provider>
  )
}

export const useCategoryItemContext = () => {
  const categoryItemContext = React.useContext(CategoryItemContext)

  if (!categoryItemContext) {
    throw new Error('You need to use this context inside a Provider')
  }
  return categoryItemContext
}
