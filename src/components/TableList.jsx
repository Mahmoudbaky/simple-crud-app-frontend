import React from "react";

const TableList = ({ onOpen }) => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      job: "IT",
      age: 28,
      country: "United States",
      status: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      job: "IT",
      age: 34,
      country: "United Kingdom",
      status: false,
    },
    {
      id: 3,
      name: "Ali Al-Salem",
      email: "ali.alsalem@example.com",
      job: "IT",
      age: 30,
      country: "Saudi Arabia",
      status: true,
    },
  ];

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
              <th>Email</th>
              <th>Age</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {users.map((user) => (
              <tr>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.job}</td>
                <td>{user.country}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      user.status ? "btn-primary" : "btn-outline btn-primary"
                    }`}
                  >
                    {user.status ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button
                    className={`btn rounded-full w-20 
                       btn-primary
                    }`}
                    onClick={onOpen}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
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