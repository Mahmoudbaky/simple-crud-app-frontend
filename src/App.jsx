import React from "react";
import { useState } from "react";
import { NavBar, TableList, ModalForm } from "./components";
import axios from "axios";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = () => {
    if (setModalMode === "add") {
      console.log("add mode");
    } else {
      console.log("update mode");
    }
    setIsOpen(false);
  };

  return (
    <div>
      <>
        <NavBar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
        <TableList onOpen={() => handleOpen("edit")} searchTerm={searchTerm} />
        <ModalForm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={handleSubmit}
          mode={modalMode}
        />
      </>
    </div>
  );
};

export default App;
