export class ResultModel {
  private _name: string;
  private _description: string;
  private _link: string;

  constructor(name: string, description: string, link: string) {
    this._name = name;
    this._description = description;
    this._link = link;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get description(): string {
    return this._description;
  }

  set description(desc: string) {
    this._description = desc;
  }

  get link() {
    return this._link;
  }

  set link(link: string) {
    this._link = link;
  }

}
