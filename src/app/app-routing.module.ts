import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleItemDetailsComponent } from './components/article-item-details/article-item-details.component';
import { ArticlesListComponentComponent } from './components/articles-list-component/articles-list-component.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesListComponentComponent,
  },
  {
    path: 'articleDetails/:id',
    component: ArticleItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
