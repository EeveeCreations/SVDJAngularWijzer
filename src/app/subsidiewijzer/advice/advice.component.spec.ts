import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceComponentUser } from './advice.component';

describe('AdviceComponentUser', () => {
  let component: AdviceComponentUser;
  let fixture: ComponentFixture<AdviceComponentUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceComponentUser ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceComponentUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
