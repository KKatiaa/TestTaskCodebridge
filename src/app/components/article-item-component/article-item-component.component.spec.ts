import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleItemComponentComponent } from './article-item-component.component';

describe('ArticleItemComponentComponent', () => {
  let component: ArticleItemComponentComponent;
  let fixture: ComponentFixture<ArticleItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
