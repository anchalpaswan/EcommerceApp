import Header from './components/Header'
import Products from './pages/Product'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import {Container} from '@chakra-ui/react'
import './App.css'
function App() {
  return (
    <Container p='0'  maxW='100vw' h= '100vh'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  )
}

export default App
