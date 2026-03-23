import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const description = "A bar chart";

export function PaidPayables() {
  return (
    <Card className="h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p>Paid Payables</p>
          <button className="text-sm text-muted-foreground">View</button>
        </CardTitle>
        <CardDescription>KPI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">₱ 1,234,567.89</div>
      </CardContent>
    </Card>
  );
}
