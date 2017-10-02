import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SoundCalculatorComponent } from './sound-calculator/sound-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SoundCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
