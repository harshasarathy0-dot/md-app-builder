import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "exam" | "assignment" | "class" | "meeting" | "deadline";
}

interface UpcomingEventsProps {
  events: Event[];
  className?: string;
}

const typeStyles = {
  exam: "bg-destructive/10 text-destructive border-destructive/20",
  assignment: "bg-warning/10 text-warning border-warning/20",
  class: "bg-primary/10 text-primary border-primary/20",
  meeting: "bg-secondary/10 text-secondary border-secondary/20",
  deadline: "bg-destructive/10 text-destructive border-destructive/20",
};

export function UpcomingEvents({ events, className }: UpcomingEventsProps) {
  return (
    <div className={cn("bg-card rounded-xl border border-border p-5", className)}>
      <h3 className="font-semibold text-lg mb-4">Upcoming Events</h3>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
          >
            <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
              <span className="text-xs font-medium text-primary">
                {new Date(event.date).toLocaleDateString("en", { month: "short" })}
              </span>
              <span className="text-lg font-bold text-primary">
                {new Date(event.date).getDate()}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">{event.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{event.time}</span>
              </div>
            </div>
            <Badge variant="outline" className={cn("text-xs", typeStyles[event.type])}>
              {event.type}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
}
