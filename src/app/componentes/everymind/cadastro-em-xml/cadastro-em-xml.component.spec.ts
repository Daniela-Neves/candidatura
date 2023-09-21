import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmXmlComponent } from './cadastro-em-xml.component';

describe('CadastroEmXmlComponent', () => {
  let component: CadastroEmXmlComponent;
  let fixture: ComponentFixture<CadastroEmXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmXmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
