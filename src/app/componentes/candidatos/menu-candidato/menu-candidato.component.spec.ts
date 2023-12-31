import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCandidatoComponent } from './menu-candidato.component';

describe('MenuCandidatoComponent', () => {
  let component: MenuCandidatoComponent;
  let fixture: ComponentFixture<MenuCandidatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCandidatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
