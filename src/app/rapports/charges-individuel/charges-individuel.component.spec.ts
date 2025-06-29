import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesIndividuelComponent } from './charges-individuel.component';

describe('ChargesIndividuelComponent', () => {
  let component: ChargesIndividuelComponent;
  let fixture: ComponentFixture<ChargesIndividuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargesIndividuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesIndividuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
