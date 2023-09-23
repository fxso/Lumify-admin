"use client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { Modal } from "@/components/interface/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();
    return (
        <Modal
            title="Create a store"
            description="Add a new store to manage products"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Create
    </Modal>
    )
}