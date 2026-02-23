import { Link } from 'react-router-dom'
import {
  FolderKanban,
  FileCheck,
  Clock,
  TrendingUp,
  Plus,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const mockProjects = [
  { id: '1', name: 'Riverside Residence', pendingDecisions: 3, status: 'active' },
  { id: '2', name: 'Downtown Office Fit-out', pendingDecisions: 1, status: 'active' },
  { id: '3', name: 'Heritage Hotel Renovation', pendingDecisions: 0, status: 'active' },
]

const mockActivity = [
  { id: '1', text: 'Client approved Option A for Flooring - Riverside Residence', time: '2h ago' },
  { id: '2', text: 'New decision created: Kitchen Layout - Downtown Office', time: '5h ago' },
  { id: '3', text: 'Reminder sent for Material Selection - Heritage Hotel', time: '1d ago' },
]

const mockChartData = [
  { name: 'Mon', approvals: 4, decisions: 6 },
  { name: 'Tue', approvals: 3, decisions: 5 },
  { name: 'Wed', approvals: 7, decisions: 8 },
  { name: 'Thu', approvals: 5, decisions: 4 },
  { name: 'Fri', approvals: 8, decisions: 7 },
  { name: 'Sat', approvals: 2, decisions: 2 },
  { name: 'Sun', approvals: 1, decisions: 1 },
]

export function DashboardOverview() {
  return (
    <div className="space-y-8 animate-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your projects and pending approvals
          </p>
        </div>
        <Button asChild>
          <Link to="/dashboard/projects/new">
            <Plus className="h-4 w-4" />
            New project
          </Link>
        </Button>
      </div>

      {/* Metric cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active projects
            </CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+2</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending approvals
            </CardTitle>
            <Clock className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">7</p>
            <p className="text-xs text-muted-foreground">
              Awaiting client response
            </p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Decisions this week
            </CardTitle>
            <FileCheck className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">23</p>
            <p className="text-xs text-muted-foreground">
              <span className="text-success">+12%</span> vs last week
            </p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg. approval time
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2.4d</p>
            <p className="text-xs text-muted-foreground">
              Down from 3.1d
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Approvals this week</CardTitle>
            <p className="text-sm text-muted-foreground">
              Decisions created vs approvals received
            </p>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockChartData}>
                  <defs>
                    <linearGradient id="colorApprovals" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="rgb(0, 82, 204)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="rgb(0, 82, 204)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgb(255, 255, 255)',
                      border: '1px solid rgb(229, 231, 235)',
                      borderRadius: '0.5rem',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="approvals"
                    stroke="rgb(0, 82, 204)"
                    fillOpacity={1}
                    fill="url(#colorApprovals)"
                    name="Approvals"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Activity feed */}
        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mockActivity.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-accent mt-1.5" />
                  <div>
                    <p className="text-sm text-foreground">{item.text}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Projects list */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Projects</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/projects">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockProjects.map((project) => (
              <Link
                key={project.id}
                to={`/dashboard/projects/${project.id}`}
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-all duration-200 hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <FolderKanban className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{project.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {project.pendingDecisions} pending decision
                      {project.pendingDecisions !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {project.pendingDecisions > 0 && (
                    <Badge variant="warning">Pending</Badge>
                  )}
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
