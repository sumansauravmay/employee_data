import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Employee from '../page/Employee'
import Newemployee from '../page/Newemployee'

const AllRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Employee/>}></Route>
      <Route path='/newemployee' element={<Newemployee/>}></Route>
    </Routes>
  )
}

export default AllRoute
