import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoGestorComponent } from './agendamento-gestor.component';

describe('AgendamentoGestorComponent', () => {
  let component: AgendamentoGestorComponent;
  let fixture: ComponentFixture<AgendamentoGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
