import React from "react";
import Heading from "../components/Heading";
import NewList from "../components/NewList";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <p>
        <Link to="/news">News</Link>
      </p>
      <Heading />
      <NewList />
    </div>
  );
}

export default Home;
