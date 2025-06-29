import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureEmployesComponent } from './facture-employes.component';

describe('FactureEmployesComponent', () => {
  let component: FactureEmployesComponent;
  let fixture: ComponentFixture<FactureEmployesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureEmployesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
