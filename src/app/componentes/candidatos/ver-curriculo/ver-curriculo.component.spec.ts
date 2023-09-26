import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCurriculoComponent } from './ver-curriculo.component';

describe('VerCurriculoComponent', () => {
  let component: VerCurriculoComponent;
  let fixture: ComponentFixture<VerCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCurriculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
