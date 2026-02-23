import { BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const mockData = [
  { name: 'Jan', approvals: 45, avgDays: 3.2 },
  { name: 'Feb', approvals: 52, avgDays: 2.8 },
  { name: 'Mar', approvals: 48, avgDays: 2.4 },
]

export function AnalyticsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics & Reports</h1>
        <p className="text-muted-foreground">
          Insights into approvals and bottlenecks
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Approval trends
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Monthly approvals and average response time
          </p>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="approvals" fill="rgb(0, 82, 204)" name="Approvals" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
