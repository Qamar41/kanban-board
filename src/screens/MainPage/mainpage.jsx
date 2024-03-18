import React, { useState } from "react";
import Sidebar from "../SideBar/sidebar";
import Navbar from "../NavBar/navbar";
import Cards from "../cards/cards";
import "./App.css";

const MainPage = () => {
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [newBoard, setNewBoard] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleBoardClick = (boardName) => {
    setSelectedBoard(boardName);
  };

  return (
    <div>
      <div className="fully-outer">
        <Sidebar
          handleBoardClick={handleBoardClick}
          setSelectedBoard={setSelectedBoard}
          newBoard={newBoard}
          setNewBoard={setNewBoard}
          selectedBoard={selectedBoard}
        />
        <Navbar
          selectedBoard={selectedBoard}
          newBoard={newBoard}
          setNewBoard={setNewBoard}
          setSelectedBoard={setSelectedBoard}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <Cards
          newBoard={newBoard}
          selectedBoard={selectedBoard}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          setNewBoard={setNewBoard}
          setSelectedBoard={setSelectedBoard}
        />
      </div>
    </div>
  );
};

export default MainPage;
