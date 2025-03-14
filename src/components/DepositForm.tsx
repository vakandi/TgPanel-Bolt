import { useForm } from 'react-hook-form'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function DepositForm({ onDeposit }: { 
  onDeposit: (amount: number) => void 
}) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form onSubmit={handleSubmit((data) => onDeposit(Number(data.amount)))} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Amount</label>
        <input
          type="number"
          step="0.01"
          {...register('amount', { required: true, min: 5 })}
          className="w-full p-2 border rounded dark:bg-gray-800"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm mt-1">Minimum deposit is $5.00</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Payment Method</label>
        <select
          className="w-full p-2 border rounded dark:bg-gray-800"
          defaultValue="stripe"
        >
          <option value="stripe">Credit/Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="crypto">Crypto</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
      >
        <ArrowDownTrayIcon className="w-5 h-5" />
        Deposit Funds
      </button>
    </form>
  )
}
