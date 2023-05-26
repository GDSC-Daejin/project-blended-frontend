import './App.css'
import MainPage from './pages/MainPage/index.jsx';
import { Reset } from 'styled-reset';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuestionPage from './pages/QuestionPage/index.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "https://blended-mbti.netlify.app/question",
      element: <QuestionPage />,
    },
  ]);


  return (
    <>
      <Reset />
      <RouterProvider router={router} />
    </>
  )
}

export default App
