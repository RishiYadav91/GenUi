import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nopage from './pages/Nopage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="*" element={<Nopage/>} />

      </Routes>
    </BrowserRouter>
  ) 
}

export default App