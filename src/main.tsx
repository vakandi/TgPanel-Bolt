import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Auth from './pages/Auth'
import Orders from './pages/Orders'
import Wallet from './pages/Wallet'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={<Layout />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/wallet" element={<Wallet />} />
        </Route>
        <Route path="*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
