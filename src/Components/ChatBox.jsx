import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import profile from "./profile.png";
import online from "./online.png";
import "./../App.css";

function ChatBox() {
  const [usersf, setUsers] = useState([]);
  useEffect(() => {
    getUSers();
  }, []);

  async function getUSers() {
    let response = await fetch("https://panorbit.in/api/users.json");
    var userres = await response.json();
    console.log("usersx", userres);
    const finalData = userres.users;
    setUsers(finalData);
  }
  return (
    <div>
      <div className="chatBoxButton">
        <div className="btn-group dropup ">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ChatBox
          </button>
          <div className="dropdown-menu  chatBox">
            <ul className="list-group">
              {usersf &&
                usersf.map((a) => (
                  <li className="list-group-item">
                    <img src={online} alt="online" className="img-thumbnail" />
                    {a.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
