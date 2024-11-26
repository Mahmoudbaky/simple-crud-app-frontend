import { useState, useEffect } from "react";
import axios from "axios";

const ModalForm = ({ isOpen, onClose, OnSubmit, mode, userData }) => {
  const [name, setName] = useState(""); // State for Name
  const [email, setEmail] = useState(""); // State for Email
  const [job, setJob] = useState(""); // State for Job
  const [rate, setRate] = useState("");
  const [status, setStatus] = useState(true); // State for Status

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name,
        email,
        job,
        rate: Number(rate),
        isactive: status,
      };
      OnSubmit(userData);
      setName("");
      setEmail("");
      setJob("");
      setRate("");
      setStatus(false);
    } catch (error) {
      console.error(error);
    }

    onClose();
  };

  useEffect(() => {
    if (mode === "edit" && userData) {
      setName(userData.name);
      setEmail(userData.email);
      setJob(userData.job);
      setRate(userData.rate);
      setStatus(userData.status);
    } else {
      setName("");
      setEmail("");
      setJob("");
      setRate("");
      setStatus(false);
    }
  }, [mode, userData]);

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn hidden"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>
          {/* ************ the form ************ */}
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center my-4 gap-2">
              Name
              <input
                type="text"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center my-4 gap-2">
              Email
              <input
                type="text"
                className="grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center my-4 gap-2">
              Job
              <input
                type="text"
                className="grow"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>

            {/* ++ made this anumber */}
            <div className="flex mb-4 justify-between">
              <label className="input input-bordered flex mr-4 items-center gap-2">
                Rate
                <input
                  type="number"
                  className="grow"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>

              {/* need to undersatnd this */}
              <select
                className="select select-bordered w-full max-w-xs"
                value={status ? "Active" : "Inactive"}
                onChange={handleStatusChange}
              >
                <option>Inactive</option>
                <option>Active</option>
              </select>
            </div>

            <button type="submit" className=" btn btn-success">
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;

// (e) => {
//   e.preventDefault();
//   handleSubmit();
// }

// const handleUpdate = async (e, userID) => {
//   e.preventDefault();
//   try {
//     const response = await axios.get(
//       `http://localhost:3000/api/users/${userID}`
//     );
//     const userInfo = response.data;
//     setName(userInfo.name);
//     setEmail(userInfo.email);
//     setJob(userInfo.job);
//     setRate(userInfo.rate);
//     setStatus(userInfo.status);
//     setUserId(userInfo.id)
//   } catch (error) {
//     console.error(error);
//   }
//   onClose();
// };
