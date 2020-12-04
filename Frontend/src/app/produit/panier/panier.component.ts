import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { Produit } from "../../produit";
import { ProduitService } from "../../produit.service";
import { DelProduit } from "../../shared/actions/produit-action";
import { ProduitState } from "../../shared/states/produit-state";

@Component({
  selector: "app-panier",
  templateUrl: "./panier.component.html",
  styleUrls: ["./panier.component.css"]
})
export class PanierComponent implements OnInit {
  constructor(private ProduitService: ProduitService, private store: Store) {}

  lesProduits: Observable<Produit[]> = this.store.select(
    ProduitState.getProduit
  );

  ngOnInit() {}

  onClickDel(prod: Produit) {
    this.store.dispatch(new DelProduit(prod));
  }
}
