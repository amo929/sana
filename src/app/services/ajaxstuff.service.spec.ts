import { TestBed, inject } from '@angular/core/testing';

import { AjaxstuffService } from './ajaxstuff.service';

describe('AjaxstuffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjaxstuffService]
    });
  });

  it('should be created', inject([AjaxstuffService], (service: AjaxstuffService) => {
    expect(service).toBeTruthy();
  }));
});
