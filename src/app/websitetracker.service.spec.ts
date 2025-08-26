import { TestBed } from '@angular/core/testing';

import { WebsitetrackerService } from './websitetracker.service';

describe('WebsitetrackerService', () => {
  let service: WebsitetrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsitetrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
