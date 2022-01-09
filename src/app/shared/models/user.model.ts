export class User{

  private _id: number;
  private _name: string;
  private _passcode: string;
  private _admin: string;


  constructor(id: number, name: string, passcode: string, admin: string) {
    this._id = id;
    this._name = name;
    this._passcode = passcode;
    this._admin = admin;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get passcode(): string {
    return this._passcode;
  }

  set passcode(value: string) {
    this._passcode = value;
  }

  get admin(): string {
    return this._admin;
  }

  set admin(value: string) {
    this._admin = value;
  }
}
