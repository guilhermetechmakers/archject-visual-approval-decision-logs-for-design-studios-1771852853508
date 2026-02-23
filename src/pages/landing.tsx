import { Link } from 'react-router-dom'
import { FileCheck, Zap, Shield, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 h-full w-full bg-gradient-to-br from-accent/5 via-transparent to-accent/10 animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 h-full w-full bg-gradient-to-tl from-accent/5 via-transparent to-accent/10 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <FileCheck className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold text-foreground">Archject</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button asChild>
              <Link to="/signup">Get started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative px-4 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <div className="animate-in-up">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Visual approval & decision logs
                <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  for design studios
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Replace scattered emails, PDFs, and calls with a single structured approval layer. Every client decision is presented visually, chosen, time-stamped, and stored as an auditable Decision Log.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild className="min-w-[180px]">
                  <Link to="/signup">Start free trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="min-w-[180px]">
                  <Link to="/login">Book a demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 3-step flow */}
        <section className="border-t border-border bg-card/50 px-4 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-foreground">
              How it works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Three simple steps to faster approvals and fewer disputes
            </p>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '1',
                  title: 'Create decisions',
                  description: 'Add options, attach drawings, set reminders. Use templates for common approval types.',
                  icon: FileCheck,
                },
                {
                  step: '2',
                  title: 'Share with clients',
                  description: 'Send tokenized no-login links. Clients approve on any device—zero friction.',
                  icon: Zap,
                },
                {
                  step: '3',
                  title: 'Export & archive',
                  description: 'Generate branded Decision Logs (PDF/CSV) with timestamps and signed options.',
                  icon: Download,
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className="animate-in-up rounded-xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-card-hover"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-sm font-medium text-accent">Step {item.step}</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature highlights - Bento grid */}
        <section className="px-4 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-3xl font-bold text-foreground">
              Built for design studios
            </h2>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover lg:col-span-2">
                <Shield className="h-10 w-10 text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">Audit-ready records</h3>
                <p className="mt-2 text-muted-foreground">
                  Every approval is time-stamped and stored. Export legal-grade Decision Logs with firm branding.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover">
                <Zap className="h-10 w-10 text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">Zero client friction</h3>
                <p className="mt-2 text-muted-foreground">
                  No logins. Mobile-first. Clients approve in seconds.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover">
                <FileCheck className="h-10 w-10 text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">Visual comparisons</h3>
                <p className="mt-2 text-muted-foreground">
                  Side-by-side option views. Templates for materials, layouts, change requests.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover sm:col-span-2">
                <Download className="h-10 w-10 text-accent" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">Export & integrate</h3>
                <p className="mt-2 text-muted-foreground">
                  PDF and CSV exports. Lightweight task automation. Future CAD/BIM integrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-accent/5 px-4 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Ready to accelerate approvals?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join design studios who have replaced scattered approvals with Archject.
            </p>
            <Button size="lg" asChild className="mt-8 min-w-[200px]">
              <Link to="/signup">Get started free</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Archject. Visual approval for design studios.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
