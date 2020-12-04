import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProduitRoutingModule } from "./produit-routing.module";
import { ProduitListComponent } from "./produit-list.component";
import { DetailProdComponent } from "./detail-prod/detail-prod.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ErrorDirective } from "../../error.directive";



@NgModule({
  imports: [CommonModule, ProduitRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  declarations: [ProduitListComponent, DetailProdComponent, ErrorDirective]
})
export class ProduitModule {}
