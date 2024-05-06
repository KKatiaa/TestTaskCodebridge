import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleItemComponentComponent } from './apple-item-component.component';

describe('AppleItemComponentComponent', () => {
  let component: AppleItemComponentComponent;
  let fixture: ComponentFixture<AppleItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
