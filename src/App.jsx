import AllComponentPage from './pages/allComponents'
import HomePage from './pages/homePage'
import './styles/global.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/all" element={<AllComponentPage />} />
  </Routes>
    </>
  )
}

export default App
