import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticleItemComponentComponent } from './article-item-component.component';

describe('ArticleItemComponentComponent', () => {
  let component: ArticleItemComponentComponent;
  let fixture: ComponentFixture<ArticleItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleItemComponentComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
