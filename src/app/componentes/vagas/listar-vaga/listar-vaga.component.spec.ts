import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVagaComponent } from './listar-vaga.component';

describe('ListarVagaComponent', () => {
  let component: ListarVagaComponent;
  let fixture: ComponentFixture<ListarVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
