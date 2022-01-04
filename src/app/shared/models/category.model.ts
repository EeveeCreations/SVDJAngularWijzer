export class Category {

  constructor(private _categoryID: bigint, private _name: string, private _description: string) {
    this._categoryID = _categoryID;
    this._name = _name;
    this._description = _description;
  }
//  Getters and Setters

  get categoryID(): bigint {
    return this._categoryID;
  }

  set categoryID(value: bigint) {
    this._categoryID = value;
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
