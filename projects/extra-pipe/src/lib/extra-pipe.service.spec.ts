import { TestBed } from '@angular/core/testing';

import { ExtraPipeService } from './extra-pipe.service';

describe('ExtraPipeService', () => {
  let service: ExtraPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
