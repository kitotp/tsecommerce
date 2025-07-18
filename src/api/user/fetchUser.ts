import { AuthError, Session, User } from "@supabase/supabase-js";
import supabase from "../../supabaseClient"

type HandleLoginProps = {
    email: string;
    password: string;
}

export async function handleLogin({ email, password }: HandleLoginProps)
    : Promise<{ session: Session; user: User }> {
    const { data, error }: {
        data: { session: Session | null; user: User | null }
        error: AuthError | null
    } = await supabase.auth.signInWithPassword({
        email,
        password
    })


    if (error) throw error

    if (!data.session || !data.user) {
        throw new Error('no data or no session')
    }

    return {
        session: data.session,
        user: data.user
    }
}