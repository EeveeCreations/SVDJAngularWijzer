export class Grant{
  private _name: string;
  private _description;
  private _beginDate: string;
  private _endDate: string;
  private _adviseURL: string;


  constructor(name: string, description, beginDate: string, endDate: string, adviseURL: string) {
    this._name = name;
    this._description = description;
    this._beginDate = beginDate;
    this._endDate = endDate;
    this._adviseURL = adviseURL;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get beginDate(): string {
    return this._beginDate;
  }

  set beginDate(value: string) {
    this._beginDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get adviseURL(): string {
    return this._adviseURL;
  }

  set adviseURL(value: string) {
    this._adviseURL = value;
  }
}
