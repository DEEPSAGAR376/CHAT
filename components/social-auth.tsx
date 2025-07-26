"use client"

import { Button } from "@/components/ui/button"
import { Github, Chrome } from "lucide-react"

interface SocialAuthProps {
  onGithubAuth: () => void
  onGoogleAuth: () => void
  isLoading?: boolean
}

export function SocialAuth({ onGithubAuth, onGoogleAuth, isLoading = false }: SocialAuthProps) {
  return (
    <div className="space-y-3">
      <Button
        onClick={onGithubAuth}
        disabled={isLoading}
        variant="outline"
        className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 bg-transparent group"
      >
        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
        Continue with GitHub
      </Button>

      <Button
        onClick={onGoogleAuth}
        disabled={isLoading}
        variant="outline"
        className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 bg-transparent group"
      >
        <Chrome className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
        Continue with Google
      </Button>
    </div>
  )
}
