import * as React from 'react'
import Box from '@mui/material/Box'
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

export default function AddProject({
  handleFormSubmit,
  title,
  description,
  setTitle,
  setDescription,
}) {
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
          <form
            className="form"
            onSubmit={(e) => {
              handleFormSubmit(e), handleClose()
            }}
          >
            <p className="title">Start a New Project?</p>
            <label>
              <input
                className="input"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <span>Project Title</span>
            </label>
            <label>
              <input
                className="input"
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <span>Brief description</span>
            </label>
            <br />
            <button className="submit">Submit</button>
            <button className="submit" onClick={handleClose}>
              Cancel
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  )
}
