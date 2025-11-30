import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Building2, Users, Briefcase, TrendingUp } from "lucide-react";

const mockDrives = [
  { id: 1, company: "Google", logo: "G", role: "Software Engineer", package: "₹25 LPA", applications: 45, shortlisted: 12, status: "active" },
  { id: 2, company: "Microsoft", logo: "M", role: "Product Manager", package: "₹22 LPA", applications: 38, shortlisted: 8, status: "active" },
  { id: 3, company: "Amazon", logo: "A", role: "SDE-1", package: "₹28 LPA", applications: 52, shortlisted: 15, status: "interviews" },
  { id: 4, company: "Meta", logo: "M", role: "ML Engineer", package: "₹30 LPA", applications: 30, shortlisted: 6, status: "completed" },
  { id: 5, company: "Apple", logo: "A", role: "iOS Developer", package: "₹26 LPA", applications: 25, shortlisted: 5, status: "upcoming" },
];

const statusColors: Record<string, string> = {
  active: "bg-success/10 text-success",
  interviews: "bg-warning/10 text-warning",
  completed: "bg-muted text-muted-foreground",
  upcoming: "bg-primary/10 text-primary",
};

export default function PlacementsPage() {
  return (
    <DashboardLayout userRole="admin" userName="Admin User">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Placement Drives</h1>
            <p className="text-muted-foreground">Manage campus recruitment and placements</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Drive
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-sm text-muted-foreground">Companies</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">342</div>
                  <p className="text-sm text-muted-foreground">Students Placed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm text-muted-foreground">Total Offers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold">₹18L</div>
                  <p className="text-sm text-muted-foreground">Avg Package</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active & Upcoming Drives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDrives.map((drive) => (
                <div key={drive.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {drive.logo}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{drive.company}</h3>
                      <p className="text-sm text-muted-foreground">{drive.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-semibold text-success">{drive.package}</p>
                      <p className="text-xs text-muted-foreground">{drive.applications} applications</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{drive.shortlisted}</p>
                      <p className="text-xs text-muted-foreground">shortlisted</p>
                    </div>
                    <Badge className={statusColors[drive.status]} variant="secondary">
                      {drive.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
