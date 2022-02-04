export class Request {

//    Constructor
  constructor(private _adminToken: string, private _duty: string, private _specific: string, private _givenVariables: any, private _isNewData: boolean) {
    this._adminToken = _adminToken;
    this._duty = _duty.toLowerCase();
    this._specific = _specific;
    this._givenVariables = _givenVariables;
    this._isNewData = _isNewData;
  }

  // Getters and setters

  get adminToken(): string {
    return this._adminToken;
  }

  set adminToken(value: string) {
    this._adminToken = value;
  }

  get duty(): string {
    return this._duty;
  }

  get specific(): string {
    return this._specific;
  }

  set specific(value: string) {
    this._specific = value;
  }

  get givenVariables() {
    return this._givenVariables;
  }

  set givenVariables(value) {
    this._givenVariables = value;
  }

  get isNewData(): boolean {
    return this._isNewData;
  }

  set isNewData(value: boolean) {
    this._isNewData = value;
  }
}
