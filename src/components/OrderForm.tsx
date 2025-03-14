import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BanknotesIcon } from '@heroicons/react/24/outline'

interface OrderFormProps {
  services: Service[]
  onSubmit: (order: Omit<Order, 'id' | 'status' | 'date'>) => void
}

export default function OrderForm({ services, onSubmit }: OrderFormProps) {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm()
  const selectedService = watch('serviceId')
  const quantity = watch('quantity')

  const currentService = services.find(s => s.id === selectedService)
  const total = currentService ? currentService.rate * (quantity || 0) : 0

  useEffect(() => {
    if (currentService) {
      setValue('quantity', currentService.min)
    }
  }, [selectedService])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Service Type</label>
        <select
          {...register('serviceId', { required: true })}
          className="w-full p-2 border rounded dark:bg-gray-800"
        >
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.name} (${service.rate.toFixed(2)} per unit)
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Tweet URL</label>
        <input
          {...register('url', { 
            required: true,
            pattern: /https?:\/\/(www\.)?twitter\.com\/\w+\/status\/\d+/
          })}
          className="w-full p-2 border rounded dark:bg-gray-800"
          placeholder="https://twitter.com/username/status/123456"
        />
        {errors.url && (
          <p className="text-red-500 text-sm mt-1">Valid Twitter URL required</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Quantity</label>
        <input
          type="number"
          {...register('quantity', { 
            required: true,
            min: currentService?.min,
            max: currentService?.max 
          })}
          className="w-full p-2 border rounded dark:bg-gray-800"
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm mt-1">
            Quantity must be between {currentService?.min} and {currentService?.max}
          </p>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">
          Total: ${total.toFixed(2)}
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600 flex items-center gap-2"
        >
          <BanknotesIcon className="w-5 h-5" />
          Place Order
        </button>
      </div>
    </form>
  )
}
