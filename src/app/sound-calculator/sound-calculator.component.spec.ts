import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundCalculatorComponent } from './sound-calculator.component';

describe('SoundCalculatorComponent', () => {
  let component: SoundCalculatorComponent;
  let fixture: ComponentFixture<SoundCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
