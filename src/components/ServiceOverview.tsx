import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench, Cpu, PaintBucket } from "lucide-react";

type ServiceOverviewProps = {
  title: string;
  description: string;
  icon: "wrench" | "cpu" | "paintBucket";
};

const iconMap = {
  wrench: Wrench,
  cpu: Cpu,
  paintBucket: PaintBucket,
};

export function ServiceOverview({
  title,
  description,
  icon,
}: ServiceOverviewProps) {
  const Icon = iconMap[icon];

  return (
    <Card className="card">
      <CardHeader>
        <Icon className="w-10 h-10 mb-2" />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
