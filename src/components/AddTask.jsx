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

export default function AddProject({
  handleTaskFormSubmit,
  taskTitle,
  setTaskTitle,
  dueDate,
  setDueDate,
  priority,
  setPriority,
  item,
}) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <button onClick={handleOpen}>add task</button>
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
              handleTaskFormSubmit(item.id), handleClose()
            }}
          >
            <p className="title">Add New Task</p>
            <label>
              <input
                className="input"
                type="text"
                id="taskTitle"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                required
              />
              <span>Task Title</span>
            </label>
            <label>
              <input
                className="input"
                type="date"
                id="description"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
              <span>Due Date</span>
            </label>
            <label>
              <span>Urgency:</span>{' '}
              <select
                name="priority"
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value={'High Priority'}>High</option>
                <option value={'Medium Priority'}>Medium</option>
                <option value={'Low Priority'}>Low</option>
              </select>
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
