import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmExcludeMsgComponent } from './cadastro-em-exclude-msg.component';

describe('CadastroEmExcludeMsgComponent', () => {
  let component: CadastroEmExcludeMsgComponent;
  let fixture: ComponentFixture<CadastroEmExcludeMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmExcludeMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmExcludeMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
