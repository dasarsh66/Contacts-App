import { TestBed, inject } from '@angular/core/testing';

import { GetContactsService } from './get-contacts.service';

describe('GetContactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetContactsService]
    });
  });

  it('should be created', inject([GetContactsService], (service: GetContactsService) => {
    expect(service).toBeTruthy();
  }));
});
