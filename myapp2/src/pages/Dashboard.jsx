import React, { useState } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password, address, country, gender, file });
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Dashboard</h2>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleSubmit}
      >
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div>
          <label>Gender: </label>
          <input
            type="radio"
            name="gender"
            checked={gender === "male"}
            onChange={handleGenderChange}
            value="male"
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={handleGenderChange}
            style={{ marginLeft: "10px" }}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={handleGenderChange}
            style={{ marginLeft: "10px" }}
          />{" "}
          Other
        </div>
        <div>
          <label>Address: </label>
          <textarea
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ marginLeft: "10px", width: "100%", height: "60px" }}
          ></textarea>
        </div>
        <div>
          <label>Country: </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            style={{ marginLeft: "10px" }}
          >
            <option>Select</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
          </select>
        </div>
        <div>
          <label>File: </label>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <input
          type="submit"
          value="SignUp"
          style={{
            marginTop: "20px",
            width: "100px",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
};

export default Dashboard;
