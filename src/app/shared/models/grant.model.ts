import {Category} from "./category.model";

export class Grant {

  constructor(private _grantId: number,
              private _name: string,
              private _description: string,
              private _beginDate:string,
              private _endDate:string,
              private _adviseUrl,
              private _categories: Category[]) {
    this._name = _name;
    this._description = _description;
    this._beginDate = _beginDate;
    this._endDate = _endDate;
    this._adviseUrl =_adviseUrl;
    this._categories = _categories;
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

  get GrantID(): number {
    return this._grantId;
  }

  set GrantID(value: number) {
    this._grantId = value;
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

  get adviseUrl() {
    return this._adviseUrl;
  }

  set adviseUrl(value) {
    this._adviseUrl = value;
  }

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }
}
