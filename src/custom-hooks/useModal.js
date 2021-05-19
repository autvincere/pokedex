import { useState } from 'react'

const useModal = () => {
     const [open, setOpen] = useState(false);

     const handleCloseModal = () => {
          setOpen(false);
     }
     const handleOpenModal = () => {
          setOpen(true);
     }

     return {
          open,
          handleCloseModal,
          handleOpenModal   
     }
}

export default useModal
