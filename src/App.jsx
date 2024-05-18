import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import TopNav from '../components/top-nav'
import BlogPage from '../pages/blog-page'
import GalleryPage from '../pages/gallery-page'
import HomePage from '../pages/home-page'
import ProjectsPage from '../pages/projects-page'
import ReadingPage from '../pages/reading-page'
import NotFoundPage from '../pages/notfound-page'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
      <TopNav />
      <Routes>
        
        <Route path='/home' index={true} element={<HomePage />} />
        <Route path='/reading' element={<ReadingPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='*' element={<NotFoundPage/>} />
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
