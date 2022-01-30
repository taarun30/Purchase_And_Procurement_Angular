import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedorderComponent } from './customizedorder.component';

describe('CustomizedorderComponent', () => {
  let component: CustomizedorderComponent;
  let fixture: ComponentFixture<CustomizedorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
