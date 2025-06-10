import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <h1>Opps! Page is not found!</h1>
      <Link to="/">Go back home</Link>
    </>
  );
};

export default NotFoundPage;
