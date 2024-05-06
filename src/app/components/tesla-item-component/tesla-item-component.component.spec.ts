import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaItemComponentComponent } from './tesla-item-component.component';

describe('TeslaItemComponentComponent', () => {
  let component: TeslaItemComponentComponent;
  let fixture: ComponentFixture<TeslaItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
