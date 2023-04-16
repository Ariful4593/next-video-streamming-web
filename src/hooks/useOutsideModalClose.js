import { useState, useEffect } from 'react';

export const useOutsideModalClose = (className) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        function handleOutsideClick(e) {
            if (isOpen && !e.target.closest(className)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [isOpen, className]);

    return [isOpen, setIsOpen];
}
