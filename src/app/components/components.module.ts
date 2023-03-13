import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponentComponent } from './dog-component/dog-component.component';
import { CatapiComponent } from './catapi/catapi.component';
import { CatapiCardComponent } from './catapi-card/catapi-card.component';



@NgModule({
  declarations: [
    DogComponentComponent
  ],
  exports:[DogComponentComponent],

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
