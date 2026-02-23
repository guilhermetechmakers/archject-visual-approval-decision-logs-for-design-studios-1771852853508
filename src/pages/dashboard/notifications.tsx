import { Bell, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockNotifications = [
  { id: '1', text: 'Client approved Option A for Flooring - Riverside Residence', time: '2h ago', read: false },
  { id: '2', text: 'Reminder: Material Selection pending for 3 days', time: '5h ago', read: true },
]

export function NotificationsPage() {
  return (
    <div className="space-y-8 animate-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
        <p className="text-muted-foreground">
          Manage notifications and reminder settings
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {mockNotifications.map((n) => (
                <li
                  key={n.id}
                  className={`flex items-start justify-between rounded-lg border p-4 ${
                    n.read ? 'border-border bg-muted/30' : 'border-accent/20 bg-accent/5'
                  }`}
                >
                  <div>
                    <p className="text-sm text-foreground">{n.text}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{n.time}</p>
                  </div>
                  {!n.read && (
                    <Button variant="ghost" size="icon">
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Configure email and in-app notification preferences.
            </p>
            <Button variant="outline" className="w-full">
              Notification settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
