import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subject, ReplaySubject, of } from "rxjs";
import { delay, map, tap } from "rxjs/operators";

import { Produit } from "./produit";
import { environment } from "./environment";

@Injectable({
  providedIn: "root"
})
export class ProduitService {
  private prods: Produit[];
  private filtreProd: Subject<Produit[]> = new ReplaySubject<Produit[]>(1);

  constructor(private http: HttpClient) {}

  getSearchResults(): Observable<Produit[]> {
    return this.filtreProd.asObservable();
  }

  searchNom(searchNom: string): Observable<void> {
    return this.fetchProd().pipe(
      tap((prods: Produit[]) => {
        prods = prods.filter(prod =>
          prod.nom.toLowerCase().includes(searchNom)
        );
        this.filtreProd.next(prods);
      }),
      map(() => void 0)
    );
  }

  searchType(searchType: string): Observable<void> {
    return this.fetchProd().pipe(
      tap((prods: Produit[]) => {
        prods = prods.filter(prod =>
          prod.type.toLowerCase().includes(searchType)
        );
        this.filtreProd.next(prods);
      }),
      map(() => void 0)
    );
  }

  getProduitNumero(num: string): Observable<Produit> {
    return this.fetchProd().pipe(
      map(produits => produits.find(produit => produit.numero == num))
    );
  }

  private fetchProd(): Observable<Produit[]> {
    if (this.prods) {
      return of(this.prods);
    }

    return this.http
      .get<Produit[]>(environment.backendProduit)
      .pipe(tap((prods: Produit[]) => (this.prods = prods)));
  }
}
