import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./index.css";

const AddNewBoard = ({ newBoard, setNewBoard }) => {
  const [boardName, setBoardName] = useState("");
  const [columns, setColumns] = useState(["Now", "Next", "Later"]);
  const [error, setError] = useState("");
  const addColumn = () => {
    setColumns([...columns, ""]);
  };

  const onClose = () => {
    let newTaskContainer = document.getElementById("new-task");
    newTaskContainer.style.display = "none";
    setError("");
    setBoardName("");
    setColumns(["Now", "Next", "Later"])
  };

  const removeColumn = (index) => {
    const updatedColumns = [...columns];
    updatedColumns.splice(index, 1);
    setColumns(updatedColumns);
  };

  const validateInputs = () => {
    if (boardName.trim() === "") {
      alert("Please enter a board name.");
      return false;
    }
    if (columns.every((column) => column.trim() === "")) {
      alert("Please add at least one column.");
      return false;
    }
    return true;
  };

  const generateTasksArray = () => {
    const tasksArray = columns.map((column) => ({ name: column, tasks: [] }));
    return tasksArray;
  };

  const handleCreateBoard = () => {
  
    if (boardName.trim() === "") {
      setError("Please enter board name");
      return;
    }
    if (columns.every((column) => column.trim() === "")) {
      setError("Please add at least one column.");
      return;
    }
    const board = {
      name: boardName,
      columns: generateTasksArray(),
    };
    setNewBoard(board);
    axios
      .post("http://localhost:3030/boards", board)
      .then((response) => {
        console.log("New board created successfully:", response.data);
        onClose();
      })
      .catch((error) => {
        console.error("Error creating board:", error);
      });
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "999",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      id="new-task"
    >
      <div className="task-container">
        <div>
          <span
            style={{
              display: "flex",
              justifyContent: "end",
              marginRight: "20px",
            }}
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <h4 className="heading">Add New Board</h4>
        <p className="error" style={{ marginLeft: "20px", color: "red" }}>
          {error}
        </p>
        <p className="title">Name</p>
        <input
          type="text"
          className="input"
          placeholder="e.g. Web Design"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />

        {/* Add new column inputs */}
        <p className="column">Columns</p>
        {columns.map((column, index) => (
          <div key={index} className="column-input-container">
            <input
              className="column-input"
              type="text"
              placeholder={``}
              value={column}
              onChange={(e) => {
                const updatedColumns = [...columns];
                updatedColumns[index] = e.target.value;
                setColumns(updatedColumns);
              }}
            />
            <span className="close-icon" onClick={() => removeColumn(index)}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
        ))}
        <button className="sub-button" onClick={addColumn}>
          + Add New Column
        </button>
        <button className="task-button" onClick={handleCreateBoard}>
          Create New Board
        </button>
      </div>
    </div>
  );
};

export default AddNewBoard;
