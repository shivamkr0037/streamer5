import { Card } from "@/components/ui/card"
import { Music } from "lucide-react"

const playlists = [
  {
    id: 1,
    title: "Chill Vibes",
    description: "Relaxing beats for focused work",
    tracks: 42,
  },
  {
    id: 2,
    title: "Workout Mix",
    description: "High energy tracks to keep you moving",
    tracks: 38,
  },
  {
    id: 3,
    title: "Late Night Jazz",
    description: "Smooth jazz for evening relaxation",
    tracks: 27,
  },
  {
    id: 4,
    title: "Indie Favorites",
    description: "Best indie tracks of the month",
    tracks: 51,
  },
  {
    id: 5,
    title: "Classical Focus",
    description: "Classical music for deep concentration",
    tracks: 33,
  },
  {
    id: 6,
    title: "Rock Classics",
    description: "Timeless rock anthems",
    tracks: 45,
  },
]

export function TrendingPlaylists() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Trending Playlists</h2>
        <p className="text-muted-foreground">Popular collections this week</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {playlists.map((playlist) => (
          <Card
            key={playlist.id}
            className="group cursor-pointer border-0 bg-card p-4 transition-all hover:bg-accent/50"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-md bg-primary/10">
                <Music className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold leading-tight text-pretty">{playlist.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{playlist.description}</p>
                <p className="text-xs text-muted-foreground">{playlist.tracks} tracks</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
