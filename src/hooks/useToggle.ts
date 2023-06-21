import { useCallback, useState } from "react"

const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [])

    return {
        isOpen,
        toggle,
    }
}

export default useToggle