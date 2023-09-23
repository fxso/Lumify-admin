"use client";

import { StoreModal } from "@/components/interface/modals/storeModal";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Removes hydration error
    // if in SSR returns null in case of modal rendering
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    )
}
