import './App.css'
import UserList from './components/UserList'
import { Routes, Route } from 'react-router-dom'
import UserDetail from './components/UserDetail'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
    </>
  )
}

export default App
