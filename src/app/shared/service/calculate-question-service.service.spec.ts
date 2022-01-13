import { TestBed } from '@angular/core/testing';

import { CalculateQuestionService } from './calculate-question.service';

describe('CalculateQuestionServiceService', () => {
  let service: CalculateQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
