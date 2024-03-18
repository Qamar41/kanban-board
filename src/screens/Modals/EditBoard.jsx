import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const EditBoard = () => {
  return (
    <div>
      <div className='task-container'>
        <h4 className='heading'>Edit Board</h4>
        <p className='title'>Board Name</p>    
        <input type='text' className='input' placeholder='Platform Launch'></input>
        
        {/* board columns */}
        <p className='board'>Board Columns</p>
        <input className='board-input' type='text' placeholder='Todo'></input>
        <span class="close-icon">
          <FontAwesomeIcon icon={faTimes}/>
        </span>
        <input className='board-input' type='text' placeholder='Doing'></input>
        <span class="close-icon">
          <FontAwesomeIcon icon={faTimes}/>
        </span>
        <input className='board-input' type='text' placeholder='Done'></input>
        <span class="close-icon">
          <FontAwesomeIcon icon={faTimes}/>
        </span>
        <button className='sub-button'>+CreateNewColumn</button>
        
        <button className='task-button'>Save Changes</button>
      </div> 
    </div>
  )
}

export default EditBoard
