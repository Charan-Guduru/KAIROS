const SUPABASE_URL = 'https://sqsvomlknfabnejalfdq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxc3ZvbWxrbmZhYm5lamFsZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwMzczMzAsImV4cCI6MjA5NzYxMzMzMH0.gI3LPyg5yKy0cPb_N6EHkqyKLoheq4ibkpbbMwpyWOw';

// Create ONE real Supabase client
window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// Safety check (VERY important for debugging)
if (!window.supabaseClient) {
  console.error("❌ Supabase client failed to initialize");
} else {
  console.log("✅ Supabase client initialized successfully");
  console.log("Auth check:", window.supabaseClient.auth);
}