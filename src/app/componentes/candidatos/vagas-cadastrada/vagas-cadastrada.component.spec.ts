import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasCadastradaComponent } from './vagas-cadastrada.component';

describe('VagasCadastradaComponent', () => {
  let component: VagasCadastradaComponent;
  let fixture: ComponentFixture<VagasCadastradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagasCadastradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagasCadastradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
