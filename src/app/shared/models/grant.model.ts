export class Grant {

  constructor(private _grantID: bigint, private _name: string, private _description: string,private _beginDate:string,private _endDate:string,private _adviseUrl) {
    this._grantID = _grantID
    this._name = _name;
    this._description = _description;
  }

  public get grantID() : bigint {
    return this._grantID;
  }
  public set grantID(v : bigint) {
    this._grantID = v;
  }
  

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
