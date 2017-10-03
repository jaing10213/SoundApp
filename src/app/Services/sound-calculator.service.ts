import { Injectable } from '@angular/core';
import {Observable} from 'Rxjs'
import {HttpClient} from '@angular/common/http';

import {SoundResult} from '../objects/SoundResult'

@Injectable()
export class SoundCalculatorService {

  constructor(private http: HttpClient) { }

 // private baseUrl: string = "http://localhost:55276/api"
  private baseUrl: string = "http://dev.lrs.liebert.com/soundcalculatorapi/api"

  GetProductFamilies(): Observable<{Key: number, Value: string}[]> {
    let endUrl = "family/all"
    let url = `${this.baseUrl}/${endUrl}`

    return this.http.get<{Key: number, Value: string}[]>(url);
  }

  GetUnitModels(familyId: number): Observable<{Key: number, Value: string}[]>{
    let endUrl = "UnitSound/Models"
    let url = `${this.baseUrl}/${endUrl}/${familyId}`;

    return this.http.get<{Key: number, Value: string}[]>(url);
  }

  GetInlets(unitId: number): Observable<{Key:number, Value:string}[]>{
    let endUrl = "UnitSound/airinlets"
    let url = `${this.baseUrl}/${endUrl}/${unitId}`
    return this.http.get<{Key:number, Value:string}[]>(url);
  }

    GetOutlet(unitId: number, airInletId: number): Observable<{Key:number, Value:string}[]>{
    let endUrl = "UnitSound/airoutlets"
    let url = `${this.baseUrl}/${endUrl}/${unitId}/${airInletId}`
    return this.http.get<{Key:number, Value:string}[]>(url);
  }

  GetSoundPaths(): Observable<{Key:number, Value:string}[]>{
    let endUrl = "UnitSound/soundpath/all"
    let url = `${this.baseUrl}/${endUrl}`
    return this.http.get<{Key:number, Value:string}[]>(url);
  }

  CalculateSound(unitId: number, aInlet: number, aOutlet: number, acfm: number, tsp: number): Observable <{Key: string, Value: SoundResult}[]>{
    let endUrl = "UnitSound/calculate"
    let url = `${this.baseUrl}/${endUrl}/${unitId}/${aInlet}/${aOutlet}/${acfm}/${tsp}/`
    return this.http.get<{Key: string, Value: SoundResult}[]>(url);
  }


}
