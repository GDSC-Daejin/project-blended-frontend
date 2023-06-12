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
      path: "question",
      element: <QuestionPage />,
    },
  ]);


  return (
    <div style={{
      minHeight: '100vh',
    }}>
      <Reset />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
