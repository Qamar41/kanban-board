import React, { useState, useEffect } from "react";
import axios from "axios";
import { changeBackgroundColor } from "../MainPage/NightModeFunction";
import "./cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import EditTask from "../Modals/EditTask";

const Cards = ({
  newBoard,
  selectedBoard,
  selectedStatus,
  setSelectedStatus,
  setNewBoard,
  setSelectedBoard,
}) => {
  const [columns, setColumns] = useState([]);
  const [titleName , setTitleName] = useState("");
  const [columnName , setColumnName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3030/boards`)
      .then((response) => {
        const boardsData = response.data;
        if (selectedBoard) {
          const selectedColumns =
            boardsData.find((board) => board.name === selectedBoard)?.columns ||
            [];
          setColumns(selectedColumns);
        } else {
          setColumns([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedBoard, selectedStatus]);

  const change = () => {
    changeBackgroundColor();
  };

  const showEditModal = (task , column) => {

    setTitleName(task?.title);
    setColumnName(column.name);

    let newTaskContainer = document.getElementById("editTask");
    newTaskContainer.style.display = "block";

    let newTaskContainer1 = document.getElementById("new-task");
    newTaskContainer1.style.display = "none";

    let newTaskContainer2 = document.getElementById("delete-board");
    newTaskContainer2.style.display = "none";

    let newTaskContainer3 = document.getElementById("addNewTask");
    newTaskContainer3.style.display = "none";
  };

  return (
    <>
      <div className="cards-outer">
        {columns?.map((column, index) => (
          <div key={index} className="cards-section">
            <p id="main-heading-for-todo">
              {column.name} ({column.tasks?.length})
            </p>
            <div className="cards-outer-main-body">
              {column.tasks?.map((task, taskIndex) => (
                <div key={taskIndex} className="cards-inner">
                  <div>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        marginRight: "5px",
                        marginTop: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => showEditModal(task , column)} // Pass task to showEditModal
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                  </div>
                  <p id="cards-first-heading">{task.title}</p>
                  <p id="cards-second-heading">
                    {
                      task.subtasks?.filter((subtask) => subtask.isCompleted)
                        ?.length
                    }{" "}
                    of {task.subtasks?.length} subtasks
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          zIndex: "999",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "none",
        }}
        id="editTask"
      >
        <EditTask
          newBoard={newBoard}
          selectedBoard={selectedBoard}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          setNewBoard={setNewBoard}
          setSelectedBoard={setSelectedBoard}
          titleName={titleName}
          columnName={columnName}
        />
      </div>
    </>
  );
};

export default Cards;
