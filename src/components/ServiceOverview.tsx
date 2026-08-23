import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wrench, Cpu, PaintBucket, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
  const Icon = iconMap[icon] || Wrench;

  return (
    <Card className="card border border-slate-200/80 bg-white/90 backdrop-blur-sm group hover:border-blue-500/40 relative overflow-hidden flex flex-col justify-between">
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="w-5 h-5 text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
      <div>
        <CardHeader className="pb-3">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300">
            <Icon className="w-7 h-7" />
          </div>
          <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-slate-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </div>
      <div className="px-6 pb-6 pt-2">
        <Link
          href="/services"
          className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center space-x-1"
        >
          <span>Learn details</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </Card>
  );
}
