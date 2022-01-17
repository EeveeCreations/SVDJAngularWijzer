import { Grant } from "./grant.model";

export class Advice{

    constructor(private _adviceID:bigint, private _name: string, private _description: string, private _grants: Grant[]) {
      this._adviceID = _adviceID;
      this._name = _name;
      this._description = _description;
      this._grants = _grants;
    }

    public get adviceID() : bigint {
        return this._adviceID;
    }
    public set adviceID(v : bigint) {
        this._adviceID = v;
    }

    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }

    public get description() : string {
        return this._description;
    }
    public set description(v : string) {
        this._description = v;
    }

    public get grants() : Grant[] {
        return this._grants;
    }
    public set grants(v : Grant[]) {
        this._grants = v;
    }
  }
