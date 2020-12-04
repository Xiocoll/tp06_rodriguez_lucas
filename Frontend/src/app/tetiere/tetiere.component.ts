import { Component, OnInit } from '@angular/core';

import { Store } from "@ngxs/store";
import { Observable } from 'rxjs';
import { ProduitState } from '../shared/states/produit-state';

@Component({
  selector: 'app-tetiere',
  templateUrl: './tetiere.component.html',
  styleUrls: ['./tetiere.component.css']
})
export class TetiereComponent implements OnInit {

  constructor(private store: Store) { }

  nbrProduits: Observable<number> = this.store.select(
      ProduitState.getNbProduit);;

  ngOnInit() {
  }

}