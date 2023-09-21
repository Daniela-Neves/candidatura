import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoRhComponent } from './agendamento-rh.component';

describe('AgendamentoRhComponent', () => {
  let component: AgendamentoRhComponent;
  let fixture: ComponentFixture<AgendamentoRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
