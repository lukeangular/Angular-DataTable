import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdatatableComponent } from './adatatable.component';

describe('AdatatableComponent', () => {
  let component: AdatatableComponent;
  let fixture: ComponentFixture<AdatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
