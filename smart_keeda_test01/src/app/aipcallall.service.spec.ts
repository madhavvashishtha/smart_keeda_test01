import { TestBed } from '@angular/core/testing';

import { AipcallallService } from './aipcallall.service';

describe('AipcallallService', () => {
  let service: AipcallallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AipcallallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
