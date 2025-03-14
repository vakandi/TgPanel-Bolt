import { useState } from 'react'
import DepositForm from '../components/DepositForm'
import TransactionTable from '../components/TransactionTable'

interface Transaction {
  id: string
  date: Date
  amount: number
  type: 'deposit' | 'withdrawal'
  status: 'completed' | 'pending'
}

export default function Wallet() {
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState<Transaction[]>([])

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-accent p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Account Balance: ${balance.toFixed(2)}</h2>
        <DepositForm onDeposit={(amount) => {
          setBalance(prev => prev + amount)
          setTransactions([...transactions, {
            id: Date.now().toString(),
            date: new Date(),
            amount,
            type: 'deposit',
            status: 'pending'
          }])
        }} />
      </div>

      <div className="bg-white dark:bg-accent p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Transaction History</h2>
        <TransactionTable transactions={transactions} />
      </div>
    </div>
  )
}
