import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadosRhComponent } from './aprovados-rh.component';

describe('AprovadosRhComponent', () => {
  let component: AprovadosRhComponent;
  let fixture: ComponentFixture<AprovadosRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovadosRhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovadosRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
