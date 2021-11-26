import React from "react";
import "./style.css";
import logo from "./img.gif";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="App-logo">
      <img src={logo} />
    </div>
  ) : (
    <div className="row">
      {users.map((user) => (
        <div className="column">
          {console.log(user)}
          <div className="card">
            <img src={user.avatar} alt={user.avatar} className="image"></img>
            <p className="id">User ID : {user.id}</p>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;