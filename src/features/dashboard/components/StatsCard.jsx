import { Card, CardContent } from "@/shared/components/ui/Card";

export default function StatsCard({ label, value }) {
  return (
    <Card>
      <CardContent className="p-5">
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="mt-2 text-2xl font-bold">
          {value}
        </p>
      </CardContent>
    </Card>
  );
}