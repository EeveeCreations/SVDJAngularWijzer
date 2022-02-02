export class Grant {

  constructor(public grantID: bigint, public name: string, public description: string,public _beginDate:string,public _endDate:string,public _adviseUrl) {
    this.grantID = grantID
    this.name = name;
    this.description = description;
  }

  public get _grantID() : bigint {
    return this.grantID;
  }
  public set _grantID(v : bigint) {
    this.grantID = v;
  }
  

  get _name(): string {
    return this.name;
  }

  set _name(value: string) {
    this.name = value;
  }

  get _description(): string {
    return this.description;
  }

  set _description(value: string) {
    this.description = value;
  }
}
