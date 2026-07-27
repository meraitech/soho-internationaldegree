"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaLock } from "react-icons/fa6";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Invalid email or password");
      }

      router.push("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="w-full max-w-lg mx-auto">
        <div className="text-center mb-8">
          <Link href="/" className="font-heading text-2xl text-background">
            International.degree
          </Link>
        </div>

        <div className="bg-background">
          <div className="flex flex-col items-center px-8 md:px-12 pt-10 md:pt-12 pb-8 md:pb-10">
            <div className="w-12 h-12 bg-dark text-foreground flex items-center justify-center mb-4">
              <FaLock className="text-lg" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl text-foreground">
              Login
            </h1>
            <p className="text-description mt-1">
              Sign in to your account
            </p>
          </div>

          <form className="px-8 md:px-12 pb-10 md:pb-12 space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-3 bg-foreground text-background placeholder:text-description border border-transparent focus:outline-none focus:ring-2 focus:ring-description transition-colors"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 bg-foreground text-background placeholder:text-description border border-transparent focus:outline-none focus:ring-2 focus:ring-description transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-dark text-foreground px-6 py-3.5 font-medium transition-colors hover:bg-sekeleton disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-description"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
