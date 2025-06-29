import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerParServiceComponent } from './employer-par-service.component';

describe('EmployerParServiceComponent', () => {
  let component: EmployerParServiceComponent;
  let fixture: ComponentFixture<EmployerParServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerParServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerParServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
