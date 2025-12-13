import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Featured Album</div>
            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Midnight Echoes
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground text-pretty">
              Experience the latest album from Luna Rivers. A journey through electronic soundscapes and emotional
              depths.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Play className="h-5 w-5" />
                Play Now
              </Button>
              <Button size="lg" variant="outline">
                Add to Library
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 shadow-2xl">
              <img
                src="/abstract-album-cover-art-with-dark-moody-colors.jpg"
                alt="Midnight Echoes Album Cover"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
