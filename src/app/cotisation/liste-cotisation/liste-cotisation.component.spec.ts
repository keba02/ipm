import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCotisationComponent } from './liste-cotisation.component';

describe('ListeCotisationComponent', () => {
  let component: ListeCotisationComponent;
  let fixture: ComponentFixture<ListeCotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCotisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
