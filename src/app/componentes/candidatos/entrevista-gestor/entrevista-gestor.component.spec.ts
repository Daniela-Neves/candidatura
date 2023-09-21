import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistaGestorComponent } from './entrevista-gestor.component';

describe('EntrevistaGestorComponent', () => {
  let component: EntrevistaGestorComponent;
  let fixture: ComponentFixture<EntrevistaGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistaGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrevistaGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
