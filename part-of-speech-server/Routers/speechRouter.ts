import express, { Response, Request, NextFunction } from "express";
import TestData from "../TestData.json";
//for calling router
const router = express.Router();

//function to shuffle words
function shuffle(array: any) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

router.get(
  "/words",
  (request: Request, resopnse: Response, next: NextFunction) => {
    resopnse.status(200).send(shuffle(TestData.wordList));
  }
);

router.post(
  "/rank",
  (request: Request, resopnse: Response, next: NextFunction) => {
    let scoreCounter = 0;
    let size = Object.keys(TestData.scoresList).length;
    TestData.scoresList.forEach((score) => {
      if (score < request.body.score) {
        scoreCounter++;
      }
    });
    let rank: any = (scoreCounter / size) * 100;
    if (Number.isInteger(rank)) {
      rank = rank;
    } else {
      rank = rank.toFixed(2);
    }
    resopnse.status(200).json(rank);
    console.log(scoreCounter, "scoreCounter");
    console.log(size, "size");
  }
);

export default router;
