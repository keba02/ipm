import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCotisationComponent } from './ajout-cotisation.component';

describe('AjoutCotisationComponent', () => {
  let component: AjoutCotisationComponent;
  let fixture: ComponentFixture<AjoutCotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCotisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
