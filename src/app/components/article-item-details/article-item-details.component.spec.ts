import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleItemDetailsComponent } from './article-item-details.component';

describe('ArticleItemDetailsComponent', () => {
  let component: ArticleItemDetailsComponent;
  let fixture: ComponentFixture<ArticleItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
