import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import profile from "./profile.png";
import ChatBox from "./ChatBox";
function Home() {
  const [usersf, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    getUSers();
  }, []);

  // const getUSers = () => {
  //   fetch("https://panorbit.in/api/users.json")
  //     .then((response) => {
  //       return response.json();
  //     })

  //     .then((data) => {
  //       setUsers(data);

  //     });
  // };

  async function getUSers() {
    let response = await fetch("https://panorbit.in/api/users.json");
    var userres = await response.json();
    console.log("usersx", userres);
    const finalData = userres.users;
    setUsers(finalData);
  }

  const handleClick = (e, data) => {
    // access to e.target here
    console.log(data.name);
    setName(data.name);
    setEmail(data.email);
    setUsername(data.username);
    setClicked(true);
  };
  const Logout = () => {
    setClicked(false);
  };
  console.log("users", usersf);

  // console.log(
  //   "nsme",

  // );
  // console.log("userh", users);
  // console.log("userhj", users.map(a => {
  //   return (
  //     a.name
  //   )

  // }));
  // console.log("user-", users.users.map(user => { return user.name}
  // ))
  return (
    <>
      {clicked ? (
        <>
        <div>
          <div className="cardtwo">
            <span className="profilesection">
              <img src={profile} alt="Logo" class="imgthumbnail" />
              <div className="userDetails">
                <h5 className="card-title">{name}</h5>
                <div className="card-text">{username}</div>
                <div className="card-text">{email}</div>
              </div>
              <button
                type="button"
                class="btn btn-secondary btn-lg btn-block"
                onClick={Logout}
              >
                Log out
              </button>
            </span>
            <div className="cardthree">
              <div className="card-body">
                <h5 className="card-title">List of Users</h5>
                <div className="card-text">
                  <ul className="list-group">
                    {usersf &&
                      usersf.map((a) => (
                        <li className="list-group-item">
                          <img src={profile} alt="Logo" class="img-thumbnail" />
                          {a.name}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
            <ChatBox />
        </>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">List of Users</h5>
            <div className="card-text">
              <ul className="list-group">
                {usersf &&
                  usersf.map((a) => (
                    <li
                      className="list-group-item"
                      onClick={(e) => handleClick(e, a)}
                    >
                      <img src={profile} alt="Logo" class="img-thumbnail" />
                      {a.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
