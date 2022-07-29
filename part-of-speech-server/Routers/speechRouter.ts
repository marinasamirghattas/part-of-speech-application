import express, { Response, Request, NextFunction } from "express";
import TestData from "../TestData.json";
//for calling router
const router = express.Router();

router.get(
  "/words",
  (request: Request, resopnse: Response, next: NextFunction) => {
    resopnse.status(200).send(TestData.wordList);
  }
);

router.get(
  "/rank",
  (request: Request, resopnse: Response, next: NextFunction) => {
    resopnse.status(200).send(TestData.scoresList);
  }
);

export default router;
