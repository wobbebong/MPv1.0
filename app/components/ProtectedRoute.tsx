"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: "user" | "admin" | "vip"
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { user, loading, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login")
    }

    if (!loading && isAuthenticated && requiredRole && user?.role !== requiredRole) {
      router.push("/unauthorized")
    }
  }, [loading, isAuthenticated, router, requiredRole, user?.role])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-black">
        <div className="text-cyber-blue text-xl animate-pulse">Initializing Neural Connection...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  if (requiredRole && user?.role !== requiredRole) {
    return null
  }

  return <>{children}</>
}

