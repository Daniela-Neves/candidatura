import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmAcmMetricasTodaComponent } from './cadastro-em-acm-metricas-toda.component';

describe('CadastroEmAcmMetricasTodaComponent', () => {
  let component: CadastroEmAcmMetricasTodaComponent;
  let fixture: ComponentFixture<CadastroEmAcmMetricasTodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmAcmMetricasTodaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmAcmMetricasTodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
