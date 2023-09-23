"use client";

import { Modal } from '@/components/interface/modal';

export default function Home() {
  return (
    <div>
      <Modal title='Test' description='test' isOpen onClose={() => {}}>
        Children
      </Modal>
    </div>
  )
}
