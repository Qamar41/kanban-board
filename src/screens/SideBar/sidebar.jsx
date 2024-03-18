import React, { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {
  changeBackgroundColor,
} from "../MainPage/NightModeFunction";
import axios from "axios";
import "./sidebar.css";
import AddNewBoard from "../Modals/AddNewBoard";

const Sidebar = ({ setSelectedBoard, newBoard, setNewBoard  , selectedBoard}) => {
  const [names, setNames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/boards")
      .then((response) => {
        const namesArray = response.data?.map((board) => board.name);
        setNames(namesArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [newBoard, selectedBoard]);

  const handleClick = () => {
    changeBackgroundColor("black");
  };

  const handleBoardClick = (boardName) => {
    let newTaskContainer = document.getElementById("new-task");
    newTaskContainer.style.display = "none";

    let newTaskContainer1 = document.getElementById("delete-board");
    newTaskContainer1.style.display = "none";

    let newTaskContainer2 = document.getElementById("addNewTask");
    newTaskContainer2.style.display = "none";

    let newTaskContainer3 = document.getElementById("editTask");
    newTaskContainer3.style.display = "none";

    setSelectedBoard(boardName);
  };

  const handleCreateBoard = () => {
    let newTaskContainer = document.getElementById("new-task");
    newTaskContainer.style.display = "block";

    let newTaskContainer1 = document.getElementById("delete-board");
    newTaskContainer1.style.display = "none";

    let newTaskContainer2 = document.getElementById("addNewTask");
    newTaskContainer2.style.display = "none";

    let newTaskContainer3 = document.getElementById("editTask");
    newTaskContainer3.style.display = "none";
  };

  return (
    <>
      <div>
        <div className="fully-outer-sidebar">
          <div className="main-heading-logo">
            <div className="three-lines">
              <p id="one"></p>
              <p id="two"></p>
              <p id="three"></p>
            </div>
            <div id="main-heading">Kanban</div>
          </div>
          <div className="side-bar-options">
            <p id="all-board">ALL BOARDS ( {names?.length} )</p>
            <div className="main-options">
              {names?.map((name, index) => (
                <p key={index} onClick={() => handleBoardClick(name)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-border-all"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 0h16v16H0zm1 1v6.5h6.5V1zm7.5 0v6.5H15V1zM15 8.5H8.5V15H15zM7.5 15V8.5H1V15z" />
                  </svg>
                  <span>{name}</span>
                </p>
              ))}
              <p id="create-new-side-bar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-border-all"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 0h16v16H0zm1 1v6.5h6.5V1zm7.5 0v6.5H15V1zM15 8.5H8.5V15H15zM7.5 15V8.5H1V15z" />
                </svg>
                <span onClick={handleCreateBoard}>+Create New Board</span>
              </p>
            </div>
          </div>
          <div className="side-bar-bottom">
            <div className="day-night-mode">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.33"
                height="18.33"
                fill="#828FA3"
                className="bi bi-sun-fill"
                viewBox="0 0 16 16"
                id="sun"
              >
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
              <FormControlLabel
                id="slider"
                control={
                  <Switch
                    sx={{
                      "& .MuiSwitch-thumb": { color: "white" },
                      "& .MuiSwitch-track": { backgroundColor: "#635FC7;" },
                    }}
                    onClick={handleClick}
                  />
                }
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.33"
                height="18.33"
                fill="#828FA3"
                className="bi bi-moon-stars-fill"
                viewBox="0 0 16 16"
                id="moon"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
            </div>
            <div className="hide-side-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                fill="currentColor"
                className="bi bi-eye-slash"
                viewBox="0 0 16 16"
                id="eye"
              >
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
              </svg>
              <p>Hide Sidebar</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              fill="currentColor"
              className="bi bi-eye-slash"
              viewBox="0 0 16 16"
              id="eyetwo"
            >
              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
              <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
            </svg>
          </div>
        </div>
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
        id="new-task"
      >
        <AddNewBoard newBoard={newBoard} setNewBoard={setNewBoard} />
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
        id="new-task"
      >
        <AddNewBoard newBoard={newBoard} setNewBoard={setNewBoard} />
      </div>
    </>
  );
};

export default Sidebar;










