import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmAltComponent } from './cadastro-em-alt.component';

describe('CadastroEmAltComponent', () => {
  let component: CadastroEmAltComponent;
  let fixture: ComponentFixture<CadastroEmAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmAltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
