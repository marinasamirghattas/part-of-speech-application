import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Progress,
} from "reactstrap";
import { handleCurrentWord, handleScoreChange } from "../redux/action";
import BtnGroup from "./BtnGroup";

const QuestionCard = (props: any) => {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //to handle changing score in store
  const handleScore = (point: number) => {
    dispatch(handleScoreChange(point));
  };
  //to reset the answer that saved in store after moving to next question
  const handleCurrWord = (normal: string) => {
    dispatch(handleCurrentWord(normal));
  };
  //changing the score if the answer is correct
  const checkScore = () => {
    if (props.word.pos == state.current_word) {
      handleScore(state.score + 10);
    }
    //saving question number in variable to handle progress bar and navigate to score page
    handleCurrWord("");
    if (props.wordNum == 10) {
      navigate("/score");
    }
  };
  //wrap all next button functionality
  const handelNextButton = () => {
    checkScore();
    props.handleDisplayWord();
  };
  return (
    <Card
      className="my-5 w-75 mx-auto"
      style={{
        minHeight: "60vh",
        height: "69vh",
      }}
    >
      <CardHeader className="bg-primary"></CardHeader>
      <CardBody>
        <CardTitle tag="h2" className="my-2">
          Part Of Speech Questionnaire
        </CardTitle>
        <CardText className="my-5 fs-5">
          What is the part of speech of <strong>{props.word.word}</strong> ?
        </CardText>
        <BtnGroup answers={["adverb", "verb", "noun", "adjective"]} />

        <Button
          className="d-block mx-auto my-5 px-4"
          onClick={handelNextButton}
        >
          {props.wordNum < 10 ? "Next" : "Show My Rank"}
        </Button>

        {state.current_word != "" && (
          <h3
            style={{
              color: props.word.pos == state.current_word ? "green" : "red",
            }}
          >
            {props.word.pos == state.current_word ? "right :)" : "wrong :("}
          </h3>
        )}
      </CardBody>
      <p className="text-danger">
        *Note that When you chose an answer you can't change it anymore
      </p>
      <Progress value={props.wordNum * 10} />
    </Card>
  );
};

export default QuestionCard;
