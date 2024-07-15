import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import '../CSS/CreateCandidate.css'
import CandidateRegister from '../../Sign/CandidateRegister';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'rgb(255, 255, 255)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CreateCandidate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button id="CreateCandidateButton" onClick={handleOpen}>Create New Candidate</Button>
      <Modal
        className='CreateCandidateContent'
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open} className='CreateCandidateBox'>
          <Box sx={style}>
              <CandidateRegister/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}