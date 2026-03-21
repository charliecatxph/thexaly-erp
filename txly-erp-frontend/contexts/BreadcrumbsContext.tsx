import { createContext, useContext, useState } from "react";

export type NaviKVBaseband = "Dashboard" | "Accounting / Finance" | "Sales" | "Inventory" | "CRM" | "Logistics" | "Manufacturing" | "E-Commerce" | "Project Management" | "Procurement" | "Human Resources" | "Quality Management" | "Admin Settings" | "Developer Tools" | "Thexaly Helpdesk"
export type NaviKVAccounting = "Payables" | "Receivables" | "Journals" | "Bank Statements" | "Financial Reports" | "Expenses" | "Budgeting";
export type NaviKVSales = "Quotations" | "Orders" | "Invoices" | "Point-of-Sale (POS)";
export type NaviKVInventory = "Products" | "Warehouse Management" | "Analytics & Forecasts" | "Replenishment Rules";
export type NaviKVCRM = "Leads" | "Opportunities" | "Customers" | "Messages" | "Appointments / Scheduling";
export type NaviKVLogistics = "Dispatch / Deliveries" | "Warehouse Transfers" | "Delivery Scheduling" | "Fleet" | "Returns";
export type NaviKVManufacturing = "Work Orders" | "Bill of Materials" | "Maintenance";
export type NaviKVEcom = "Products" | "Coupons & Promotions" | "Payment Channels";
export type NaviKVPM = "Projects" | "Tasks" | "Timesheets";
export type NaviKVPC = "Vendors" | "Orders";
export type NaviKVHR = "Employee Directory" | "Leaves & Attendance" | "Payroll" | "Recruitment";
export type NaviKVQM = "Production Quality Check";
export type NaviKVAdminSettings = "Users & Roles";
export type NaviKVDevtools = "API Access (E-COM)" | "API Documentation" | "API Configuration";

export type NaviTree = NaviKVBaseband | NaviKVAccounting | NaviKVSales | NaviKVInventory | NaviKVCRM | NaviKVLogistics | NaviKVAdminSettings | NaviKVDevtools | NaviKVManufacturing | NaviKVEcom | NaviKVPM | NaviKVPC | NaviKVHR | NaviKVQM;

interface BreadcrumbsContextType {
    breadcrumbs: NaviTree[];
    setBreadcrumbs: (breadcrumbs: NaviTree[]) => void;
}

const BreadcrumbsContext = createContext<BreadcrumbsContextType | undefined>(undefined);

export const BreadcrumbsProvider = ({ children, initialBreadcrumbs }: { children: React.ReactNode; initialBreadcrumbs?: NaviTree[] }) => {
    const [breadcrumbs, setBreadcrumbs] = useState<NaviTree[]>(initialBreadcrumbs || []);

    return (
        <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
            {children}
        </BreadcrumbsContext.Provider>
    );
}

export const useBreadcrumbs = () => {
    const context = useContext(BreadcrumbsContext);
    if (context === undefined) {
        throw new Error('useBreadcrumbs must be used within a BreadcrumbsProvider');
    }
    return context;
}
