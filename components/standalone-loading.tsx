"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import LoadingAnimation from "./loading-animation"

export default function StandaloneLoading() {
  const router = useRouter()
  const [redirectPath, setRedirectPath] = useState("/")

  useEffect(() => {
    // Get the redirect path from URL if available
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const path = urlParams.get("redirect") || "/"
      setRedirectPath(path)

      // Redirect after the loading animation completes
      const timer = setTimeout(() => {
        router.push(path)
      }, 5500)

      return () => clearTimeout(timer)
    }
  }, [router])

  return <LoadingAnimation />
}
