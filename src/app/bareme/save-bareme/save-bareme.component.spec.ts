import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBaremeComponent } from './save-bareme.component';

describe('SaveBaremeComponent', () => {
  let component: SaveBaremeComponent;
  let fixture: ComponentFixture<SaveBaremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveBaremeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBaremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
