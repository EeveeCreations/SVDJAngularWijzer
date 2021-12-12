import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReformRequestComponent } from './reform-request.component';

describe('ReformRequestComponent', () => {
  let component: ReformRequestComponent;
  let fixture: ComponentFixture<ReformRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReformRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReformRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
