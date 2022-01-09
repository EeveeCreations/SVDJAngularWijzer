export class Category {

  constructor(private _categoryId: number,
              private _name: string,
              private _description: string) {
    this._categoryId = _categoryId;
    this._name = _name;
    this._description = _description;
  }
//  Getters and Setters

  get categoryID(): number {
    return this._categoryId;
  }

  set categoryID(value: number) {
    this._categoryId = value;
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
