import { createBrowserClient } from '@supabase/ssr'

// Pastikan environment variables sudah ada
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Validasi environment variables
if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase environment variables are missing!')
  console.error('URL:', supabaseUrl ? '✓ Set' : '✗ Missing')
  console.error('Key:', supabaseKey ? '✓ Set' : '✗ Missing')
}

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// Export instance langsung untuk kemudahan
export const supabase = createClient()