import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          gap: "5%",
        }}
      >
        <h3>Student Senate</h3>
        <Link to={"/"}>Home</Link>
        <Link to={"/result"}>Result</Link>
        <Link to={"/vote"}>Vote</Link>
      </div>
    </>
  );
};

export default Navbar;