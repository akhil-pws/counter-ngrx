import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNumberComponent } from './custom-number.component';

describe('CustomNumberComponent', () => {
  let component: CustomNumberComponent;
  let fixture: ComponentFixture<CustomNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomNumberComponent]
    });
    fixture = TestBed.createComponent(CustomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
