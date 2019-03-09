import { TestBed, inject } from '@angular/core/testing';

import { TrainserviceService } from './trainservice.service';

describe('TrainserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainserviceService]
    });
  });

  it('should be created', inject([TrainserviceService], (service: TrainserviceService) => {
    expect(service).toBeTruthy();
  }));
});
