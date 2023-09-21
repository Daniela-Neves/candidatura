import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliseTesteComponent } from './analise-teste.component';

describe('AnaliseTesteComponent', () => {
  let component: AnaliseTesteComponent;
  let fixture: ComponentFixture<AnaliseTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaliseTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnaliseTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
