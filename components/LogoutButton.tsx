'use client'

import { useState } from 'react'
import { signOut } from '@/actions/auth'

export default function LogoutButton() {
  const [loading, setLoading] = useState(false)

  async function handleLogout() {
    setLoading(true)
    await signOut()
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
    >
      {loading ? 'Logging out...' : 'Logout'}
    </button>
  )
}
