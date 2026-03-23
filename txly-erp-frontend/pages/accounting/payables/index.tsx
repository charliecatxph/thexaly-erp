import { SidebarInset } from "@/components/ui/sidebar";
import TXLYHeader from "@/components/txly-erp-components/Header";
import { useEffect } from "react";
import { useBreadcrumbs } from "@/contexts/BreadcrumbsContext";
import { DataTable } from "./DataTable";
import { columns } from "./columns";
import type { Payable } from "./columns";
import { ChartAreaInteractive } from "./LCT";
import { ChartPieDonutText } from "./PCT";
import { ChartBarDefault } from "./BCT";
import { KPISample } from "./KPISample";
import { Geist } from "next/font/google";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import ControlsPanel from "./SearchBar";
import { TotalPayables } from "@/components/txly-erp-components/erp-comps/payables/KPI/TotalPayables";
import { OutstandingPayables } from "@/components/txly-erp-components/erp-comps/payables/KPI/OutstandingPayables";
import { PercentPaidPayables } from "@/components/txly-erp-components/erp-comps/payables/KPI/PercentPaid";
import { OverduePayables } from "@/components/txly-erp-components/erp-comps/payables/KPI/OverduePayables";
import { DueSoonPayables } from "@/components/txly-erp-components/erp-comps/payables/KPI/DueSoonPayables";
import { UnpaidPayables } from "@/components/txly-erp-components/erp-comps/payables/KPI/UnpaidPayables";
import { PartialPayables } from "@/components/txly-erp-components/erp-comps/payables/KPI/PartialPayables";
import { PaidPayables } from "@/components/txly-erp-components/erp-comps/payables/KPI/PaidPayables";

export const getServerSideProps = async () => {
  return {
    props: {
      naviShow: true,
      initialBreadcrumbs: ["Accounting / Finance", "Payables"],
    },
  };
};

export const data: Payable[] = [
  {
    id: "69c02e15224cf12f9bd430ea",
    invoiceNumber: "INV-7173",
    supplier: "Zilla",
    source: "procurement",
    invoiceDate: "2025-10-16",
    dueDate: "2024-06-23",
    totalAmount: 28276.69,
    amountPaid: 1047.95,
    status: "PARTIAL",
  },
  {
    id: "69c02e15e71ab0088bea5c18",
    invoiceNumber: "INV-5808",
    supplier: "Centice",
    source: "procurement",
    invoiceDate: "2025-12-31",
    dueDate: "2025-09-09",
    totalAmount: 9974.79,
    amountPaid: 3187.13,
    status: "PARTIAL",
  },
  {
    id: "69c02e15733429976e1a66f9",
    invoiceNumber: "INV-1919",
    supplier: "Tersanki",
    source: "manual",
    invoiceDate: "2026-01-04",
    dueDate: "2024-10-12",
    totalAmount: 16989.53,
    amountPaid: 7641.72,
    status: "PARTIAL",
  },
  {
    id: "69c02e15f35810d0aa1757cb",
    invoiceNumber: "INV-8264",
    supplier: "Entroflex",
    source: "procurement",
    invoiceDate: "2025-02-19",
    dueDate: "2025-07-16",
    totalAmount: 35733.46,
    amountPaid: 33971.15,
    status: "PARTIAL",
  },
  {
    id: "69c02e15deb38e001edd6976",
    invoiceNumber: "INV-2558",
    supplier: "Virva",
    source: "procurement",
    invoiceDate: "2025-06-23",
    dueDate: "2025-07-17",
    totalAmount: 24246.67,
    amountPaid: 4249.35,
    status: "PARTIAL",
  },
  {
    id: "69c02e15feb3bbf438686db0",
    invoiceNumber: "INV-2216",
    supplier: "Zomboid",
    source: "procurement",
    invoiceDate: "2024-05-14",
    dueDate: "2026-01-04",
    totalAmount: 20868.71,
    amountPaid: 438.39,
    status: "PARTIAL",
  },
  {
    id: "69c02e155516d7e0f3566e23",
    invoiceNumber: "INV-3898",
    supplier: "Anocha",
    source: "procurement",
    invoiceDate: "2025-11-22",
    dueDate: "2024-01-28",
    totalAmount: 42928.86,
    amountPaid: 18053.06,
    status: "PARTIAL",
  },
  {
    id: "69c02e15435f6b67d1df15f8",
    invoiceNumber: "INV-2363",
    supplier: "Yogasm",
    source: "manual",
    invoiceDate: "2024-06-24",
    dueDate: "2024-11-18",
    totalAmount: 7044.46,
    amountPaid: 2622.15,
    status: "PARTIAL",
  },
  {
    id: "69c02e156f594d630c43e5ea",
    invoiceNumber: "INV-7791",
    supplier: "Futuris",
    source: "manual",
    invoiceDate: "2025-02-15",
    dueDate: "2025-09-23",
    totalAmount: 9348.51,
    amountPaid: 3674.34,
    status: "PARTIAL",
  },
  {
    id: "69c02e157b22b88e7f421ffc",
    invoiceNumber: "INV-6775",
    supplier: "Quarx",
    source: "manual",
    invoiceDate: "2024-05-31",
    dueDate: "2024-07-17",
    totalAmount: 9971.86,
    amountPaid: 967.05,
    status: "PARTIAL",
  },
  {
    id: "69c02e156fb97d8f4dce913c",
    invoiceNumber: "INV-1995",
    supplier: "Comvey",
    source: "manual",
    invoiceDate: "2025-02-18",
    dueDate: "2025-08-23",
    totalAmount: 8371.69,
    amountPaid: 4954.64,
    status: "PARTIAL",
  },
  {
    id: "69c02e15f0894d023137dd58",
    invoiceNumber: "INV-8527",
    supplier: "Prowaste",
    source: "manual",
    invoiceDate: "2024-09-24",
    dueDate: "2026-01-11",
    totalAmount: 36494.57,
    amountPaid: 8938.9,
    status: "PARTIAL",
  },
  {
    id: "69c02e15390f7a656426c897",
    invoiceNumber: "INV-6376",
    supplier: "Bytrex",
    source: "procurement",
    invoiceDate: "2026-01-11",
    dueDate: "2026-03-01",
    totalAmount: 47425.11,
    amountPaid: 19412.25,
    status: "PARTIAL",
  },
  {
    id: "69c02e15f7b25a8d817d587c",
    invoiceNumber: "INV-5457",
    supplier: "Krog",
    source: "manual",
    invoiceDate: "2024-01-21",
    dueDate: "2024-01-10",
    totalAmount: 5623.97,
    amountPaid: 2373.77,
    status: "PARTIAL",
  },
  {
    id: "69c02e15e435154ac69bdbc6",
    invoiceNumber: "INV-5505",
    supplier: "Viocular",
    source: "procurement",
    invoiceDate: "2024-10-11",
    dueDate: "2025-01-05",
    totalAmount: 44675.65,
    amountPaid: 42968.11,
    status: "PARTIAL",
  },
  {
    id: "69c02e1518777a04a75fa12c",
    invoiceNumber: "INV-3323",
    supplier: "Senmao",
    source: "procurement",
    invoiceDate: "2024-12-11",
    dueDate: "2025-02-13",
    totalAmount: 37225.1,
    amountPaid: 15916.81,
    status: "PARTIAL",
  },
  {
    id: "69c02e15a3c938e4dd7eaaf0",
    invoiceNumber: "INV-2067",
    supplier: "Ziore",
    source: "manual",
    invoiceDate: "2025-10-13",
    dueDate: "2024-09-22",
    totalAmount: 1494.35,
    amountPaid: 1192.63,
    status: "PARTIAL",
  },
  {
    id: "69c02e158f7f50b3e278f5f9",
    invoiceNumber: "INV-4972",
    supplier: "Exospace",
    source: "manual",
    invoiceDate: "2025-12-21",
    dueDate: "2024-10-22",
    totalAmount: 48879.29,
    amountPaid: 44017.48,
    status: "PARTIAL",
  },
  {
    id: "69c02e15dd97812717d91b41",
    invoiceNumber: "INV-1929",
    supplier: "Vortexaco",
    source: "manual",
    invoiceDate: "2024-05-30",
    dueDate: "2024-10-28",
    totalAmount: 22335,
    amountPaid: 9853.72,
    status: "PARTIAL",
  },
  {
    id: "69c02e157ab0925180a768ae",
    invoiceNumber: "INV-5678",
    supplier: "Podunk",
    source: "manual",
    invoiceDate: "2025-02-26",
    dueDate: "2024-11-27",
    totalAmount: 42401.04,
    amountPaid: 10940.3,
    status: "PARTIAL",
  },
  {
    id: "69c02e15320ca82fc47dcb9f",
    invoiceNumber: "INV-9024",
    supplier: "Comtour",
    source: "procurement",
    invoiceDate: "2024-12-11",
    dueDate: "2025-09-12",
    totalAmount: 34682.56,
    amountPaid: 31822.94,
    status: "PARTIAL",
  },
  {
    id: "69c02e15c11f55d049739199",
    invoiceNumber: "INV-1223",
    supplier: "Zaj",
    source: "procurement",
    invoiceDate: "2024-01-20",
    dueDate: "2026-03-20",
    totalAmount: 45372.05,
    amountPaid: 3432.37,
    status: "PARTIAL",
  },
  {
    id: "69c02e1511e21887ffb22ca8",
    invoiceNumber: "INV-6406",
    supplier: "Bezal",
    source: "procurement",
    invoiceDate: "2024-07-20",
    dueDate: "2025-06-12",
    totalAmount: 37491.39,
    amountPaid: 21818.79,
    status: "PARTIAL",
  },
  {
    id: "69c02e15dbbcc75991b0a5af",
    invoiceNumber: "INV-4751",
    supplier: "Macronaut",
    source: "procurement",
    invoiceDate: "2025-02-13",
    dueDate: "2024-11-26",
    totalAmount: 21228.96,
    amountPaid: 15000.92,
    status: "PARTIAL",
  },
  {
    id: "69c02e15cdc513464fee1b08",
    invoiceNumber: "INV-8521",
    supplier: "Vinch",
    source: "procurement",
    invoiceDate: "2025-08-27",
    dueDate: "2025-04-20",
    totalAmount: 31790.02,
    amountPaid: 16733.09,
    status: "PARTIAL",
  },
  {
    id: "69c02e1587150e8e82c190e9",
    invoiceNumber: "INV-8798",
    supplier: "Squish",
    source: "procurement",
    invoiceDate: "2026-01-14",
    dueDate: "2026-01-21",
    totalAmount: 5079.83,
    amountPaid: 4371.53,
    status: "PARTIAL",
  },
  {
    id: "69c02e15f2389840fbd87bd5",
    invoiceNumber: "INV-6280",
    supplier: "Incubus",
    source: "procurement",
    invoiceDate: "2024-06-24",
    dueDate: "2025-10-07",
    totalAmount: 39953.9,
    amountPaid: 21424.66,
    status: "PARTIAL",
  },
  {
    id: "69c02e1501784a1f122e2fe8",
    invoiceNumber: "INV-2007",
    supplier: "Zensus",
    source: "manual",
    invoiceDate: "2024-10-18",
    dueDate: "2024-10-26",
    totalAmount: 14468.29,
    amountPaid: 2101.75,
    status: "PARTIAL",
  },
  {
    id: "69c02e15e0b5b431431c3483",
    invoiceNumber: "INV-2939",
    supplier: "Magnina",
    source: "manual",
    invoiceDate: "2024-03-28",
    dueDate: "2024-01-10",
    totalAmount: 27964.2,
    amountPaid: 4555.56,
    status: "PARTIAL",
  },
  {
    id: "69c02e1500c3ba5336e4c89a",
    invoiceNumber: "INV-5237",
    supplier: "Automon",
    source: "manual",
    invoiceDate: "2025-08-08",
    dueDate: "2025-03-07",
    totalAmount: 14039.45,
    amountPaid: 3847.17,
    status: "PARTIAL",
  },
  {
    id: "69c02e155a2f9539c131bd08",
    invoiceNumber: "INV-1205",
    supplier: "Bristo",
    source: "procurement",
    invoiceDate: "2025-03-02",
    dueDate: "2025-12-20",
    totalAmount: 22806.27,
    amountPaid: 16782.9,
    status: "PARTIAL",
  },
  {
    id: "69c02e155f0b08fd30e955d3",
    invoiceNumber: "INV-4391",
    supplier: "Turnling",
    source: "manual",
    invoiceDate: "2024-01-03",
    dueDate: "2024-05-03",
    totalAmount: 24907.95,
    amountPaid: 22998.85,
    status: "PARTIAL",
  },
  {
    id: "69c02e1506b493672ac1587a",
    invoiceNumber: "INV-3687",
    supplier: "Zeam",
    source: "manual",
    invoiceDate: "2025-08-10",
    dueDate: "2024-09-23",
    totalAmount: 4079.01,
    amountPaid: 3268.06,
    status: "PARTIAL",
  },
  {
    id: "69c02e158ea7229663db4cce",
    invoiceNumber: "INV-5748",
    supplier: "Zolar",
    source: "procurement",
    invoiceDate: "2024-11-13",
    dueDate: "2024-01-09",
    totalAmount: 25480.17,
    amountPaid: 5237.74,
    status: "PARTIAL",
  },
  {
    id: "69c02e15a019861da24d7d11",
    invoiceNumber: "INV-1133",
    supplier: "Bleeko",
    source: "procurement",
    invoiceDate: "2024-10-15",
    dueDate: "2025-03-05",
    totalAmount: 3534.52,
    amountPaid: 1711.09,
    status: "PARTIAL",
  },
  {
    id: "69c02e151d0b7a8fdcc128cf",
    invoiceNumber: "INV-6434",
    supplier: "Puria",
    source: "manual",
    invoiceDate: "2025-04-23",
    dueDate: "2024-10-24",
    totalAmount: 6156.1,
    amountPaid: 2309.06,
    status: "PARTIAL",
  },
  {
    id: "69c02e159125163dc6deed44",
    invoiceNumber: "INV-9215",
    supplier: "Gluid",
    source: "procurement",
    invoiceDate: "2025-05-07",
    dueDate: "2024-08-31",
    totalAmount: 7468.92,
    amountPaid: 5554.17,
    status: "PARTIAL",
  },
];

const geist = Geist({ subsets: ["latin"] });

export default function ACTPayables() {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs(["Accounting / Finance", "Payables"]);
  }, []);
  return (
    <>
      <SidebarInset>
        <TXLYHeader />
        <div className={`${geist.className} p-5`}>
          <div className="grid grid-cols-4 gap-2 mb-5">
            <div className="col-span-2 h-full">
              <ChartAreaInteractive />
            </div>
            <div>
              <ChartBarDefault />
            </div>
            <div>
              <ChartPieDonutText />
            </div>
            <div className="kpi1">
              <TotalPayables />
            </div>
            <div className="kpi1">
              <OutstandingPayables />
            </div>
            <div className="kpi1">
              <PercentPaidPayables />
            </div>
            <div className="kpi1">
              <OverduePayables />
            </div>
            <div className="kpi1">
              <DueSoonPayables />
            </div>
            <div className="kpi1">
              <UnpaidPayables />
            </div>
            <div className="kpi1">
              <PartialPayables />
            </div>
            <div className="kpi1">
              <PaidPayables />
            </div>
          </div>
          <div className="search-alg mb-5">
            <ControlsPanel />
          </div>
          <DataTable
            columns={columns}
            data={data}
            // data={[
            //   {
            //     id: "728ed52f",
            //     amount: 100,
            //     status: "pending",
            //     email: "m@example.com",
            //   },
            // ]}
          />
        </div>
      </SidebarInset>
    </>
  );
}
