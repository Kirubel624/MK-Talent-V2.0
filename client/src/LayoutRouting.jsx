import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import LayoutApp from './components/layout/LayoutApp'
import StudentsList from './views/students/StudentsList'
import StudentsDetail from './views/students/StudentsDetail'

const LayoutRouting = () => {
  return (
  <Routes>
      <Route  element={<LayoutApp />}>
      <Route index  element={<h1>DashBord</h1>} />
        <Route path='students' element={<StudentsList/>}/>
        <Route path='students/:id' element={<StudentsDetail/>}/>

        <Route path='books' element={<h1>Books</h1>} />
        
        <Route path='*' element={<h1>Books</h1>} />


      </Route>
    </Routes>
  )
}

export default LayoutRouting