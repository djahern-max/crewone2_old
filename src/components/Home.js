import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to CrewOne2</h2>
      <p className="message">
        Please <Link to="/login">Login</Link> or{" "}
        <Link to="/register">Register</Link> to continue.
      </p>
    </div>
  );
};

export default Home;
