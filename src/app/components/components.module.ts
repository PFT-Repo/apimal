import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatapiComponent } from './catapi/catapi.component';
import { CatapiCardComponent } from './catapi-card/catapi-card.component';



@NgModule({
  declarations: [
    CatapiComponent,
    CatapiCardComponent
  ],
  exports:[    CatapiComponent,
    CatapiCardComponent
],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
