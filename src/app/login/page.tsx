"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import ForgotPasswordPage from "../forgot-password/page";
export default function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const { setToken, setUser } = useAuth();
  async function handleLogin(values: any) {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        // API error (wrong email/password)
        form.setError("email", { message: data.message });
        return;
      }

      // Success — you get token and user info
      localStorage.setItem("token", data.token);
      setToken(data.token);
      setUser(data.user);
      router.push("/");
    } catch (err) {
      console.error("Network error:", err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Log In
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="you@example.com"
                      type="email"
                      {...field}
                      className="rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="••••••••"
                      type="password"
                      {...field}
                      className="rounded-xl"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm">
              <Link
                href="/forgot-password"
                className="text-emerald-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </p>

            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 rounded-xl py-2 text-white font-medium"
            >
              Login
            </Button>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link href="/register" className="text-green-700 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
