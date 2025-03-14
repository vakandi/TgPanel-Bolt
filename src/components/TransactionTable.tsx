import { Transaction } from '../types'

interface TransactionTableProps {
  transactions: Transaction[]
}

export default function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-3">Date</th>
            <th className="text-left p-3">Type</th>
            <th className="text-left p-3">Amount</th>
            <th className="text-left p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b">
              <td className="p-3">{t.date.toLocaleString()}</td>
              <td className="p-3 capitalize">{t.type}</td>
              <td className="p-3">${t.amount.toFixed(2)}</td>
              <td className="p-3 capitalize">{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
