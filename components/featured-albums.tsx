import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const albums = [
  {
    id: 1,
    title: "Neon Dreams",
    artist: "Synthwave Collective",
    image: "/neon-synthwave-album-cover.jpg",
  },
  {
    id: 2,
    title: "Urban Jungle",
    artist: "The Metro Beats",
    image: "/urban-hip-hop-album-cover.png",
  },
  {
    id: 3,
    title: "Acoustic Sessions",
    artist: "Emma Stone",
    image: "/acoustic-folk-album.png",
  },
  {
    id: 4,
    title: "Electric Pulse",
    artist: "DJ Nova",
    image: "/electronic-dance-music-album-cover.jpg",
  },
]

export function FeaturedAlbums() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Albums</h2>
          <p className="text-muted-foreground">Handpicked selections for you</p>
        </div>
        <Button variant="ghost">View All</Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {albums.map((album) => (
          <Card
            key={album.id}
            className="group relative overflow-hidden border-0 bg-card transition-all hover:bg-accent/50"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={album.image || "/placeholder.svg"}
                alt={album.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-pretty">{album.title}</h3>
              <p className="text-sm text-muted-foreground">{album.artist}</p>
            </div>
            <Button
              size="icon"
              className="absolute right-4 top-4 opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
            >
              <Play className="h-4 w-4" />
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
