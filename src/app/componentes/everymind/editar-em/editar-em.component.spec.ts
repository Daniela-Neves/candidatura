import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEmComponent } from './editar-em.component';

describe('EditarEmComponent', () => {
  let component: EditarEmComponent;
  let fixture: ComponentFixture<EditarEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
