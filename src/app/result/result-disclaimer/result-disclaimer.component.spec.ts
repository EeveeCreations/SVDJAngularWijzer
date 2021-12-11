import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDisclaimerComponent } from './result-disclaimer.component';

describe('ResultDisclaimerComponent', () => {
  let component: ResultDisclaimerComponent;
  let fixture: ComponentFixture<ResultDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultDisclaimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
