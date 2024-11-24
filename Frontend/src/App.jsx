
import Home from './pages/Home.jsx'
import BuyCredit from './pages/BuyCredit.jsx'
import Result from './pages/Result.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Login from './components/Login.jsx'
import { useContext } from 'react'
import { AppContext } from './context/AppContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gredient-to-blue-100 from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right' />
      <Navbar />
      { showLogin &&  <Login />}
     
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/buy' element={ <BuyCredit />} />
        <Route path='/result' element={  <Result />} />
      </Routes>
     <Footer />
    </div>
  )
}

export default App
