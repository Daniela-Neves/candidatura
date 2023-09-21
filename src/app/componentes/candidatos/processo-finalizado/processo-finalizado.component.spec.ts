import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoFinalizadoComponent } from './processo-finalizado.component';

describe('ProcessoFinalizadoComponent', () => {
  let component: ProcessoFinalizadoComponent;
  let fixture: ComponentFixture<ProcessoFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoFinalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessoFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
