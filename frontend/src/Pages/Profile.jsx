import React, { useEffect, useState } from "react";
import "./CSS/Profile.css";
import axios from "axios";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sucessMes, setSucessMes] = useState(false);
  const [sucessMw, setSucessMw] = useState("");
  const [showLS, setShowLS] = useState(true);
  const [lgemail, setlgEmail] = useState("");
  const [lgpassword, setlgPassword] = useState("");
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3009/users/get")
      .then((res) => setuser(res.data))
      .catch((err) => console.log(err));
    setTimeout(() => {
      setSucessMes(false);
    }, 4000);
  }, [sucessMes]);
  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3009/users/post", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        setSucessMes(true);
        setSucessMw(" user successfully added");
      })
      .catch((err) => console.log(err));
  };
  //login
  const handleLogin = (e) => {
    e.preventDefault();
    const fineUser = user.find((item) => item.email === lgemail);
    if (fineUser) {
      console.log(fineUser);
      console.log(lgpassword);
      if (fineUser.password === lgpassword) {
        setSucessMes(true);
        setSucessMw("login suceesfully");
        navigate("/");
      } else {
        console.log("incorrect");
      }
    }
  };

  return (
    <div>
      {sucessMes && (
        <div className="sucessMes">
          <TiTickOutline className="tickIcon" />
          {sucessMw}
        </div>
      )}

      {showLS ? (
        <div className="signUp">
          <h1>Sign up </h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email id</label>
              <input
                type="email"
                placeholder="Enter Your mail id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <p className="loginNav">
            already have an account{" "}
            <button onClick={() => setShowLS(false)}>login</button>
          </p>
        </div>
      ) : (
        <div className="signUp">
          <h1>login</h1>
          <form onSubmit={(e) => handleLogin(e)}>
            <div>
              <label>Email id</label>
              <input
                type="email"
                placeholder="Enter Your mail id"
                required
                value={lgemail}
                onChange={(e) => setlgEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                required
                value={lgpassword}
                onChange={(e) => setlgPassword(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <p className="loginNav">
            i don't have an account{" "}
            <button onClick={() => setShowLS(true)}>signup</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
