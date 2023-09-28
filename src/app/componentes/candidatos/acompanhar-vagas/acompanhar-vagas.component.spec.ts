import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanharVagasComponent } from './acompanhar-vagas.component';

describe('AcompanharVagasComponent', () => {
  let component: AcompanharVagasComponent;
  let fixture: ComponentFixture<AcompanharVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompanharVagasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanharVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
