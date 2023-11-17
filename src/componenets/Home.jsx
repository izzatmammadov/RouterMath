import React from "react";
import { Link } from "react-router-dom";
import { ROUTER } from "../constants/Routers";

export const Home = () => {
  return (
    <>
      <div>
        <p>Add to URL and 2 numbers then click to "Enter" then see magic</p>
        <ol>
          <Link to={ROUTER.Addition}><li>/plus</li></Link>
          <Link to={ROUTER.Subtraction}><li>/minus</li></Link>
          <Link to={ROUTER.Multiplication}><li>/multiply</li></Link>
          <Link to={ROUTER.Division}><li>/divide</li></Link>
        </ol>

        <p>FOR EXAMPLE</p>
        <p>http://localhost:3000/plus/number/number</p>
        <p>http://localhost:3000/divide/number/number</p>
      </div>
    </>
  );
};
