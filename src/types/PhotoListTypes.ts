export type CategoryType = {
  category: string
  categoryItem: CategoryItemType
  showAllPhotos?: boolean
}

export type CategoryItemType = {
  title: string
  description: string
  photos: Photo[]
}

export type Photo = {
  title: string
  imageURL: string
  sourceURL: string
}
