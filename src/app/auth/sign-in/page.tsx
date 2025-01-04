"use client"
import { redirect } from 'next/navigation'

export default function SignIn() {

    const session = false;

    if (session) {
            redirect('/dashboard');
    }

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">Sign In</h1>
                <p className="text-lg text-muted-foreground">Sign in to your account to continue.</p>
            </div>
        </div>
    )
}