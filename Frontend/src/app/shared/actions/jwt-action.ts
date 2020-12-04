import { Jwt } from "../models/jwt";

export class CreateJwt {
  static readonly type = "[Jwt] Create";
  constructor(public payload: Jwt) {}
}

