import { Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockExports = [
  { id: '1', name: 'Riverside Residence - Decision Log', date: '2025-02-20', status: 'ready' },
  { id: '2', name: 'Downtown Office - Q1 Approvals', date: '2025-02-18', status: 'ready' },
]

export function ExportsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Exports & Decision Logs</h1>
        <p className="text-muted-foreground">
          Generate and download approval packs with firm branding
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create new export</CardTitle>
          <p className="text-sm text-muted-foreground">
            Select project and decisions. Choose PDF or CSV. Add branding.
          </p>
        </CardHeader>
        <CardContent>
          <Button>
            <Download className="h-4 w-4" />
            Generate export
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Export history</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockExports.map((export_) => (
              <div
                key={export_.id}
                className="flex items-center justify-between rounded-lg border border-border p-4"
              >
                <div className="flex items-center gap-4">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">{export_.name}</p>
                    <p className="text-sm text-muted-foreground">{export_.date}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
