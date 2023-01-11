import React from 'react'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
  const {data: session} = useSession()
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user.email}</p>
      </div>
  )
}

export default Dashboard