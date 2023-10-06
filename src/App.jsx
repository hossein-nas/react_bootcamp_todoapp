import './App.css'
import AppDataProvider from './components/AppDataProvider'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import TodoApp from './pages/TodoApp'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Register from './pages/Register'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'todo',
        element: <TodoApp />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: '/auth',
    element: <div> Auth Layout </div>,
    children: [
    ]
  }
])

function App() {
  return (
    <AppDataProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AppDataProvider>
  )
}

export default App
