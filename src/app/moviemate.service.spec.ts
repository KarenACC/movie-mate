import { TestBed } from '@angular/core/testing';

import { MoviemateService } from './moviemate.service';

describe('MoviemateService', () => {
  let service: MoviemateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviemateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
