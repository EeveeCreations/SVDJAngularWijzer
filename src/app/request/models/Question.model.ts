export class Question{

  public constructor( private questionID: bigint,  private questionText: string, private answers: [],  private extraInfoTile: string,  private extraInfoDescription: string,  private extraInfoVideoURL: string) {
  this.questionID = questionID;
  this.questionText = questionText;
  this.answers = answers;
  this.extraInfoTile = extraInfoTile;
  this.extraInfoDescription = extraInfoDescription;
  this.extraInfoVideoURL = extraInfoVideoURL;
  }
}
