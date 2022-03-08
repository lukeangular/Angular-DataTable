import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdatableComponent } from './ndatable.component';

describe('NdatableComponent', () => {
  let component: NdatableComponent;
  let fixture: ComponentFixture<NdatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
