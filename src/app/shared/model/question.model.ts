import {Answer} from "./answer.model";
export class Question {
  questionID: bigint;
  questionText: string;
  answers: Answer[];
  extraInfoTile: string;
  extraInfoDescription: string
  extraInfoVideoURL: string;

}
