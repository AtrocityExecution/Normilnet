import { useState } from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import Deathmetal from "../music/Panchiko - D-E-L-U-X-E-M-E-T-A-L - 01 Deathmetal - Vinyl Remaster.mp3"
import TopNav from '../components/top-nav'
import BottomNav from '../components/bottom-nav'
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
      <audio autoPlay loop>
        <source src={Deathmetal} type="audio/mp3" />
      </audio>
      <TopNav />
      <Routes>
        
        <Route path='/' element={ <Navigate to="/home"/> } />
        <Route path='/home' index={true} element={ <HomePage /> } />
        <Route path='/reading' element={ <ReadingPage /> } />
        <Route path='/projects' element={ <ProjectsPage /> } />
        <Route path='/gallery' element={ <GalleryPage /> } />
        <Route path='/blog' element={ <BlogPage /> } />
        <Route path='*' element={ <NotFoundPage/> } />
        
      </Routes>
      <BottomNav />
      </BrowserRouter>
    </>
  )
}

export default App
