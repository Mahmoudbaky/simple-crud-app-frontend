import React from "react";
import { useState, useEffect } from "react";
import { NavBar, TableList, ModalForm } from "./components";
import axios from "axios";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [usersTable, setUsersTable] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      setUsersTable(response.data);
    } catch (error) {
      setErr(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOpen = (mode, user) => {
    setUserData(user);
    console.log(user);
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = async (newUserData) => {
    if (modalMode === "add") {
      try {
        console.log(newUserData);
        const response = await axios.post(
          "http://localhost:3000/api/users",
          newUserData
        );
        console.log("Client added: ", response.data);
        setUsersTable((prevData) => [...prevData, response.data]);
      } catch (error) {
        console.error(error);
      }
      // console.log("add mode");
    } else {
      console.log("update mode");
      try {
        const response = await axios.put(
          `http://localhost:3000/api/users/${userData.id}`,
          newUserData
        );
        console.log("Client updated: ", response.data);
        setUsersTable((prevData) =>
          prevData.map((user) =>
            user.id === userData.id ? response.data : user
          )
        ); // need to understand this
      } catch (error) {
        console.error(error);
      }
    }
    setIsOpen(false);
  };

  return (
    <div>
      <>
        <NavBar onOpen={() => handleOpen("add")} onSearch={setSearchTerm} />
        <TableList
          onOpen={handleOpen}
          searchTerm={searchTerm}
          usersTable={usersTable}
          setUsersTable={setUsersTable}
          fetchUsers={fetchUsers}
        />
        <ModalForm
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          OnSubmit={handleSubmit}
          mode={modalMode}
          userData={userData}
        />
      </>
    </div>
  );
};

export default App;
