import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesListComponentComponent } from './articles-list-component.component';

describe('ArticlesListComponentComponent', () => {
  let component: ArticlesListComponentComponent;
  let fixture: ComponentFixture<ArticlesListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
