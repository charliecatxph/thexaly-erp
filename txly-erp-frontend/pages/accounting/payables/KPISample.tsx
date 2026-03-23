import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const description = "A bar chart";

export function KPISample() {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle>Total Payables</CardTitle>
        <CardDescription>KPI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">₱ 1,234,567.89</div>
      </CardContent>
    </Card>
  );
}
