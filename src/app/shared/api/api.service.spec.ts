import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import {Observable} from "rxjs";
import {Question} from "../model/question.model";

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
