import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SoundCalculatorComponent } from './sound-calculator/sound-calculator.component';
import {SoundCalculatorService} from './Services/sound-calculator.service';
import { SoundResultComponent } from './sound-result/sound-result.component'


@NgModule({
  declarations: [
    AppComponent,
    SoundCalculatorComponent,
    SoundResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SoundCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
