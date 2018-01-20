import { TestBed, inject } from '@angular/core/testing';

import { Programservice } from './program.service';

describe('ProgramserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Programservice]
    });
  });

  it('should be created', inject([Programservice], (service: Programservice) => {
    expect(service).toBeTruthy();
  }));
});
