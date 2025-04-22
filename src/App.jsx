import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import TopNav from '../components/top-nav'
import BottomNav from '../components/bottom-nav'
import BlogPage from '../pages/blog-page'
import GalleryPage from '../pages/gallery-page'
import HomePage from '../pages/home-page'
import SkillsPage from '../pages/skills-page'
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
        
        <Route path='/' index={true} element={ <HomePage /> } />
        <Route path='/skills' element={ < SkillsPage/> } />
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
