import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import NavigationBar from './components/Layouts/NavigationBar';
import Home from './pages/Home';
import Create from './pages/Create';
import StudentList from './pages/students/StudentList';

function App() {


  return (
  <BrowserRouter>
   <div className='flex'>
    <NavigationBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/students' element={<StudentList/>} />
      </Routes>
   </div>
  </BrowserRouter>
  )
}

export default App
