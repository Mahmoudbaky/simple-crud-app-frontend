import { useEffect, useState } from "react";
import axios from "axios";

const TableList = ({ onOpen, searchTerm }) => {
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        setUsers(response.data);
      } catch (error) {
        setErr(error.message);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.job.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const users = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     job: "IT",
  //     age: 28,
  //     rate: 101,
  //     country: "United States",
  //     status: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     job: "IT",
  //     age: 34,
  //     rate: 102,
  //     country: "United Kingdom",
  //     status: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Ali Al-Salem",
  //     email: "ali.alsalem@example.com",
  //     job: "IT",
  //     age: 30,
  //     rate: 103,
  //     country: "Saudi Arabia",
  //     status: true,
  //   },
  // ];

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
