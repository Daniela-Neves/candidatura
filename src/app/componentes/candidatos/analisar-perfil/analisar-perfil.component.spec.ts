import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisarPerfilComponent } from './analisar-perfil.component';

describe('AnalisarPerfilComponent', () => {
  let component: AnalisarPerfilComponent;
  let fixture: ComponentFixture<AnalisarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisarPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalisarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
