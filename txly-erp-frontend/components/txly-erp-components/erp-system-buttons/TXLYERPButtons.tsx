import { SidebarGroup, SidebarGroupLabel, SidebarMenuButton } from "@/components/ui/sidebar"
import { LayoutDashboardIcon, CircleQuestionMark } from "lucide-react"
import TXLYERPFinance from "./modularized-btns/TXLYERP-Finance"
import TXLYERPSales from "./modularized-btns/TXLYERP-Sales"
import TXLYERPCRM from "./modularized-btns/TXLYERP-CRM"
import TXLYERPLogistics from "./modularized-btns/TXLYERP-Logistics"
import TXLYERPManufacturing from "./modularized-btns/TXLYERP-Manufacturing"
import TXLYERPECOM from "./modularized-btns/TXLYERP-ECOM"
import TXLYERPPM from "./modularized-btns/TXLYERP-PM"
import TXLYERPProcurement from "./modularized-btns/TXLYERP-Procurement"
import TXLYERPHR from "./modularized-btns/TXLYERP-HR"
import TXLYERPQA from "./modularized-btns/TXLYERP-QA"
import TXLYERPAdminSet from "./modularized-btns/TXLYERP-AdminSet"
import TXLYERPDevTools from "./modularized-btns/TXLYERP-DevTools"
import TXLYERPInventory from "./modularized-btns/TXLYERP-Inventory"
import { useRouter } from "next/navigation"

export default function TXLYERPButtons() {
    const router = useRouter()
    return <SidebarGroup>
        <SidebarGroupLabel>Thexaly® ERP Enterprise</SidebarGroupLabel>
        <SidebarMenuButton onClick={() => router.push("/dashboard")}>
            <LayoutDashboardIcon />
            <span>Dashboard</span>
        </SidebarMenuButton>
        <TXLYERPFinance />
        <TXLYERPSales />
        <TXLYERPInventory />
        <TXLYERPCRM />
        <TXLYERPLogistics />
        <TXLYERPManufacturing />
        <TXLYERPECOM />
        <TXLYERPPM />
        <TXLYERPProcurement />
        <TXLYERPHR />
        <TXLYERPQA />
        <TXLYERPAdminSet />
        <TXLYERPDevTools />
        <SidebarMenuButton>
            <CircleQuestionMark />
            <span>Thexaly Helpdesk</span>
        </SidebarMenuButton>
    </SidebarGroup>
}