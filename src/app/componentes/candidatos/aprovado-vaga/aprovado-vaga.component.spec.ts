import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadoVagaComponent } from './aprovado-vaga.component';

describe('AprovadoVagaComponent', () => {
  let component: AprovadoVagaComponent;
  let fixture: ComponentFixture<AprovadoVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovadoVagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprovadoVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
