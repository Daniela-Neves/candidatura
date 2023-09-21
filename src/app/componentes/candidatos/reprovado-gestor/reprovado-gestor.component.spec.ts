import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprovadoGestorComponent } from './reprovado-gestor.component';

describe('ReprovadoGestorComponent', () => {
  let component: ReprovadoGestorComponent;
  let fixture: ComponentFixture<ReprovadoGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprovadoGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReprovadoGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
