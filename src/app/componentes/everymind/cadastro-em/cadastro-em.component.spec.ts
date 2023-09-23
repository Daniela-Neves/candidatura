import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEmComponent } from './cadastro-em.component';

describe('CadastroEmComponent', () => {
  let component: CadastroEmComponent;
  let fixture: ComponentFixture<CadastroEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
