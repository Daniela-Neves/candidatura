import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOportunidadeComponent } from './cadastrar-oportunidade.component';

describe('CadastrarOportunidadeComponent', () => {
  let component: CadastrarOportunidadeComponent;
  let fixture: ComponentFixture<CadastrarOportunidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarOportunidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOportunidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
