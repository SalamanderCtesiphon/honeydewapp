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
  item,
  task,
  editTaskFormSubmit,
  setEditTaskTitle,
  setEditDueDate,
  setEditPriority,
  setEditTaskNotes,
  editTaskTitle,
  editTaskNotes,
  editDueDate,
  editPriority,
}) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  function openEdit() {
    handleOpen()
  }

  return (
    <div>
      <button onClick={() => openEdit()}>Edit Task</button>
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
              editTaskFormSubmit(item.id, task.id), handleClose()
            }}
          >
            <p className="title">Edit Task</p>
            <label>
              <input
                className="input"
                type="text"
                id="editTaskTitle"
                value={editTaskTitle}
                placeholder={task.taskTitle}
                onChange={(e) => setEditTaskTitle(e.target.value)}
                required
              />
              <span>{task.taskTitle}</span>
            </label>
            <label>
              <textarea
                className="input"
                type="text"
                id="editTaskNotes"
                value={editTaskNotes}
                placeholder={task.taskNotes}
                onChange={(e) => setEditTaskNotes(e.target.value)}
                required
              />
              <span>edit notes</span>
            </label>
            <label>
              <input
                className="input"
                type="date"
                id="description"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                required
              />
              <span>Due Date</span>
            </label>
            <label>
              <span>Urgency:</span>{' '}
              <select
                name="editPriority"
                id="editPriority"
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
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
