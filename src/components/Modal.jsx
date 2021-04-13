import React from 'react'
import { createPortal } from 'react-dom'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Modal = (props) => (
     props.isOpen ?
          createPortal(
               <div>
                    <div onClick={props.onClose}>
                    <HighlightOffIcon />
               </div>
               <div>{props.children}</div>
               </div>,
               document.getElementById('modal'),
          ) : ''
)


export default Modal
