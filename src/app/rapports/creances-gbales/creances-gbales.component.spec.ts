import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreancesGbalesComponent } from './creances-gbales.component';

describe('CreancesGbalesComponent', () => {
  let component: CreancesGbalesComponent;
  let fixture: ComponentFixture<CreancesGbalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreancesGbalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreancesGbalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
