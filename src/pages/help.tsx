import { Link } from 'react-router-dom'
import { HelpCircle, FileText, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4">
          <Link to="/dashboard" className="font-semibold text-foreground">
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16">
        <div className="text-center">
          <HelpCircle className="mx-auto h-16 w-16 text-accent" />
          <h1 className="mt-6 text-3xl font-bold text-foreground">Help & Documentation</h1>
          <p className="mt-2 text-muted-foreground">
            KB, onboarding checklist, and FAQs
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Getting started
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Step-by-step guide to create your first project and decision.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                FAQs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Common questions about client links, exports, and integrations.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
