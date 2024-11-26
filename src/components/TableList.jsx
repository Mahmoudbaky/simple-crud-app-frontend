import { useEffect, useState } from "react";
import axios from "axios";

const TableList = ({ onOpen, searchTerm, usersTable, setUsersTable }) => {
  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const filteredUsers = usersTable.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this user?`
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/api/users/${id}`);
        setUsersTable((prevUsers) =>
          prevUsers.filter((user) => user.id !== id)
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="overflow-x-auto mt-5">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Country</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover">
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.job}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      user.isactive ? "btn-primary" : "btn-outline btn-primary"
                    }`}
                  >
                    {user.isactive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button
                    className={`btn rounded-full w-20 
                       btn-primary
                    }`}
                    onClick={() => onOpen("edit", user)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className={`btn rounded-full w-20 
                       btn-error
                    }`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableList;
