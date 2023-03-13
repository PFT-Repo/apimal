import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpipePipe } from './pipes/mainpipe.pipe';
import { ComponentsModule } from './components/components.module';
import { DogComponentComponent } from './components/dog-component/dog-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpipePipe } from './pipes/mainpipe.pipe';
import { ComponentsModule } from "./components/components.module";

@NgModule({
    declarations: [
        AppComponent,
        MainpipePipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ComponentsModule
    ]
})
export class AppModule {

}
