import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationAnnuelleComponent } from './situation-annuelle.component';

describe('SituationAnnuelleComponent', () => {
  let component: SituationAnnuelleComponent;
  let fixture: ComponentFixture<SituationAnnuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationAnnuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationAnnuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
