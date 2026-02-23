import { useParams } from 'react-router-dom'
import { FileCheck, Check, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockDecision = {
  title: 'Flooring material selection',
  description: 'Please choose your preferred flooring option for the main living area.',
  options: [
    { id: 'a', label: 'Option A: Oak hardwood', image: null },
    { id: 'b', label: 'Option B: Engineered walnut', image: null },
    { id: 'c', label: 'Option C: Porcelain tile', image: null },
  ],
}

export function ClientPortalPage() {
  const { token } = useParams<{ token: string }>()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <FileCheck className="h-6 w-6 text-accent" />
            <span className="font-semibold text-foreground">Archject</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Secure • No login required
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            {mockDecision.title}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {mockDecision.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockDecision.options.map((option) => (
            <Card
              key={option.id}
              className="cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover hover:border-accent"
            >
              <CardContent className="p-6">
                <div className="flex h-24 items-center justify-center rounded-lg bg-muted mb-4">
                  <span className="text-4xl font-bold text-muted-foreground">
                    {option.id.toUpperCase()}
                  </span>
                </div>
                <p className="font-medium text-foreground text-center">
                  {option.label}
                </p>
                <Button className="mt-4 w-full" size="lg">
                  <Check className="h-4 w-4" />
                  Approve this option
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Questions or comments?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              className="w-full min-h-[100px] rounded-lg border border-input bg-card px-3 py-2 text-sm"
              placeholder="Type your message..."
            />
            <Button className="mt-4">Send</Button>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Your approval will be time-stamped and recorded. Token: {token?.slice(0, 8)}...
        </p>
      </main>
    </div>
  )
}
