import { Outlet, Link, Navigate } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

export default function Layout() {
  const { isAuthenticated } = useAuthStore()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-secondary">
      <nav className="bg-white dark:bg-secondary border-b dark:border-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-bold text-primary">SMM Panel</Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? (
                  <MoonIcon className="w-6 h-6" />
                ) : (
                  <SunIcon className="w-6 h-6" />
                )}
              </button>
              <Link to="/orders" className="text-gray-700 dark:text-gray-300 hover:text-primary">
                Orders
              </Link>
              <Link to="/wallet" className="text-gray-700 dark:text-gray-300 hover:text-primary">
                Wallet
              </Link>
              <button className="text-red-500 hover:text-red-700">Logout</button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
