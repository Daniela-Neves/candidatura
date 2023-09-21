import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprovadoRhComponent } from './reprovado-rh.component';

describe('ReprovadoRhComponent', () => {
  let component: ReprovadoRhComponent;
  let fixture: ComponentFixture<ReprovadoRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprovadoRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReprovadoRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
