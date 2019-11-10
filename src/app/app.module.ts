import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { TwigComponent } from './components/twig/twig.component';
import { Leaf1Component } from './components/leaf1/leaf1.component';
import { Leaf2Component } from './components/leaf2/leaf2.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TwigComponent,
    Leaf1Component,
    Leaf2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
