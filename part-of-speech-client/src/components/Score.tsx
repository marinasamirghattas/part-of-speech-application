import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardText, CardTitle } from "reactstrap";
import { handleScoreChange } from "../redux/action";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Score = () => {
  const [rankRes, setRankRes] = useState(0);
  const disptach = useDispatch();
  const state: any = useSelector((state) => state);
  const navigate = useNavigate();

  //return to questionnaire page if needed
  const handleNewTest = () => {
    disptach(handleScoreChange(0));
    navigate("/Questionnaire");
  };
  //get ranks from backend
  const getRanks = async () => {
    const { data } = await axios.post("http://localhost:3001/rank/", {
      score: state.score,
    });
    setRankRes(data);
  };
  //getting ranks when the component mount
  useEffect(() => {
    getRanks();
  }, []);
  return (
    <Card
      className="w-50 mx-auto p-5"
      style={{ marginTop: "30vh", backgroundColor: "#b0cbe5" }}
    >
      <CardTitle className="mb-4" tag="h1">
        Your Rank : {rankRes}
      </CardTitle>
      <CardText className="mb-5" tag="h2">
        Final Score : {state.score}
      </CardText>
      <Button onClick={handleNewTest}>New Test!</Button>
    </Card>
  );
};

export default Score;
