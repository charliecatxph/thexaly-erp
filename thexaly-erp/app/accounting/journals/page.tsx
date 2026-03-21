"use client"

import { setNaviBreadcrumb } from "@/lib/redux/features/sphereTree";
import TXLYHeader from "@/components/txly-erp-components/Header"
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";

export default function AccountingJournals() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setNaviBreadcrumb(["Accounting / Finance", "Journals"]))
    }, [dispatch])
    return <>
        <TXLYHeader />
    </>
}