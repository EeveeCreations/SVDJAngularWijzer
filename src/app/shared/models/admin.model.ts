export class Admin {

  constructor(private _userName: string,
              private _role: string,
              private _token: string,
              private _refreshToken: string) {
    this._userName = _userName;
    this._role = _role;
    this._token = _token;
    this._refreshToken = _refreshToken;

  }

  //Getters and Setters
  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get token(): string {
    return this._token;
  }

  get refreshToken(): string {
    return this._refreshToken;
  }
}
