import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmployerByIdComponent } from './liste-employer-by-id.component';

describe('ListeEmployerByIdComponent', () => {
  let component: ListeEmployerByIdComponent;
  let fixture: ComponentFixture<ListeEmployerByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEmployerByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEmployerByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
