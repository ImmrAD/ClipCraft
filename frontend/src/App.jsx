import { useState } from 'react'
import './App.css'
import Titlebar from './components/Titlebar'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/footer';
import About from './components/About';
import Services from './components/Services';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Work from './components/Work';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Titlebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>


  </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
