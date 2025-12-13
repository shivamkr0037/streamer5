import { Music2, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Music2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">SoundWave</span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Discover
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Browse
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Radio
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden w-64 lg:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search for music..." className="pl-9 bg-muted/50" />
          </div>

          <Button size="icon" variant="ghost" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
