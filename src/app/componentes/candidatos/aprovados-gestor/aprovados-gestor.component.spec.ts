import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadosGestorComponent } from './aprovados-gestor.component';

describe('AprovadosGestorComponent', () => {
  let component: AprovadosGestorComponent;
  let fixture: ComponentFixture<AprovadosGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovadosGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovadosGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
