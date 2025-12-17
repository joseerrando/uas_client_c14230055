import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">404 | Halaman tidak Ditemukan</h1>
      <p className="text-gray-600 mb-8">
        Kami mohon maaf, kami tidak dapat menemukan halaman yang Anda cari.
      </p>
      
      <Link 
        href="/" 
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}