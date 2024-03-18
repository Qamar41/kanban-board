// import React from "react";
// import { changeBackgroundColor } from "../MainPage/NightModeFunction";
// import "./navbar.css";
// import DeleteBoard from "../Modals/DeleteBoard";
// import AddNewTask from "../Modals/AddNewTask";

// const navbar = ({
//   selectedBoard,
//   setNewBoard,
//   setSelectedBoard,
//   selectedStatus,
//   setSelectedStatus,
// }) => {
//   const handleClick = () => {
//     changeBackgroundColor("black");
//   };
//   const handleDeleteBoard = () => {
//     let newTaskContainer = document.getElementById("delete-board");
//     newTaskContainer.style.display = "block";

//     let newTaskContainer1 = document.getElementById("addNewTask");
//     newTaskContainer1.style.display = "none";
//   };

//   const HandleAddNewTask = () => {
//     let newTaskContainer = document.getElementById("addNewTask");
//     newTaskContainer.style.display = "block";

//     let newTaskContainer1 = document.getElementById("delete-board");
//     newTaskContainer1.style.display = "none";
//   };
//   return (
//     <>
//       <div>
//         <div className="nav-bar-fullyouter">
//           <div className="nav-bar-main-heading">
//             <h1 id="nav-bar-top-heading">Platform Launch</h1>
//             {selectedBoard === null ? null : (
//               <div className="nav-bar-options">
//                 <button id="add-new-tast-btn" onClick={HandleAddNewTask}>
//                   + Add new Task
//                 </button>
//                 <svg
//                   onClick={handleDeleteBoard}
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   fill="currentColor"
//                   class="bi bi-three-dots-vertical"
//                   viewBox="0 0 16 16"
//                   id="nav-bar-three-dots"
//                 >
//                   <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
//                 </svg>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           position: "fixed",
//           zIndex: "999",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           display: "none",
//         }}
//         id="delete-board"
//       >
//         <DeleteBoard selectedBoard={selectedBoard} setNewBoard={setNewBoard} setSelectedBoard={setSelectedBoard}/>
//       </div>
//       <div
//         style={{
//           position: "fixed",
//           zIndex: "999",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           display: "none",
//         }}
//         id="addNewTask"
//       >
//         <AddNewTask
//           selectedBoard={selectedBoard}
//           setNewBoard={setNewBoard}
//           setSelectedBoard={setSelectedBoard}
//           selectedStatus={selectedStatus}
//           setSelectedStatus={setSelectedStatus}
//         />
//       </div>
//     </>
//   );
// };

// export default navbar;






import React from "react";
import { changeBackgroundColor } from "../MainPage/NightModeFunction";
import "./navbar.css";
import DeleteBoard from "../Modals/DeleteBoard";
import AddNewTask from "../Modals/AddNewTask";

const Navbar = ({
  selectedBoard,
  setNewBoard,
  setSelectedBoard,
  selectedStatus,
  setSelectedStatus,
}) => {
  const handleClick = () => {
    changeBackgroundColor("black");
  };

  const handleDeleteBoard = () => {
    let newTaskContainer = document.getElementById("delete-board");
    newTaskContainer.style.display = "block";

    let newTaskContainer1 = document.getElementById("addNewTask");
    newTaskContainer1.style.display = "none";

    let newTaskContainer2 = document.getElementById("editTask");
    newTaskContainer2.style.display = "none";
  };

  const handleAddNewTask = () => {
    let newTaskContainer = document.getElementById("addNewTask");
    newTaskContainer.style.display = "block";

    let newTaskContainer1 = document.getElementById("delete-board");
    newTaskContainer1.style.display = "none";

    let newTaskContainer2 = document.getElementById("editTask");
    newTaskContainer2.style.display = "none";
  };

  return (
    <>
      <div>
        <div className="nav-bar-fullyouter">
          <div className="nav-bar-main-heading">
            <h1 id="nav-bar-top-heading">{selectedBoard ? selectedBoard : "Platform Launch"}</h1>
            {selectedBoard === null ? null : (
              <div className="nav-bar-options">
                <button id="add-new-tast-btn" onClick={handleAddNewTask}>
                  + Add new Task
                </button>
                <svg
                  onClick={handleDeleteBoard}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                  id="nav-bar-three-dots"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                </svg>
              </div>
            )}
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
        id="delete-board"
      >
        <DeleteBoard selectedBoard={selectedBoard} setNewBoard={setNewBoard} setSelectedBoard={setSelectedBoard}/>
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
        id="addNewTask"
      >
        <AddNewTask
          selectedBoard={selectedBoard}
          setNewBoard={setNewBoard}
          setSelectedBoard={setSelectedBoard}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      </div>
    </>
  );
};

export default Navbar;
