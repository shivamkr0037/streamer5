"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/router"
import Head from "@/components/Head"
import Layout from "@/components/Layout"

export default function HomePage() {
  const router = useRouter()
  const [roomId, setRoomId] = useState("")
  const [error, setError] = useState("")
  const [creating, setCreating] = useState(false)

  const handleCreateRoom = async () => {
    setCreating(true)
    setError("")

    try {
      const response = await fetch("/api/generate")
      const data = await response.json()

      if (data.roomId) {
        router.push(`/room/${data.roomId}`)
      } else {
        setError("Failed to create room. Please try again.")
      }
    } catch (err) {
      setError("Failed to create room. Please try again.")
    } finally {
      setCreating(false)
    }
  }

  const handleJoinRoom = () => {
    if (roomId.trim().length < 4) {
      setError("Room ID must be at least 4 characters")
      return
    }
    router.push(`/room/${roomId.trim()}`)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && roomId.trim().length >= 4) {
      handleJoinRoom()
    }
  }

  return (
    <Layout>
      <Head title="StreamSync - Watch Together" />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              StreamSync
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              Watch videos together in perfect sync with friends, anywhere in the world
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Create Room Card */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Create Room</h2>
                <p className="text-slate-400 mb-6">Start a new watch party and invite your friends</p>
                <button
                  onClick={handleCreateRoom}
                  disabled={creating}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {creating ? "Creating..." : "Create New Room"}
                </button>
              </div>
            </div>

            {/* Join Room Card */}
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-pink-500/50 transition-all shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Join Room</h2>
                <p className="text-slate-400 mb-6">Enter a room ID to join an existing party</p>
                <input
                  type="text"
                  value={roomId}
                  onChange={(e) => {
                    setRoomId(e.target.value)
                    setError("")
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter room ID"
                  className="w-full bg-slate-700/50 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-pink-500 transition-colors"
                />
                <button
                  onClick={handleJoinRoom}
                  disabled={roomId.trim().length < 4}
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Join Room
                </button>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="max-w-md mx-auto mb-8 bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-center">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          {/* Features Section */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Perfect Sync</h3>
                <p className="text-slate-400 text-sm">
                  Real-time synchronization keeps everyone watching at the exact same moment
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Watch Together</h3>
                <p className="text-slate-400 text-sm">
                  Create shared viewing experiences with friends and family remotely
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-slate-400 text-sm">
                  Chat with your friends while watching for the ultimate social experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
