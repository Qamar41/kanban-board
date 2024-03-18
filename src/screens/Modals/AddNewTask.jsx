import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddNewTask = ({ selectedBoard, selectedStatus, setSelectedStatus }) => {
  const [statusOptions, setStatusOptions] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState([""]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3030/boards")
      .then((response) => {
        const selectedBoardData = response?.data?.find(
          (board) => board.name === selectedBoard
        );
        if (selectedBoardData) {
          setStatusOptions(
            selectedBoardData.columns?.map((column) => column.name)
          );
        }
        const titleOftask = response?.data?.find(
          (board) => board.name === selectedBoard
        );
      })
      .catch((error) => {
        console.error("Error fetching boards:", error);
      });
  }, [selectedBoard]);

  const handleRemoveSubtask = (index) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks.splice(index, 1);
    setSubtasks(updatedSubtasks);
  };

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, ""]);
  };

  const handleSubtaskChange = (index, value) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = value;
    setSubtasks(updatedSubtasks);
  };

  const handleCreateTask = () => {
    if (!title || !selectedStatus) {
      setError("Please fill in all fields.");
      return;
    }
    const newTask = {
      title: title,
      description: description,
      status: selectedStatus,
      subtasks: subtasks.filter((subtask) => subtask.trim() !== ""),
    };
    axios
      .get("http://localhost:3030/boards")
      .then((response) => {
        const platformLaunchBoard = response.data.find(
          (board) => board.name === `${selectedBoard}`
        );
        const doingColumn = platformLaunchBoard.columns.find(
          (column) => column.name === `${selectedStatus}`
        );
        doingColumn.tasks.push(newTask);

        axios
          .put(
            `http://localhost:3030/boards/${platformLaunchBoard.id}`,
            platformLaunchBoard
          )
          .then((response) => {
            setTitle("");
            setDescription("");
            setSelectedStatus("");
            setError("");
            setSubtasks([""]);

            let newTaskContainer = document.getElementById("addNewTask");
            newTaskContainer.style.display = "none";
          })
          .catch((error) => {
            console.error("Error adding task to column:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching boards:", error);
      });
  };
  const onClose = () => {
    let newTaskContainer = document.getElementById("addNewTask");
    newTaskContainer.style.display = "none";
  };

  return (
    <div>
      <div className="task-container">
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginRight: "20px",
          }}
        >
          <span className="close-icon" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>

        <h4 className="heading">Add New Task</h4>
        <p className="error" style={{ marginLeft: "20px", color: "red" }}>
          {error}
        </p>
        <p className="title">Title</p>
        <input
          type="text"
          className="input"
          placeholder="e.g. TakeCoffeeBreak"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="description">Description</p>
        <textarea
          type="text"
          className="description-input"
          value={description}
          placeholder="Optional"
          onChange={(e) => setDescription(e.target.value)}
        />

        <p className="subtask">Subtasks</p>
        {subtasks?.map((subtask, index) => (
          <div key={index}>
            <input
              className="subtask-input"
              type="text"
              value={subtask}
              onChange={(e) => handleSubtaskChange(index, e.target.value)}
            />
            <span
              className="close-icon"
              onClick={() => handleRemoveSubtask(index)}
            >
              <FontAwesomeIcon icon={faTimes} className="cross-icon" />
            </span>
          </div>
        ))}
        <button className="sub-button" onClick={handleAddSubtask}>
          + Add New Subtask
        </button>

        {/* status */}
        <p className="status">Status</p>
        <select
          className="status-input"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Select Status</option>
          {statusOptions?.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
        <button className="task-button" onClick={handleCreateTask}>
          Create Task
        </button>
      </div>
    </div>
  );
};

export default AddNewTask;
