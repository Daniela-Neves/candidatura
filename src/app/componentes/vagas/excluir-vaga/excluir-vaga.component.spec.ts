import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirVagaComponent } from './excluir-vaga.component';

describe('ExcluirVagaComponent', () => {
  let component: ExcluirVagaComponent;
  let fixture: ComponentFixture<ExcluirVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirVagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
