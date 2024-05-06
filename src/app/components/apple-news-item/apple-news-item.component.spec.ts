import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleNewsItemComponent } from './apple-news-item.component';

describe('AppleNewsItemComponent', () => {
  let component: AppleNewsItemComponent;
  let fixture: ComponentFixture<AppleNewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleNewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
