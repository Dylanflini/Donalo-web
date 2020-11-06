import { useEffect, useState } from 'react'

export default function useModal(initialState = false) {

  const [isOpen, setIsOpen] = useState(initialState)

  function openModal() { setIsOpen(true) }

  function closeModal() { setIsOpen(false) }

  useEffect(() => {
    if (isOpen) { document.addEventListener('keyup', handleKey) }

    return () => { document.removeEventListener('keyup', handleKey) }

  }, [isOpen])

  function handleKey({ key }) {
    if (key === 'Escape') { setIsOpen(false) }
  }

  return [isOpen, openModal, closeModal] as const
}
