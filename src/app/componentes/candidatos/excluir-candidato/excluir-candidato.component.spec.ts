import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirCandidatoComponent } from './excluir-candidato.component';

describe('ExcluirCandidatoComponent', () => {
  let component: ExcluirCandidatoComponent;
  let fixture: ComponentFixture<ExcluirCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
