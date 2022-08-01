import { CHANGE_WORD, CHANGE_SCORE, CURRENT_WORD } from "./actiontypes";

const initialState = {
  change_word: "",
  score: 0,
  current_word: "",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHANGE_WORD:
      return {
        ...state,
        change_word: action.payload,
      };
    case CURRENT_WORD:
      return {
        ...state,
        current_word: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
