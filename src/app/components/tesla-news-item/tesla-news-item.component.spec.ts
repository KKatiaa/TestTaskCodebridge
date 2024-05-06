import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaNewsItemComponent } from './tesla-news-item.component';

describe('TeslaNewsItemComponent', () => {
  let component: TeslaNewsItemComponent;
  let fixture: ComponentFixture<TeslaNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeslaNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeslaNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
