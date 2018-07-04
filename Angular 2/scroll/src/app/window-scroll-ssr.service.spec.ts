import { TestBed, inject } from '@angular/core/testing';

import { WindowScrollSsrService } from './window-scroll-ssr.service';

describe('WindowScrollSsrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowScrollSsrService]
    });
  });

  it('should be created', inject([WindowScrollSsrService], (service: WindowScrollSsrService) => {
    expect(service).toBeTruthy();
  }));
});
