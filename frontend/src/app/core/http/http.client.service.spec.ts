import { TestBed } from '@angular/core/testing';

import { HttpClientService } from './http.client.service';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "../../../../core/auth/auth.service";

describe('HttpClientService', () => {
  let service: HttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClientService, AuthService]
    });
    service = TestBed.inject(HttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
