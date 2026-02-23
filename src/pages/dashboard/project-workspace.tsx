import { useParams, Link } from 'react-router-dom'
import {
  FileCheck,
  Share2,
  Plus,
  LayoutTemplate,
  Image,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const mockDecisions = [
  { id: '1', title: 'Flooring material', status: 'pending', options: 3 },
  { id: '2', title: 'Kitchen layout', status: 'approved', options: 2 },
  { id: '3', title: 'Bathroom fixtures', status: 'draft', options: 4 },
]

export function ProjectWorkspacePage() {
  const { projectId } = useParams<{ projectId: string }>()

  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard/projects"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Projects
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Riverside Residence
            </h1>
            <p className="text-muted-foreground">Client: Smith Family</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button asChild>
            <Link to={`/dashboard/projects/${projectId}/decisions/new`}>
              <Plus className="h-4 w-4" />
              New decision
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="decisions" className="space-y-4">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="decisions">Decisions</TabsTrigger>
          <TabsTrigger value="library">Drawings & Specs</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="decisions" className="space-y-4">
          <div className="grid gap-4">
            {mockDecisions.map((decision) => (
              <Card key={decision.id}>
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <FileCheck className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{decision.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {decision.options} options
                      </p>
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
                      <Link to={`/dashboard/decisions/${decision.id}`}>
                        View
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="library" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                Drawings & Specs Library
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Upload and manage files. Attach to decisions.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border py-16">
                <Image className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-sm font-medium text-foreground">
                  Upload files
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Drag and drop or click to browse
                </p>
                <Button variant="outline" className="mt-4">
                  Select files
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LayoutTemplate className="h-5 w-5" />
                Templates
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Use templates for common decision types
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border py-16">
                <LayoutTemplate className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-sm font-medium text-foreground">
                  No templates in this project
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Create from template library
                </p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link to="/dashboard/templates">Browse templates</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
