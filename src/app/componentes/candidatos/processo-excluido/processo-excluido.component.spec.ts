import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoExcluidoComponent } from './processo-excluido.component';

describe('ProcessoExcluidoComponent', () => {
  let component: ProcessoExcluidoComponent;
  let fixture: ComponentFixture<ProcessoExcluidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoExcluidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessoExcluidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
