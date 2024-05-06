import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessNewsItemComponent } from './bussiness-news-item.component';

describe('BussinessNewsItemComponent', () => {
  let component: BussinessNewsItemComponent;
  let fixture: ComponentFixture<BussinessNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
