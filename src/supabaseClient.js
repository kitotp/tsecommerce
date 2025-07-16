import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabase_publicKey = process.env.REACT_APP_SUPABASE_PUBLICKEY

console.log(supabaseUrl, supabase_publicKey)

const supabase = createClient(supabaseUrl, supabase_publicKey)

export default supabase