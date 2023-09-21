import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoReprovadoComponent } from './candidato-reprovado.component';

describe('CandidatoReprovadoComponent', () => {
  let component: CandidatoReprovadoComponent;
  let fixture: ComponentFixture<CandidatoReprovadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatoReprovadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
