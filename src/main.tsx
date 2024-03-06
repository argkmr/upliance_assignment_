import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import Login from './components/Login.tsx'
// import LandingPage from './components/LandingPage.tsx'
import CounterTask from './components/CounterTask.tsx'
import FormTask from './components/FormTask.tsx'
import EditorTask from './components/EditorTask.tsx'
import Dashboard from './components/Dashboard.tsx'
import Protected from './components/Protected.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/" element={<CounterTask />} />
      <Route path="/counter" element={<CounterTask />} />
      <Route path="/form" element={<FormTask />} />
      <Route path="/editor" element={<EditorTask />} />
      <Route path='/login' element={<Login />} />
      <Route path="/" element={<Protected />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
