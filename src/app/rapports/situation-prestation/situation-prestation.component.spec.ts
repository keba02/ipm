import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationPrestationComponent } from './situation-prestation.component';

describe('SituationPrestationComponent', () => {
  let component: SituationPrestationComponent;
  let fixture: ComponentFixture<SituationPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationPrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
