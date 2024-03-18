import React from 'react'

const DeleteTask = () => {
  return (
    <div>
      <div className='delete-container-task'>
        <h4 className='delete-task'>Delete this Task</h4>
        <p className='delete-task-para'>Are you sure you want to delete the'Build settings UI' task and its subtasks?<br/>This action cannot reversed</p>
        <button className='del-btn'>Delete</button>
        <button className='can-btn'>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteTask