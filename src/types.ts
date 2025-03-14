export interface Service {
  id: string
  name: string
  rate: number
  min: number
  max: number
}

export interface Order {
  id: string
  date: Date
  serviceId: string
  url: string
  quantity: number
  status: 'pending' | 'completed'
}

export interface Transaction {
  id: string
  date: Date
  amount: number
  type: 'deposit' | 'withdrawal'
  status: 'completed' | 'pending'
}
