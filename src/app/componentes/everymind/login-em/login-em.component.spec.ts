import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmComponent } from './login-em.component';

describe('LoginEmComponent', () => {
  let component: LoginEmComponent;
  let fixture: ComponentFixture<LoginEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
