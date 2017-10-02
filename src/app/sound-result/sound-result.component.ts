import { Component, OnInit, Input } from '@angular/core';

import {SoundResult} from '../Objects/SoundResult';

@Component({
  selector: 'sound-result',
  templateUrl: './sound-result.component.html',
  styleUrls: ['./sound-result.component.css']
})
export class SoundResultComponent implements OnInit {

  constructor() { }

  @Input() soundData: SoundResult[];

  ngOnInit() {
  }

}
