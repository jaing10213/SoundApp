import { TestBed, inject } from '@angular/core/testing';

import { SoundCalculatorService } from './sound-calculator.service';

describe('SoundCalculatorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoundCalculatorService]
    });
  });

  it('should be created', inject([SoundCalculatorService], (service: SoundCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
