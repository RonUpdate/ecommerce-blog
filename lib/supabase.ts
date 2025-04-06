// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Используем правильный формат для переменных окружения
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! // добавляем в .env.local
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // добавляем в .env.local

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
