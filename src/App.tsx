import './App.scss'
import { Outlet } from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>

  )
}

export default App
