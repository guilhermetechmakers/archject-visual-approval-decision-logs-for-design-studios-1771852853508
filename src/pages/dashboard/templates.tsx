import { LayoutTemplate, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const mockTemplates = [
  { id: '1', name: 'Material selection', category: 'Materials', usageCount: 24 },
  { id: '2', name: 'Layout approval', category: 'Layouts', usageCount: 18 },
  { id: '3', name: 'Change request', category: 'Changes', usageCount: 12 },
]

export function TemplatesPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Templates</h1>
          <p className="text-muted-foreground">
            Opinionated decision templates for common approval types
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Create template
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockTemplates.map((template) => (
          <Card key={template.id} className="transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <LayoutTemplate className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{template.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{template.category}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Used {template.usageCount} times
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
