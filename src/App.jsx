import './App.css'
import MainPage from './pages/MainPage/index.jsx';
import { Reset } from 'styled-reset';
// import firebase_config from '/firebase_config.js';

function App() {
    // console.log(firebase_config)
  return (
    <>
      <Reset />
      <MainPage />
    </>
  )
}

export default App
