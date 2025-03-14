import { Order } from '../types'

interface OrderTableProps {
  orders: Order[]
}

export default function OrderTable({ orders }: OrderTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">Date</th>
            <th className="text-left p-3">Service</th>
            <th className="text-left p-3">Quantity</th>
            <th className="text-left p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-3">{order.date.toLocaleString()}</td>
              <td className="p-3">{order.serviceId}</td>
              <td className="p-3">{order.quantity}</td>
              <td className="p-3 capitalize">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
