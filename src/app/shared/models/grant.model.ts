export class Grant {

  constructor(private GrantID: bigint, private _name: string, private _description: string,private _beginDate:string,private _endDate:string,private _adviseUrl) {
    this._name = _name;
    this._description = _description;
    this._beginDate = _beginDate;
    this._endDate = _endDate;
    this._adviseUrl =_adviseUrl;
  }

//  Getters and Setters
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
