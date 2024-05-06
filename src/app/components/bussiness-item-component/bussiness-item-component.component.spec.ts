import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessItemComponentComponent } from './bussiness-item-component.component';

describe('BussinessItemComponentComponent', () => {
  let component: BussinessItemComponentComponent;
  let fixture: ComponentFixture<BussinessItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
