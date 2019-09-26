import { TestBed } from '@angular/core/testing';

import { ChangeSwitchStateService } from './change-switch-state.service';

describe('ChangeSwitchStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeSwitchStateService = TestBed.get(ChangeSwitchStateService);
    expect(service).toBeTruthy();
  });
});
