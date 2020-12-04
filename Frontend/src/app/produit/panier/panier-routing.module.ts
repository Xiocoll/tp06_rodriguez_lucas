import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PanierComponent } from "./panier.component";

const appRoutes: Routes = [
  {
    path: "",
    component: PanierComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PanierRoutingModule {}
