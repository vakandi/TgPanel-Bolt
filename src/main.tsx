import React from 'react'
import ReactDOM from 'react-dom/client'
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Layout from './components/Layout'
import Auth from './pages/Auth'
import Orders from './pages/Orders'
import Wallet from './pages/Wallet'
import './index.css'

// Create history instance properly
const history = createBrowserHistory()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route element={<Layout />}>
          <Route index element={<Orders />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/wallet" element={<Wallet />} />
        </Route>
        <Route path="*" element={<Auth />} />
      </Routes>
    </HistoryRouter>
  </React.StrictMode>
)
