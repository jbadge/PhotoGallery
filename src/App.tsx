import React from 'react'
import { CategoryItemContextProvider } from './context/CategoryItemContext'
import { Route, Routes } from 'react-router-dom'
import Heading from './components/Heading'
import CategoryList from './pages/CategoryList'
import PhotoDetail from './pages/PhotoDetail'
import PhotoList from './pages/PhotoList'

export function App() {
  return (
    <CategoryItemContextProvider>
      <main>
        <Heading />
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
