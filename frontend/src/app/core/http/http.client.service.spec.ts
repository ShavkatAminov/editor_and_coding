import { TestBed } from '@angular/core/testing';

import { HttpClientService } from './http.client.service';
import {HttpClientModule} from "@angular/common/http";

describe('HttpClientService', () => {
  let service: HttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClientService]
    });
    service = TestBed.inject(HttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
