import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  action: string;
  target: string;
  time: string;
  type: "assignment" | "attendance" | "grade" | "announcement" | "payment";
}

interface RecentActivityProps {
  activities: Activity[];
  className?: string;
}

const typeColors = {
  assignment: "bg-primary/10 text-primary",
  attendance: "bg-success/10 text-success",
  grade: "bg-warning/10 text-warning",
  announcement: "bg-secondary/10 text-secondary",
  payment: "bg-success/10 text-success",
};

export function RecentActivity({ activities, className }: RecentActivityProps) {
  return (
    <div className={cn("bg-card rounded-xl border border-border p-5", className)}>
      <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
              <AvatarFallback className={typeColors[activity.type]}>
                {activity.user.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">{activity.user.name}</span>{" "}
                <span className="text-muted-foreground">{activity.action}</span>{" "}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
