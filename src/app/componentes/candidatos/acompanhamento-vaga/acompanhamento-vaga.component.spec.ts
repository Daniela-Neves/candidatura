import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanhamentoVagaComponent } from './acompanhamento-vaga.component';

describe('AcompanhamentoVagaComponent', () => {
  let component: AcompanhamentoVagaComponent;
  let fixture: ComponentFixture<AcompanhamentoVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompanhamentoVagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanhamentoVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
