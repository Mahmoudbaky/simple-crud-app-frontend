import React from "react";

const NavBar = ({ onOpen, onSearch }) => {
  const searchHandler = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <div className="navbar bg-base-100 p-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Users</a>
        </div>
        <div className="navbar-center lg:flex">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search for user"
              className="input input-bordered w-44 md:w-auto text-center"
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={onOpen}>
            Add User
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
