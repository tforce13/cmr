import { TestBed, inject } from '@angular/core/testing';

import { ZipcodesService } from './zipcodes.service';

describe('ZipcodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZipcodesService]
    });
  });

  it('should be created', inject([ZipcodesService], (service: ZipcodesService) => {
    expect(service).toBeTruthy();
  }));
});
