import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialCandidatoComponent } from './pagina-inicial-candidato.component';

describe('PaginaInicialCandidatoComponent', () => {
  let component: PaginaInicialCandidatoComponent;
  let fixture: ComponentFixture<PaginaInicialCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInicialCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInicialCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
