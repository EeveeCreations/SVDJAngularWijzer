import { TestBed } from '@angular/core/testing';

import { CalculateQuestionServiceService } from './calculate-question-service.service';

describe('CalculateQuestionServiceService', () => {
  let service: CalculateQuestionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateQuestionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
