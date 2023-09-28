import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicialEmpresaComponent } from './pagina-inicial-empresa.component';

describe('PaginaInicialEmpresaComponent', () => {
  let component: PaginaInicialEmpresaComponent;
  let fixture: ComponentFixture<PaginaInicialEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInicialEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInicialEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
