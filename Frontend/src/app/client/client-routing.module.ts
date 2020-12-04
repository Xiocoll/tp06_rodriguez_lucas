import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FormulaireComponent } from "./formulaire/formulaire.component";

const appRoutes: Routes = [
  {
    path: "",
    component: FormulaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
