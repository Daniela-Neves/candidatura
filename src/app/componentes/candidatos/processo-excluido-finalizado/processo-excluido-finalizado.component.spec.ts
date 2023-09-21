import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoExcluidoFinalizadoComponent } from './processo-excluido-finalizado.component';

describe('ProcessoExcluidoFinalizadoComponent', () => {
  let component: ProcessoExcluidoFinalizadoComponent;
  let fixture: ComponentFixture<ProcessoExcluidoFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoExcluidoFinalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessoExcluidoFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
