// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://vgkwnmjtzisqopvcphpz.supabase.co
const supabaseAnonKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZna3dubWp0emlzcW9wdmNwaHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM5MjE3ODcsImV4cCI6MjA1OTQ5Nzc4N30.JgzoE7CMt_m54nI5LZ9IiQ2Bn2zCfv_oVUyNtE1rtic

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
