import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const description = "A bar chart";

export function OverduePayables() {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p>Overdue Payables</p>
          <button className="text-sm text-muted-foreground">View</button>
        </CardTitle>
        <CardDescription>KPI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">₱ 1,234,567.00</div>
      </CardContent>
    </Card>
  );
}
