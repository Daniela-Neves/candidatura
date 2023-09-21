import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarVagaComponent } from './finalizar-vaga.component';

describe('FinalizarVagaComponent', () => {
  let component: FinalizarVagaComponent;
  let fixture: ComponentFixture<FinalizarVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarVagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
