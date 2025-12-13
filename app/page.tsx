import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedAlbums } from "@/components/featured-albums"
import { TrendingPlaylists } from "@/components/trending-playlists"
import { MusicPlayer } from "@/components/music-player"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-32">
      <Header />
      <Hero />
      <FeaturedAlbums />
      <TrendingPlaylists />
      <MusicPlayer />
    </main>
  )
}
