import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProjekter } from "@/app/services/projectService"

export default async function Home() {
  const projekter = await getProjekter();

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-white selection:text-black">
      
      {/* GLOW-EFFEKT I BAGGRUNDEN */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_50%)] pointer-events-none" />

      {/* ─── NAVIGATION BAR ─── */}
      <header className="border-b border-neutral-800/60 backdrop-blur sticky top-0 z-50 bg-neutral-950/80">
        <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono font-bold tracking-tight text-lg">abdiassis.omer_</span>
          </div>
          <Badge variant="outline" className="text-xs border-neutral-700 bg-neutral-900 text-neutral-300 font-mono">
            GET /status: 200 OK
          </Badge>
        </div>
      </header>

      {/* ─── HERO SEKTION ─── */}
      <section className="max-w-4xl mx-auto py-24 px-6 text-center md:py-36 flex flex-col items-center relative">
        <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-mono border-neutral-700 bg-neutral-900 text-neutral-400">
          ~/datatekniker/programmering
        </Badge>
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          Hej, jeg hedder Abdiassis Omer
        </h1>
        
        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          Jeg er en 33-årig <span className="text-white font-medium">datateknikerstuderende</span> bosat i Vejle med speciale i programmering (forventet færdig 3. kvt. 2028). Jeg brænder for at binde stærk backend-arkitektur sammen med intuitive frontend-løsninger.
        </p>
        
        <div className="flex sm:flex-row flex-col gap-4 w-full sm:w-auto justify-center">
          <a href="mailto:abdiassis@gmail.com" className="w-full sm:w-auto">
            <Button size="lg" className="w-full bg-white text-black hover:bg-neutral-200 font-semibold shadow-xl shadow-white/5 transition-all">
              Kontakt mig
            </Button>
          </a>
          <a href="https://github.com/Assisdk" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full border-neutral-700 hover:bg-neutral-900 text-white transition-all">
              Se GitHub
            </Button>
          </a>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <hr className="border-neutral-800" />
      </div>

      {/* ─── PROJEKTER SEKTION ─── */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-4xl text-white mb-2 font-mono">
              ls -la ./projekter
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base">
              Et indblik i de arkitekturer, sprog og teknologier jeg mestrer og eksperimenterer med.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-500">
            Viser: {projekter.length} objekter
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projekter.map((projekt) => (
            <Card 
              key={projekt.id} 
              className="flex flex-col justify-between border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm hover:bg-neutral-900/80 hover:border-neutral-700 hover:shadow-2xl hover:shadow-white/[0.02] hover:-translate-y-1 transition-all duration-300"
            >
              <CardHeader className="space-y-3 pb-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-[10px] font-mono border-neutral-800 bg-neutral-950 text-neutral-400">
                    {projekt.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold tracking-tight text-white">
                  {projekt.titel}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-neutral-400">
                  {projekt.beskrivelse}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex flex-wrap gap-1.5 pt-2 pb-6">
                {projekt.tags.split(',').map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="text-[10px] font-mono px-2 py-0.5 rounded border border-neutral-800 bg-neutral-950 text-neutral-300"
                  >
                    {tag.trim()}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ─── KONTAKT INFORMATION ─── */}
      <section className="max-w-5xl mx-auto py-6 px-6">
        <div className="border border-neutral-800 bg-neutral-900/20 backdrop-blur-sm rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">cat ./kontakt_info.md</h3>
            <p className="text-neutral-400 text-sm max-w-xl">
              Du er altid velkommen til at række ud, hvis du vil høre mere om mine projekter, eller hvis du mangler en engageret datateknikerelev til dit team.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 text-sm font-mono w-full md:w-auto border-t border-neutral-800/60 md:border-t-0 pt-4 md:pt-0">
            <div className="flex items-center gap-3">
              <span className="text-neutral-500">Mail:</span>
              <a href="mailto:abdiassis@gmail.com" className="text-white hover:text-emerald-400 underline decoration-neutral-700 hover:decoration-emerald-400 transition-colors">
                abdiassis@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-neutral-500">Mobil:</span>
              <a href="tel:+4561545472" className="text-white hover:text-emerald-400 transition-colors">
                +45 61 54 54 72
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-neutral-500">By:</span>
              <span className="text-neutral-300">7100 Vejle</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-neutral-900 py-12 mt-24 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500 font-mono">
          <p>© {new Date().getFullYear()} Abdiassis Omer</p>
          <div className="flex gap-2 items-center text-xs">
            <span className="text-neutral-400">Built with Next.js & Tailwind v4</span>
            <span>•</span>
            <span className="text-neutral-400">Vejle</span>
          </div>
        </div>
      </footer>
    </div>
  )
}