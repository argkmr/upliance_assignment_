import './App.scss'
import { Outlet, useNavigate } from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect } from 'react'

const App = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (navigationEntry && navigationEntry.type === 'reload') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>

  )
}

export default App
