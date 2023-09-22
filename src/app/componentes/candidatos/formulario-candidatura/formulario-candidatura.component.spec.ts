import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCandidaturaComponent } from './formulario-candidatura.component';

describe('FormularioCandidaturaComponent', () => {
  let component: FormularioCandidaturaComponent;
  let fixture: ComponentFixture<FormularioCandidaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCandidaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCandidaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
