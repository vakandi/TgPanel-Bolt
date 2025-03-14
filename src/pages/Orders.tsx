import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ArrowPathIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { Service, Order } from '../types'
import OrderForm from '../components/OrderForm'
import OrderTable from '../components/OrderTable'

const services: Service[] = [
  { id: '1', name: 'Followers', rate: 0.10, min: 100, max: 10000 },
  { id: '2', name: 'Likes', rate: 0.05, min: 100, max: 50000 },
  { id: '3', name: 'Retweets', rate: 0.08, min: 100, max: 30000 }
]

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all')

  const filteredOrders = orders.filter(order => 
    filter === 'all' ? true : order.status === filter
  )

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-accent p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">New Order</h2>
        <OrderForm services={services} onSubmit={(order) => 
          setOrders([...orders, { ...order, id: Date.now().toString(), status: 'pending', date: new Date() }])
        } />
      </div>

      <div className="bg-white dark:bg-accent p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Order History</h2>
          <div className="flex gap-2">
            {['all', 'pending', 'completed'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-4 py-2 rounded ${filter === f 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <OrderTable orders={filteredOrders} />
      </div>
    </div>
  )
}
