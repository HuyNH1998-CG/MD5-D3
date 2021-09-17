import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontsizeeditComponent } from './fontsizeedit/fontsizeedit.component';
import {FormsModule} from "@angular/forms";
import { PetComponent } from './pet/pet.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    FontsizeeditComponent,
    PetComponent,
    ProductComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
