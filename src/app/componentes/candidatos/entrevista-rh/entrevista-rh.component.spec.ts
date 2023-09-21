import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistaRhComponent } from './entrevista-rh.component';

describe('EntrevistaRhComponent', () => {
  let component: EntrevistaRhComponent;
  let fixture: ComponentFixture<EntrevistaRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrevistaRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrevistaRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
