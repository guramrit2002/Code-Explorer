// import COdeEditor from './components/codeeditor';
import AllComponentPage from './pages/allComponents'
import HomePage from './pages/homePage'
import SingleComponent from './pages/singleComponent';
import './styles/global.css'

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/all" element={<AllComponentPage />} />
    <Route path='/component' element ={<SingleComponent/>}/>
  </Routes>

    </>
  )
}

export default App
