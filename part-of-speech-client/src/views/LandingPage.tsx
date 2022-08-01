import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const LandingPage = () => {
  return (
    <div style={{ height: "100vh", background: "#f2e08e", paddingTop: "20vh" }}>
      <h1 className="mb-5">Welcome To Part Of Speech Questionnaire</h1>
      <Button color="primary">
        <Link
          className="text-decoration-none"
          style={{ color: "white" }}
          to="/Questionnaire"
        >
          Start Test
        </Link>
      </Button>
    </div>
  );
};

export default LandingPage;
