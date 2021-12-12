export class Question {

  public constructor(private _questionID: bigint, private _questionText: string, private _answers: [], private _extraInfoTile: string, private _extraInfoDescription: string, private _extraInfoVideoURL: string) {
    this._questionID = _questionID;
    this._questionText = _questionText;
    this._answers = _answers;
    this._extraInfoTile = _extraInfoTile;
    this._extraInfoDescription = _extraInfoDescription;
    this._extraInfoVideoURL = _extraInfoVideoURL;
  }

//  Getters and Setters
  get questionID(): bigint {
    return this._questionID;
  }

  set questionID(value: bigint) {
    this._questionID = value;
  }

  get questionText(): string {
    return this._questionText;
  }

  set questionText(value: string) {
    this._questionText = value;
  }

  get answers(): [] {
    return this._answers;
  }

  set answers(value: []) {
    this._answers = value;
  }

  get extraInfoTile(): string {
    return this._extraInfoTile;
  }

  set extraInfoTile(value: string) {
    this._extraInfoTile = value;
  }

  get extraInfoDescription(): string {
    return this._extraInfoDescription;
  }

  set extraInfoDescription(value: string) {
    this._extraInfoDescription = value;
  }

  get extraInfoVideoURL(): string {
    return this._extraInfoVideoURL;
  }

  set extraInfoVideoURL(value: string) {
    this._extraInfoVideoURL = value;
  }
}
