import QuestionCard from "../components/QuestionCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleWordsChange } from "../redux/action";

const Questionnaire = () => {
  const dispatch = useDispatch();
  const [nextWord, setNextWord] = useState(0);
  const state: any = useSelector((state) => state);

  //changing the word that displayed in every question
  const changingWords = (words: any) => {
    dispatch(handleWordsChange(words));
  };

  //getting words from server side
  const getWords = async () => {
    const { data } = await axios("http://localhost:3001/words/");
    changingWords(data);
  };

  //handling number of questions to display 10 only
  function handleDisplayWord() {
    if (nextWord <= 9) {
      setNextWord(nextWord + 1);
    }
  }

  //handling getting words when component mount
  useEffect(() => {
    getWords();
  }, []);
  return (
    <>
      {state.change_word && (
        <QuestionCard
          handleDisplayWord={handleDisplayWord}
          wordNum={nextWord + 1}
          word={state.change_word[nextWord]}
        />
      )}
    </>
  );
};

export default Questionnaire;
