import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import icon from '../assets/add_white_24dp.svg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: 'rgba(255, 255, 255, 0.87)',
  bgcolor: '#242424',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function AddProject() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <div className="add-project" onClick={handleOpen}>
        <img src={icon} alt="add a project" />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="form">
            <p className="title">Book a Reservation</p>
            <p className="message">
              Please fill out the form below to book your reservation.
            </p>
            <div className="flex">
              <label>
                <input className="input" type="text" placeholder="" required />
                <span>Firstname</span>
              </label>
              <label>
                <input className="input" type="text" placeholder="" required />
                <span>Lastname</span>
              </label>
            </div>
            <label>
              <input className="input" type="email" placeholder="" required />
              <span>Email</span>
            </label>
            <label>
              <input className="input" type="text" placeholder="" required />
              <span>Date and Time</span>
            </label>
            <label>
              <input className="input" type="text" placeholder="" required />
              <span>Confirm your reservation time and date</span>
            </label>
            <button className="submit">Submit</button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
