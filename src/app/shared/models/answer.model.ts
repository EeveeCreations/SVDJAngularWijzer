import {Question} from "../models/question.model";
import { Advice } from "./advice.model";


export class Answer{

  constructor(private _answerID: bigint, private _answerText: string, private _parentQuestionID: Question, private _nextQuestionID: Question, private _advice: Advice) {
    this._answerID = _answerID;
    this._answerText = _answerText;
    this._parentQuestionID = _parentQuestionID;
    this._nextQuestionID = _nextQuestionID;
    this._advice = _advice;
  }

  public get answerID() : bigint {
    return this._answerID;
  }
  public set answerID(v : bigint) {
    this._answerID = v;
  }
  
  public get answerText() : string {
    return this._answerText;
  }
  public set answerText(v : string) {
    this._answerText = v;
  }
  
  public get parentQuestionID() : Question {
    return this._parentQuestionID;
  }
  public set parentQuestionID(v : Question) {
    this._parentQuestionID = v;
  }
 
  public get nextQuestionID() : Question {
    return this._nextQuestionID;
  }
  public set nextQuestionID(v : Question) {
    this._nextQuestionID = v;
  }
  
  public get advice() : Advice {
    return this._advice;
  }
  public set advice(v : Advice) {
    this._advice = v;
  }
}
