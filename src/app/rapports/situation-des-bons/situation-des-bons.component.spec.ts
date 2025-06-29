import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationDesBonsComponent } from './situation-des-bons.component';

describe('SituationDesBonsComponent', () => {
  let component: SituationDesBonsComponent;
  let fixture: ComponentFixture<SituationDesBonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SituationDesBonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationDesBonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
