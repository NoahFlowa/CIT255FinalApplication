import { TestBed } from '@angular/core/testing';

import { MusickitService } from './musickit.service';

describe('MusickitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusickitService = TestBed.get(MusickitService);
    expect(service).toBeTruthy();
  });
});
