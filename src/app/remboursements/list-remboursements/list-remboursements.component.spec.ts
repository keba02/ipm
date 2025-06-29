import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRemboursementsComponent } from './list-remboursements.component';

describe('ListRemboursementsComponent', () => {
  let component: ListRemboursementsComponent;
  let fixture: ComponentFixture<ListRemboursementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRemboursementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRemboursementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
