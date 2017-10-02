import { TestBed, inject } from '@angular/core/testing';

import { SoundCalculatorServiceService } from './sound-calculator-service.service';

describe('SoundCalculatorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoundCalculatorServiceService]
    });
  });

  it('should be created', inject([SoundCalculatorServiceService], (service: SoundCalculatorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
