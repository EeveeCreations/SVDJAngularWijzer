export class Request {

//    Constructor
  constructor(private userNr:number, private duty: string,private specific: string, private givenVariables,private isNewData: boolean) {
    this.userNr = userNr;
    this.duty = duty;
    this.specific = specific;
    this.givenVariables = givenVariables;
    this.isNewData = isNewData;
  }

}
