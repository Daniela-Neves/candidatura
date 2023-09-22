import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEmComponent } from './menu-em.component';

describe('MenuEmComponent', () => {
  let component: MenuEmComponent;
  let fixture: ComponentFixture<MenuEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
