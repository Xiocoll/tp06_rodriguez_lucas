import { Produit } from "../../produit";

export class AddProduit {
  static readonly type = "[Produit] Add";
  constructor(public payload: Produit) {}
}
export class DelProduit {
  static readonly type = "[Produit] Del";
  constructor(public payload: Produit) {}
}
