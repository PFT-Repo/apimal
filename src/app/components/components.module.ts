import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponentComponent } from './dog-component/dog-component.component';



@NgModule({
  declarations: [
    DogComponentComponent
  ],
  exports:[DogComponentComponent],

  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
