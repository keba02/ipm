import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPrecomptesMoisComponent } from './list-precomptes-mois.component';

describe('ListPrecomptesMoisComponent', () => {
  let component: ListPrecomptesMoisComponent;
  let fixture: ComponentFixture<ListPrecomptesMoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPrecomptesMoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPrecomptesMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
