import * as React from 'react';
import Dialog from '@mui/material/Dialog';

const Modal = ({handleClose, open, children}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        {children}
      </Dialog>
    </div>
  );
}

export default Modal;