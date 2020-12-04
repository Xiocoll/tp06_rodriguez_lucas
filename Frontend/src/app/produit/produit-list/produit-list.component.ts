import { Component, OnInit, OnDestroy, Pipe } from "@angular/core";
import { Store } from "@ngxs/store";
import { Subscription, Observable } from "rxjs";
import { Produit } from "../../produit";
import { ProduitService } from "../../produit.service";
import { AddProduit } from "../../shared/actions/produit-action";

@Component({
  selector: "app-produit-list",
  templateUrl: "./produit-list.component.html",
  styleUrls: ["./produit-list.component.css"]
})
export class ProduitListComponent implements OnInit {
  searchNom: string = "";
  searchFruit: string = "fruit";
  searchLegume: string = "legume";
  searchType: string = "";

  constructor(private ProduitService: ProduitService, private store: Store) {}

  produits: Observable<Produit[]> = this.ProduitService.getSearchResults();

  ngOnInit() {
    this.ProduitService.searchNom(this.searchNom).subscribe();
  }

  getValidationNom(): boolean {
    if (this.searchNom == "") {
      return true;
    } else {
      return /^[A-Za-z]{1,30}$/.test(this.searchNom);
    }
  }

  onSearchTermChange(): void {
    this.ProduitService.searchNom(this.searchNom).subscribe();
  }

  onClickType(type: string): void {
    this.ProduitService.searchType(type).subscribe();
  }

  onClickAdd(prod: Produit) {
    this.store.dispatch(new AddProduit(prod));
  }
}
