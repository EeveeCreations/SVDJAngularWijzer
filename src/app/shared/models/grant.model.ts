export class Grant {

  constructor(private grantID: bigint, private name: string, private description: string,private _beginDate:string,private _endDate:string,private _adviseUrl) {
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
