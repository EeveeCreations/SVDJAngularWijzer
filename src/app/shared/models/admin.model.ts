export class Admin {

  constructor(private _userName: string, private _password: string) {
    this._userName = _userName;
    this._password = _password;
  }

  //Getters and Setters
  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
