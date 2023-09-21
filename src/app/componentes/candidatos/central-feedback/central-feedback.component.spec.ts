import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralFeedbackComponent } from './central-feedback.component';

describe('CentralFeedbackComponent', () => {
  let component: CentralFeedbackComponent;
  let fixture: ComponentFixture<CentralFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
