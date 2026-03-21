import TXLYHeader from "@/components/txly-erp-components/Header"
import { setNaviBreadcrumb } from "@/lib/redux/features/sphereTree";

export default async function AccountingDashboard({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    console.log(params)
    return (
        <>
            <TXLYHeader />
        </>
    )
}