import './App.css'
import MainPage from './pages/MainPage/index.jsx';
import { Reset } from 'styled-reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import QuestionPage from './pages/QuestionPage/index.jsx';
// import firebase_config from '/firebase_config.js';

function App() {
    // console.log(firebase_config)
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route exact path='/question' element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
