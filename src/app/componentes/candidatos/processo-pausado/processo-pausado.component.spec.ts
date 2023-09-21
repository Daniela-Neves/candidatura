import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoPausadoComponent } from './processo-pausado.component';

describe('ProcessoPausadoComponent', () => {
  let component: ProcessoPausadoComponent;
  let fixture: ComponentFixture<ProcessoPausadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoPausadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessoPausadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
