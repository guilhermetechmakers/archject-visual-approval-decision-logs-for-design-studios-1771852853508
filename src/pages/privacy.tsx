import { Link } from 'react-router-dom'
import { FileCheck } from 'lucide-react'

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <FileCheck className="h-6 w-6 text-accent" />
            <span className="font-semibold">Archject</span>
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <div className="prose prose-sm mt-8 max-w-none text-foreground">
          <p>
            Your privacy is important to us. This policy describes how we collect,
            use, and protect your information when you use Archject.
          </p>
          <h2 className="mt-8 text-xl font-semibold">Data we collect</h2>
          <p>
            We collect information you provide when signing up, creating projects,
            and making decisions. We also collect usage data to improve our service.
          </p>
          <h2 className="mt-8 text-xl font-semibold">How we use your data</h2>
          <p>
            We use your data to provide the Archject service, send notifications,
            and improve our product. We do not sell your data to third parties.
          </p>
        </div>
      </main>
    </div>
  )
}
