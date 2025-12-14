"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Page() {
  const router = useRouter()
  const [roomId, setRoomId] = useState("")
  const [isCreating, setIsCreating] = useState(false)
  const [error, setError] = useState("")

  const createRoom = async () => {
    setIsCreating(true)
    setError("")
    try {
      const response = await fetch("/api/generate")
      if (!response.ok) throw new Error("Failed to create room")
      const data = await response.json()
      router.push(`/room/${data.roomId}`)
    } catch (err) {
      setError("Failed to create room. Please try again.")
      setIsCreating(false)
    }
  }

  const joinRoom = () => {
    if (roomId.trim().length >= 4) {
      router.push(`/room/${roomId.trim()}`)
    } else {
      setError("Room ID must be at least 4 characters")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      joinRoom()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              StreamSync
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-md mx-auto">
            Watch videos together in perfect sync with friends, anywhere in the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl mb-8">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Create Room</h2>
              <p className="text-slate-400 text-sm mb-4">Start a new watch party and invite friends</p>
              <button
                onClick={createRoom}
                disabled={isCreating}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreating ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Creating...
                  </span>
                ) : (
                  "Create New Room"
                )}
              </button>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">Join Room</h2>
              <p className="text-slate-400 text-sm mb-4">Enter a room code to join an existing party</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => {
                    setRoomId(e.target.value)
                    setError("")
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter room code"
                  className="flex-1 py-3 px-4 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button
                  onClick={joinRoom}
                  className="py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-300"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="text-red-400 text-sm mb-4 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
            {error}
          </div>
        )}

        <div className="grid grid-cols-3 gap-8 mt-12 text-center max-w-2xl">
          <div>
            <div className="text-3xl mb-2">🎬</div>
            <h3 className="text-white font-medium mb-1">Perfect Sync</h3>
            <p className="text-slate-400 text-sm">Real-time video synchronization</p>
          </div>
          <div>
            <div className="text-3xl mb-2">👥</div>
            <h3 className="text-white font-medium mb-1">Watch Together</h3>
            <p className="text-slate-400 text-sm">Invite unlimited friends</p>
          </div>
          <div>
            <div className="text-3xl mb-2">💬</div>
            <h3 className="text-white font-medium mb-1">Live Chat</h3>
            <p className="text-slate-400 text-sm">Chat while you watch</p>
          </div>
        </div>
      </main>
    </div>
  )
}
