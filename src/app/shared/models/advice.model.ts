import { Grant } from "./grant.model";

export class Advice{

    constructor(private adviceID:bigint, private name: string, private description: string, private grants: Grant[]) {
      this.adviceID = adviceID;
      this.name = name;
      this.description = description;
      this.grants = grants;
    }

    public get _adviceID() : bigint {
        return this.adviceID;
    }
    public set _adviceID(v : bigint) {
        this.adviceID = v;
    }

    public get _name() : string {
        return this.name;
    }
    public set _name(v : string) {
        this.name = v;
    }

    public get _description() : string {
        return this.description;
    }
    public set _description(v : string) {
        this.description = v;
    }

    public get _grants() : Grant[] {
        return this.grants;
    }
    public set _grants(v : Grant[]) {
        this.grants = v;
    }
  }
