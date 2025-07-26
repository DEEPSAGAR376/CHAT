"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Heart, Mail, Lock, User, Eye, EyeOff, Github, Chrome, ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function AuthPage() {
  const searchParams = useSearchParams()
  const [isLogin, setIsLogin] = useState(() => {
    const mode = searchParams.get("mode")
    return mode === "signup" ? false : true
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      {/* Back to Home */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="absolute top-6 left-6">
        <Link href="/">
          <Button variant="ghost" className="text-slate-300 hover:text-slate-100 hover:bg-slate-800/20">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </motion.div>

      {/* Main Auth Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="bg-slate-900/90 backdrop-blur-md border-slate-700/50 shadow-2xl">
          <CardContent className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                className="flex items-center justify-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-semibold bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">
                  SoulTech
                </span>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={isLogin ? "login" : "signup"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h1 className="text-2xl font-bold text-slate-100 mb-2">
                    {isLogin ? "Welcome Back" : "Join Our Universe"}
                  </h1>
                  <p className="text-slate-400">
                    {isLogin
                      ? "Continue your journey with empathetic technology"
                      : "Begin your journey toward meaningful digital experiences"}
                  </p>
                </motion.div>
              </AnimatePresence>

              {!isLogin && searchParams.get("mode") === "signup" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-lg p-3 mb-4 border border-slate-600/50"
                >
                  <p className="text-sm text-slate-300 text-center">
                    🎉 Ready to start your journey with empathetic technology?
                  </p>
                </motion.div>
              )}
            </div>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <Button
                variant="outline"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent group"
              >
                <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Continue with GitHub
              </Button>
              <Button
                variant="outline"
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent group"
              >
                <Chrome className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Continue with Google
              </Button>
            </div>

            <div className="relative mb-6">
              <Separator className="bg-slate-600" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-slate-800 px-3 text-sm text-slate-400">or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="pl-10 bg-slate-800/60 border-slate-600 text-slate-100 placeholder-slate-500 focus:border-slate-400 focus:ring-slate-400/20"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10 bg-slate-800/60 border-slate-600 text-slate-100 placeholder-slate-500 focus:border-slate-400 focus:ring-slate-400/20"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-300">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="pl-10 pr-10 bg-slate-800/60 border-slate-600 text-slate-100 placeholder-slate-500 focus:border-slate-400 focus:ring-slate-400/20"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-slate-500 hover:text-slate-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-slate-300">
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                          className="pl-10 bg-slate-800/60 border-slate-600 text-slate-100 placeholder-slate-500 focus:border-slate-400 focus:ring-slate-400/20"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-slate-400">
                    <input type="checkbox" className="rounded border-slate-600 bg-slate-700" />
                    <span>Remember me</span>
                  </label>
                  <Button type="button" variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto">
                    Forgot password?
                  </Button>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-slate-700 to-black hover:from-slate-600 hover:to-slate-900 text-white border-0 py-3 group"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <span>{isLogin ? "Sign In" : "Create Account"}</span>
                    <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </div>
                )}
              </Button>
            </form>

            {/* Toggle Login/Signup */}
            <div className="mt-6 text-center">
              <p className="text-slate-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <Button
                  type="button"
                  variant="link"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-slate-400 hover:text-slate-200 ml-1 p-0 h-auto font-medium"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </Button>
              </p>
            </div>

            {/* Terms */}
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 text-center"
              >
                <p className="text-xs text-slate-500">
                  By creating an account, you agree to our{" "}
                  <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto text-xs">
                    Terms of Service
                  </Button>{" "}
                  and{" "}
                  <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto text-xs">
                    Privacy Policy
                  </Button>
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-lg p-4 border border-slate-700/30">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Heart className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-slate-300">Join Our Community</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect with thousands of developers and creators building the future with empathy and human-centered
              design.
            </p>
          </div>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <Link href="/auth?mode=signup">
            <Button size="lg" className="bg-slate-800 text-slate-300 hover:bg-slate-700 px-8 py-3 text-lg">
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
