import { NgxsModule, Action, Selector, State, StateContext } from "@ngxs/store";
import { ProduitStateModel } from "./produit-state-model";
import { AddProduit, DelProduit } from "../actions/produit-action";
import { Produit } from "../../produit";

@State<ProduitStateModel>({
  name: "listProduit",
  defaults: {
    produits: []
  }
})
export class ProduitState {
  @Selector()
  static getNbProduit(state: ProduitStateModel): number {
    return state.produits.length;
  }

  @Selector()
  static getProduit(state: ProduitStateModel): Produit[] {
    return state.produits;
  }

  @Action(AddProduit)
  add(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: AddProduit
  ) {
    const state = getState();
    patchState({
      // créer un nouveau tableau
      // l'opérateur ... permet de consituer une liste d'élement du tableau
      produits: [...state.produits, payload]
    });
  }

  @Action(DelProduit)
  del(
    { getState, patchState }: StateContext<ProduitStateModel>,
    { payload }: DelProduit
  ) {
    const state = getState();
    patchState({
      // supprimer le payload dans users
      produits: state.produits.filter(
        item => item.nom != payload.nom && item.numero != payload.numero
      )
    });
  }
}
