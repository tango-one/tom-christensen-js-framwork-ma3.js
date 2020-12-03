import React from "react";
import Heading from "../components/Heading";
import NewList from "../components/NewList";

import { Link } from "react-router-dom";

function News() {
  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <Heading />
      <NewList />
    </div>
  );
}

export default News;
