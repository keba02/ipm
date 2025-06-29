import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationParPrestationComponent } from './situation-par-prestation.component';

describe('SituationParPrestationComponent', () => {
  let component: SituationParPrestationComponent;
  let fixture: ComponentFixture<SituationParPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationParPrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationParPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
