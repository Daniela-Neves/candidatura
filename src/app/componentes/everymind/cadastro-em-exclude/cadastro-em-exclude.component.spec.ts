import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmExcludeComponent } from './cadastro-em-exclude.component';

describe('CadastroEmExcludeComponent', () => {
  let component: CadastroEmExcludeComponent;
  let fixture: ComponentFixture<CadastroEmExcludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmExcludeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmExcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
