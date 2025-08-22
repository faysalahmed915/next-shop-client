"use client"
import { signIn } from "next-auth/react"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-10 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <button
                    onClick={() => signIn("google")}
                    className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}