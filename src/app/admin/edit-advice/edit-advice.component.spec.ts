import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdviceComponent } from './edit-advice.component';

describe('EditAdviceComponent', () => {
  let component: EditAdviceComponent;
  let fixture: ComponentFixture<EditAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
