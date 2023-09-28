import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarVagaComponent } from './administrar-vaga.component';

describe('AdministrarVagaComponent', () => {
  let component: AdministrarVagaComponent;
  let fixture: ComponentFixture<AdministrarVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarVagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
