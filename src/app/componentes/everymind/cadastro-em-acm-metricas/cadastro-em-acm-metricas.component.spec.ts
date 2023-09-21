import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmAcmMetricasComponent } from './cadastro-em-acm-metricas.component';

describe('CadastroEmAcmMetricasComponent', () => {
  let component: CadastroEmAcmMetricasComponent;
  let fixture: ComponentFixture<CadastroEmAcmMetricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmAcmMetricasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmAcmMetricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
