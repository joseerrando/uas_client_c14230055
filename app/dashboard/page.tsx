import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import LogoutButton from '@/components/LogoutButton'

interface Announcement {
  id: string
  title: string
  content: string
  created_at: string
}

export default async function DashboardPage() {
  const supabase = await createClient()

  // Get user session
  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error || !user) {
    redirect('/login')
  }

  // Fetch announcements
  const { data: announcements } = await supabase
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Portal Karyawan
            </h1>
            <p className="text-gray-600 mt-2">
              Selamat datang, <span className="font-semibold">{user.email}</span>
            </p>
          </div>
          <LogoutButton />
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-lg shadow p-6 mb-8 text-black">
          <h2 className="text-xl font-semibold mb-4">Informasi Profil</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Email:</span> {user.email}</p>
            <p><span className="font-medium">ID User:</span> {user.id}</p>
            <p><span className="font-medium">Terakhir Login:</span> {new Date().toLocaleDateString('id-ID')}</p>
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6 text-red-400">Pengumuman</h2>
          
          {announcements && announcements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {announcements.map((announcement: Announcement) => (
                <div
                  key={announcement.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2 text-black">{announcement.title}</h3>
                  <p className=" mb-4 text-black">{announcement.content}</p>
                  <p className="text-smt text-black">
                    {new Date(announcement.created_at).toLocaleDateString('id-ID')}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500">Tidak ada pengumuman</p>
          )}
        </div>
      </div>
    </div>
  )
}
