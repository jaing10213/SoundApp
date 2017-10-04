import { Component, OnInit } from '@angular/core';
import {SoundCalculatorService} from '../Services/sound-calculator.service'
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {SoundResult} from '../objects/SoundResult'


@Component({
  selector: 'sound-calculator',
  templateUrl: './sound-calculator.component.html',
  styleUrls: ['./sound-calculator.component.css']
})
export class SoundCalculatorComponent implements OnInit {

  constructor(private _soundService: SoundCalculatorService) { }

  families: {Key: number, Value: string}[] = [];
  units: {Key: number, Value: string}[] = [];
  airInlets: {Key: number, Value: string}[] = [];
  airOutlets: {Key: number, Value: string}[] = [];
  soundPaths: {Key: number, Value: string}[] = [];
  

  selectedFamily: number;
  selectedUnit: number ;
  selectedAirInlet: number;
  selectedAirOutlet: number;

inpAcfm: number;
inpTsp: number;

soundResults: {Key: string, Value: SoundResult}[];

  productFamilyChanged(): void {
    
  this.getModelNumbers(this.selectedFamily);
}

unitModelChanged(){
  this.getAirInlets(this.selectedUnit);
}

airInletChanged(): void {
  this.getAirOulets(this.selectedUnit, this.selectedAirInlet);
}

airOutletChanged(): void {
  this.soundResults = [];  
}


private getModelNumbers(familyId: number): void{
  this.units = [];
  this.airInlets = [];
  this.airOutlets = [];
  this.soundResults = [];

  this.selectedUnit = 0;
  this.selectedAirInlet = 0;
  this.selectedAirOutlet = 0;


  if (familyId != 0)
  {
      this._soundService.GetUnitModels(familyId)
      .subscribe(
        (res => {this.units = res;})
        );
  }
}

private getAirInlets(unitId: number): void{
  this.airInlets = [];
  this.airOutlets = [];
 this.soundResults = [];

  this.selectedAirInlet = 0;
  this.selectedAirOutlet = 0;

  if (unitId !=0){
    this._soundService.GetInlets(unitId)
    .subscribe(
      (res=> {this.airInlets = res;})
    )
  }
}

private getAirOulets(unitId: number, airInletId): void{
  this.airOutlets = [];
  this.soundResults = [];

  this.selectedAirOutlet = 0;

  if (unitId !=0 && airInletId !=0){
    this._soundService.GetOutlet(unitId, airInletId)
    .subscribe(
      (res=> {this.airOutlets = res;})
    )
  }
}



calculateSound(): void{
  console.log("Calculating");
  this._soundService.CalculateSound(this.selectedUnit, this.selectedAirInlet, this.selectedAirOutlet, this.inpAcfm, this.inpTsp)
  .subscribe(res=> {this.soundResults = res})
}

  ngOnInit() {

    this._soundService.GetProductFamilies()
    .subscribe(
      (res => {this.families = res })
      );
      this._soundService.GetSoundPaths()
      .subscribe(
        (res => {this.soundPaths = res;})
      )
  }

}
