import { Link } from 'react-router-dom'
import { FileCheck, Plus, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const mockDecisions = [
  { id: '1', title: 'Flooring material - Riverside', project: 'Riverside Residence', status: 'pending' },
  { id: '2', title: 'Kitchen layout - Downtown', project: 'Downtown Office', status: 'approved' },
  { id: '3', title: 'Bathroom fixtures - Heritage', project: 'Heritage Hotel', status: 'draft' },
]

export function DecisionsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Decisions</h1>
          <p className="text-muted-foreground">
            All decision cards across projects
          </p>
        </div>
        <Button asChild>
          <Link to="/dashboard/decisions/new">
            <Plus className="h-4 w-4" />
            New decision
          </Link>
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Input placeholder="Search decisions..." className="pl-4" />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="space-y-4">
        {mockDecisions.map((decision) => (
          <Card key={decision.id}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <FileCheck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{decision.title}</h3>
                  <p className="text-sm text-muted-foreground">{decision.project}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    decision.status === 'approved'
                      ? 'success'
                      : decision.status === 'pending'
                      ? 'warning'
                      : 'secondary'
                  }
                >
                  {decision.status}
                </Badge>
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/dashboard/decisions/${decision.id}`}>View</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
