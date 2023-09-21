import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoPausadoFinalizadoComponent } from './processo-pausado-finalizado.component';

describe('ProcessoPausadoFinalizadoComponent', () => {
  let component: ProcessoPausadoFinalizadoComponent;
  let fixture: ComponentFixture<ProcessoPausadoFinalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoPausadoFinalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessoPausadoFinalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
