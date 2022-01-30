import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedlinkComponent } from './customizedlink.component';

describe('CustomizedlinkComponent', () => {
  let component: CustomizedlinkComponent;
  let fixture: ComponentFixture<CustomizedlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizedlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
