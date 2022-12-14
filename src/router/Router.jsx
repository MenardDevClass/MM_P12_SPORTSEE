import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import UserSelect from '../pages/UserSelect'
import ErrorPage from '../pages/ErrorPage'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user/" element={<UserSelect />} />
          <Route path="/user/:userId" element={<Dashboard />} /> 
          <Route path="/errorPage" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
