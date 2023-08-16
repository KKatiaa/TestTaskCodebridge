import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArticleItemDetailsComponent } from './article-item-details.component';

describe('ArticleItemDetailsComponent', () => {
  let component: ArticleItemDetailsComponent;
  let fixture: ComponentFixture<ArticleItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleItemDetailsComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
