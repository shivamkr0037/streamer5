"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState([33])
  const [volume, setVolume] = useState([75])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 py-3">
          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-12 text-right">2:15</span>
            <Slider value={progress} onValueChange={setProgress} max={100} step={1} className="flex-1" />
            <span className="text-xs text-muted-foreground w-12">4:32</span>
          </div>

          {/* Player Controls */}
          <div className="flex items-center justify-between gap-4">
            {/* Track Info */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-muted">
                <img src="/album-art-thumbnail.jpg" alt="Now Playing" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-sm">Electric Dreams</p>
                <p className="truncate text-xs text-muted-foreground">Luna Rivers</p>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost" className="hidden sm:flex h-8 w-8">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button size="icon" className="h-10 w-10" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8">
                <SkipForward className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hidden sm:flex h-8 w-8">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>

            {/* Volume Control */}
            <div className="hidden lg:flex items-center gap-2 flex-1 justify-end">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider value={volume} onValueChange={setVolume} max={100} step={1} className="w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
