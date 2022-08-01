import { CHANGE_WORD, CHANGE_SCORE, CURRENT_WORD } from "./actiontypes";

export const handleWordsChange = (payload: any) => ({
  type: CHANGE_WORD,
  payload,
});
export const handleCurrentWord = (payload: any) => ({
  type: CURRENT_WORD,
  payload,
});
export const handleScoreChange = (payload: any) => ({
  type: CHANGE_SCORE,
  payload,
});
