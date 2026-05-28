import { TestBed } from '@angular/core/testing';

import { HeaderModel } from '../models/header';

describe('Header', () => {
  let service: HeaderModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
