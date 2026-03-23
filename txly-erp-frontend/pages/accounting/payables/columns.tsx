import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowDownUp, ChevronDown } from "lucide-react";

export type Payable = {
  id: string;
  invoiceNumber: string;
  supplier: string;
  source: "procurement" | "manual";
  invoiceDate: string;
  dueDate: string;
  totalAmount: number;
  amountPaid: number;
  status: "DRAFT" | "POSTED" | "PARTIAL" | "PAID" | "CANCELLED";
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(value);

export const columns: ColumnDef<Payable>[] = [
  {
    accessorKey: "invoiceNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Invoice #
          {column.getIsSorted() ? (
            column.getIsSorted() === "asc" ? (
              <ChevronDown className="text-neutral-500 h-4 w-4" />
            ) : (
              <ChevronDown className="text-neutral-500 h-4 w-4 rotate-180" />
            )
          ) : (
            <ChevronDown className="text-neutral-500 h-4 w-4" />
          )}
        </Button>
      );
    },
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
  },
  {
    accessorKey: "source",
    header: "Source",
    cell: ({ row }) => {
      const value = row.getValue("source") as string;
      return <span className="capitalize">{value}</span>;
    },
  },
  {
    accessorKey: "invoiceDate",
    header: "Invoice Date",
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
  },
  {
    accessorKey: "totalAmount",
    header: "Total",
    cell: ({ row }) => {
      const amount = row.getValue("totalAmount") as number;
      return formatCurrency(amount);
    },
  },
  {
    id: "balance",
    header: "Balance",
    cell: ({ row }) => {
      const total = row.original.totalAmount;
      const paid = row.original.amountPaid;
      const balance = total - paid;
      return formatCurrency(balance);
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const colorMap: Record<string, string> = {
        DRAFT: "text-gray-100 bg-gray-600",
        POSTED: "text-blue-100 bg-blue-600",
        PARTIAL: "text-yellow-100 bg-yellow-600",
        PAID: "text-green-100 bg-green-600",
        CANCELLED: "text-red-100 bg-red-600",
      };

      return (
        <span
          className={`${colorMap[status] ?? ""} px-3 py-0.5 text-xs font-[600] rounded-full`}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-2 w-2 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="!w-[200px]">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
