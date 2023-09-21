import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmCadComponent } from './cadastro-em-cad.component';

describe('CadastroEmCadComponent', () => {
  let component: CadastroEmCadComponent;
  let fixture: ComponentFixture<CadastroEmCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmCadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
