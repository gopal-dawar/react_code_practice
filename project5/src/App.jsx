import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [updatevalue, setUpdatevalue] = useState("");

  function formHandler(e) {
    e.preventDefault(e);
    const olduser = localStorage.getItem("username");
    const oldpass = localStorage.getItem("password");

    if (olduser == username && oldpass == password) {
      setUpdatevalue("Alredy have account");
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      setUpdatevalue("Successfuly Login");
    }

    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <div className="flex justify-center items-center w-full h-[100vh]">
        <form
          onSubmit={(e) => {
            formHandler(e);
          }}
          className="w-80 p-10 h-100 bg-black text-white flex flex-col justify-between"
        >
          <h3 className="pb-2 text-center text-3xl font-bold">Login Form</h3>
          <div className="group">
            <input
              className="text-[18px] outline-none placeholder:text-white shadow shadow-white w-full px-2 py-2 rounded border-white"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>

          <div className="group">
            <input
              type="password"
              className="text-[18px] outline-none placeholder:text-white shadow shadow-white w-full px-2 py-2 rounded border-white"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <p className="-mt-7 text-red-800">{updatevalue}</p>
          <button className="active:scale-105  transition-all ease-in bg-sky-300 p-2 rounded text-2xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
