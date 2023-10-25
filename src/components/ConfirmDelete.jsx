import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

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

export default function ConfirmDelete({ handleProjectDelete, item }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button onClick={handleOpen}>Delete Project</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Are you sure you want to delete? </h1>
          <span>
            <h1>{item.title}</h1>
          </span>
          <button
            className="submit"
            onClick={() => handleProjectDelete(item.id)}
          >
            ConfirmDelete
          </button>
          <button className="submit" onClick={handleClose}>
            Cancel
          </button>
        </Box>
      </Modal>
    </div>
  )
}
