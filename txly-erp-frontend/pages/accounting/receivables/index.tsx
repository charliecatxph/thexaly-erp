import { SidebarInset } from "@/components/ui/sidebar";
import TXLYHeader from "@/components/txly-erp-components/Header";
import { useEffect } from "react";
import { useBreadcrumbs } from "@/contexts/BreadcrumbsContext";

export const getServerSideProps = async () => {
  return {
    props: {
      naviShow: true,
      initialBreadcrumbs: ["Accounting / Finance", "Payables"],
    },
  };
};

export default function ACTPayables() {
  const { setBreadcrumbs } = useBreadcrumbs();

  useEffect(() => {
    setBreadcrumbs(["Accounting / Finance", "Receivables"]);
  }, []);
  return (
    <>
      <SidebarInset>
        <TXLYHeader />
        <p>ACTReceivables</p>
      </SidebarInset>
    </>
  );
}
