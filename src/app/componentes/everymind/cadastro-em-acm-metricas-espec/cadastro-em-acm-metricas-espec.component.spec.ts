import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmAcmMetricasEspecComponent } from './cadastro-em-acm-metricas-espec.component';

describe('CadastroEmAcmMetricasEspecComponent', () => {
  let component: CadastroEmAcmMetricasEspecComponent;
  let fixture: ComponentFixture<CadastroEmAcmMetricasEspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmAcmMetricasEspecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmAcmMetricasEspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
