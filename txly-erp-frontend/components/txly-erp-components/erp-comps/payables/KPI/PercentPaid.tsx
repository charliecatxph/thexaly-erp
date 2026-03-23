import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const description = "A bar chart";

export function PercentPaidPayables() {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle>Percent Paid Payables</CardTitle>
        <CardDescription>KPI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">75%</div>
      </CardContent>
    </Card>
  );
}
