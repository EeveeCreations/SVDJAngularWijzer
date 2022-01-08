export class Category {
  private _categoryId: bigint;
  private _name: string;
  private _description: string;

  constructor(categoryId: bigint, name: string, description: string) {
    this._categoryId = categoryId;
    this._name = name;
    this._description = description;
  }

  get categoryId(): bigint {
    return this._categoryId;
  }

  set categoryId(value: bigint) {
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
