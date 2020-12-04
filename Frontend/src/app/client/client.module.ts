import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientRoutingModule } from "./client-routing.module";
import { FormulaireComponent } from "./formulaire/formulaire.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FormulaireComponent]
})
export class ClientModule {}
