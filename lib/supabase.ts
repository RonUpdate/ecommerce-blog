// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Получаем переменные окружения для анонимного и сервисного ключа
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! // добавляем в .env.local
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // добавляем в .env.local
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY! // добавляем в .env.local для серверных запросов

// Создание клиента для анонимных запросов
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Создание клиента для сервисного ключа (только на серверной стороне)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey)
