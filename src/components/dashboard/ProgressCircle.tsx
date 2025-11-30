import { cn } from "@/lib/utils";

interface ProgressCircleProps {
  value: number;
  size?: "sm" | "md" | "lg";
  label?: string;
  sublabel?: string;
  className?: string;
}

const sizeMap = {
  sm: { size: 80, stroke: 6, text: "text-lg" },
  md: { size: 120, stroke: 8, text: "text-2xl" },
  lg: { size: 160, stroke: 10, text: "text-3xl" },
};

export function ProgressCircle({
  value,
  size = "md",
  label,
  sublabel,
  className,
}: ProgressCircleProps) {
  const { size: svgSize, stroke, text } = sizeMap[size];
  const radius = (svgSize - stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  const getColor = () => {
    if (value >= 75) return "stroke-success";
    if (value >= 50) return "stroke-warning";
    return "stroke-destructive";
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        <svg
          className="transform -rotate-90"
          width={svgSize}
          height={svgSize}
        >
          <circle
            className="stroke-muted"
            strokeWidth={stroke}
            fill="none"
            r={radius}
            cx={svgSize / 2}
            cy={svgSize / 2}
          />
          <circle
            className={cn("transition-all duration-700 ease-out", getColor())}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="none"
            r={radius}
            cx={svgSize / 2}
            cy={svgSize / 2}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-bold", text)}>{value}%</span>
          {sublabel && (
            <span className="text-xs text-muted-foreground">{sublabel}</span>
          )}
        </div>
      </div>
      {label && (
        <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
      )}
    </div>
  );
}
