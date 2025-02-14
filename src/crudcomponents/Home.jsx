import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      Home
      <section id="homeBlock">
        <article>
          <h1>List of Users</h1>
          <div className="createBtn">
            <Link to="/create">Add User</Link>
          </div>
          {users && users.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {users.map((users, i) => {
                  return (
                    <tr key={i}>
                      <td>{users.id}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.phone}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h1>No data available</h1>
          )}
        </article>
      </section>
    </div>
  );
};

export default Home;
