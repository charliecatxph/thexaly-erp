import { SidebarInset } from "@/components/ui/sidebar";
import TXLYHeader from "@/components/txly-erp-components/Header";
import { useBreadcrumbs } from "@/contexts/BreadcrumbsContext";
import { useEffect } from "react";

export const getServerSideProps = async () => {
    return {
        props: {
            naviShow: true,
            initialBreadcrumbs: [
                "Accounting / Finance"
            ]
        }
    }
}

export default function Accounting() {
    const { setBreadcrumbs } = useBreadcrumbs();

    useEffect(() => {
        setBreadcrumbs(["Accounting / Finance"]);
    }, []);

    return <SidebarInset className="bg-txly-bg">
        <TXLYHeader />
        <p>Accounting Main</p>
    </SidebarInset>
}