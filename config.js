const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

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