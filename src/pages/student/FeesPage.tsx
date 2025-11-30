import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, CreditCard, Download, CheckCircle, Clock, AlertCircle } from "lucide-react";

const mockFees = [
  { id: "FEE-001", description: "Semester 4 Tuition Fee", amount: 45000, dueDate: "2024-12-15", status: "pending" },
  { id: "FEE-002", description: "Lab Fee", amount: 5000, dueDate: "2024-12-15", status: "pending" },
  { id: "FEE-003", description: "Semester 3 Tuition Fee", amount: 45000, dueDate: "2024-06-15", status: "paid", paidOn: "2024-06-10" },
  { id: "FEE-004", description: "Hostel Fee (Annual)", amount: 60000, dueDate: "2024-07-01", status: "paid", paidOn: "2024-06-28" },
  { id: "FEE-005", description: "Library Fine", amount: 200, dueDate: "2024-11-30", status: "overdue" },
];

const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
  paid: { color: "bg-success/10 text-success", icon: <CheckCircle className="h-4 w-4" /> },
  pending: { color: "bg-warning/10 text-warning", icon: <Clock className="h-4 w-4" /> },
  overdue: { color: "bg-destructive/10 text-destructive", icon: <AlertCircle className="h-4 w-4" /> },
};

export default function StudentFeesPage() {
  const totalPending = mockFees.filter(f => f.status !== "paid").reduce((sum, f) => sum + f.amount, 0);
  const totalPaid = mockFees.filter(f => f.status === "paid").reduce((sum, f) => sum + f.amount, 0);

  return (
    <DashboardLayout userRole="student" userName="Alex Thompson">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Fees & Payments</h1>
          <p className="text-muted-foreground">View and pay your fees</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-bold">₹{totalPending.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">Total Due</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold">₹{totalPaid.toLocaleString()}</div>
                  <p className="text-sm text-muted-foreground">Total Paid</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Quick Payment</p>
                  <p className="text-lg font-semibold">Pay all pending fees</p>
                </div>
                <Button className="gap-2">
                  <CreditCard className="h-4 w-4" />
                  Pay Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fee Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockFees.map((fee) => (
                  <TableRow key={fee.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{fee.description}</p>
                        <p className="text-xs text-muted-foreground">{fee.id}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold">₹{fee.amount.toLocaleString()}</TableCell>
                    <TableCell>{fee.dueDate}</TableCell>
                    <TableCell>
                      <Badge className={statusConfig[fee.status].color} variant="secondary">
                        {statusConfig[fee.status].icon}
                        <span className="ml-1">{fee.status}</span>
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {fee.status === "paid" ? (
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Download className="h-4 w-4" />
                          Receipt
                        </Button>
                      ) : (
                        <Button size="sm">Pay</Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
