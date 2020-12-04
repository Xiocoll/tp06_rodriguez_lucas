import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailProdComponent } from "./detail-prod/detail-prod.component";

import { ProduitListComponent } from "./produit-list.component";

const appRoutes: Routes = [
  {
    path: "detail/:num",
    component: DetailProdComponent
  },
  {
    path: "",
    component: ProduitListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule {}
