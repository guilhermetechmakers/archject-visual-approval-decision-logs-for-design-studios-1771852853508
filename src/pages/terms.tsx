import { Link } from 'react-router-dom'
import { FileCheck } from 'lucide-react'

export function TermsPage() {
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
        <h1 className="text-3xl font-bold text-foreground">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <div className="prose prose-sm mt-8 max-w-none text-foreground">
          <p>
            By using Archject, you agree to these terms. Please read them carefully.
          </p>
          <h2 className="mt-8 text-xl font-semibold">Acceptable use</h2>
          <p>
            You agree to use Archject only for lawful purposes and in accordance
            with these terms. You are responsible for the content you create.
          </p>
        </div>
      </main>
    </div>
  )
}
