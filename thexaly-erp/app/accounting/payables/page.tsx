"use client"

import { setNaviBreadcrumb } from "@/lib/redux/features/sphereTree";
import TXLYHeader from "@/components/txly-erp-components/Header"
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";

export default function AccountingPayables() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setNaviBreadcrumb(["Accounting / Finance", "Payables"]))
    }, [dispatch])
    return <>
        <TXLYHeader />
    </>
}