import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePrecomptesComponent } from './save-precomptes.component';

describe('SavePrecomptesComponent', () => {
  let component: SavePrecomptesComponent;
  let fixture: ComponentFixture<SavePrecomptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePrecomptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePrecomptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
