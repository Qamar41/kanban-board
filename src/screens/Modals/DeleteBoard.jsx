import React, { useEffect, useState } from "react";
import axios from "axios";

const DeleteBoard = ({ selectedBoard, setNewBoard , setSelectedBoard}) => {
  const handleCancel = () => {
    let deleteContainer = document.getElementById("delete-board");
    deleteContainer.style.display = "none";
  };
  console.log(selectedBoard);

  const handleDeleteBoard = () => {
    axios
      .get("http://localhost:3030/boards")
      .then((response) => {
        const boards = response.data;
        const boardToDelete = boards.find(
          (board) => board.name === selectedBoard
        );
        console.log("boardToDelete", boardToDelete);
        if (!boardToDelete) {
          console.error("Board not found:", selectedBoard);
          return;
        }

        axios
          .delete(`http://localhost:3030/boards/${boardToDelete.id}`)
          .then((response) => {
            console.log("Board deleted successfully:", response.data);
            handleCancel(); //this will close the Modal
            setSelectedBoard("")
          })
          .catch((error) => {
            console.error("Error deleting board:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching boards:", error);
      });
  };

  return (
    <div>
      <div id="delete-board" className="delete-container">
        <h4 className="delete">Delete this board</h4>
        <p className="delete-para">
          Are you sure you want to delete the '<b>{selectedBoard}</b>' board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>
        <button className="del-btn" onClick={handleDeleteBoard}>
          Delete
        </button>
        <button className="can-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteBoard;
