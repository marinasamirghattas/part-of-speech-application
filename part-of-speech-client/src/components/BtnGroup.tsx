import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "reactstrap";
import { handleCurrentWord } from "../redux/action";

function BtnGroup(props: any) {
  const [rSelected, setRSelected] = useState<number>();
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const CurrentWord = (answer: any) => {
    dispatch(handleCurrentWord(answer));
  };
  return (
    <ButtonGroup>
      {props.answers.map((ans: string, index: number) => {
        return (
          <Button
            key={index}
            color="primary"
            outline
            disabled={state.current_word != "" ? true : false}
            onClick={() => {
              //set active button and dispaly every choise
              setRSelected(index);
              CurrentWord(ans);
            }}
          >
            {ans}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

export default BtnGroup;
