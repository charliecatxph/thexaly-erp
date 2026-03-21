import { SidebarInset } from "@/components/ui/sidebar";
import TXLYHeader from "@/components/txly-erp-components/Header";
import { useEffect } from "react";
import { useBreadcrumbs } from "@/contexts/BreadcrumbsContext";

export const getServerSideProps = async () => {
    return {
        props: {
            naviShow: true,
            initialBreadcrumbs: [
                "Accounting / Finance",
                "Payables"
            ]
        }
    }
}

export default function ACTPayables() {
    const { setBreadcrumbs } = useBreadcrumbs();

    useEffect(() => {
        setBreadcrumbs(["Accounting / Finance", "Payables"]);
    }, []);
    return <>
        <SidebarInset>
            <TXLYHeader />
            <p>ACTPayables</p>
        </SidebarInset>
    </>
}