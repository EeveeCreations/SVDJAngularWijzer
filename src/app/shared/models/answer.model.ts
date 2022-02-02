import {Question} from "../models/question.model";
import { Advice } from "./advice.model";


export class Answer{

  constructor(public answerID: bigint, public answerText: string, public parentQuestionID: Question, public nextQuestion: Question, public advice: Advice) {
    this.answerID = answerID;
    this.answerText = answerText;
    this.parentQuestionID = parentQuestionID;
    this.nextQuestion = nextQuestion;
    this.advice = advice;
  }

  public get _answerID() : bigint {
    return this.answerID;
  }
  public set _answerID(v : bigint) {
    this.answerID = v;
  }
  
  public get _answerText() : string {
    return this.answerText;
  }
  public set _answerText(v : string) {
    this.answerText = v;
  }
  
  public get _parentQuestionID() : Question {
    return this.parentQuestionID;
  }
  public set _parentQuestionID(v : Question) {
    this.parentQuestionID = v;
  }
 
  public get _nextQuestion() : Question {
    return this.nextQuestion;
  }
  public set _nextQuestion(v : Question) {
    this.nextQuestion = v;
  }
  
  public get _advice() : Advice {
    return this.advice;
  }
  public set _advice(v : Advice) {
    this.advice = v;
  }
}
