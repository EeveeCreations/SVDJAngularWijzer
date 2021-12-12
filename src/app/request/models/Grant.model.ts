export class Grant {

  constructor(private GrantID: bigint, private _name: string, private _description: string) {
    this._name = _name;
    this._description = _description;
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
