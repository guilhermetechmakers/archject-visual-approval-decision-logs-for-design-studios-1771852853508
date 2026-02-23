import { Link } from 'react-router-dom'
import { FolderKanban, Plus, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
const mockProjects = [
  { id: '1', name: 'Riverside Residence', client: 'Smith Family', pending: 3, decisions: 12 },
  { id: '2', name: 'Downtown Office Fit-out', client: 'Acme Corp', pending: 1, decisions: 8 },
  { id: '3', name: 'Heritage Hotel Renovation', client: 'Grand Hotels Ltd', pending: 0, decisions: 15 },
]

export function ProjectsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">
            Manage your project workspaces and decisions
          </p>
        </div>
        <Button asChild>
          <Link to="/dashboard/projects/new">
            <Plus className="h-4 w-4" />
            New project
          </Link>
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-9"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <Link key={project.id} to={`/dashboard/projects/${project.id}`}>
            <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <FolderKanban className="h-6 w-6 text-accent" />
                  </div>
                  {project.pending > 0 && (
                    <Badge variant="warning">{project.pending} pending</Badge>
                  )}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">{project.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {project.decisions} decision{project.decisions !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
