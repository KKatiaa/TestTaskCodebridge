import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleItemDetailsComponent } from './components/article-item-details/article-item-details.component';
import { ArticlesListComponentComponent } from './components/articles-list-component/articles-list-component.component';
import { BusinessNewsComponent } from './components/business-news/business-news.component';
import { TeslaNewsComponent } from './components/tesla-news/tesla-news.component';
import { AppleNewsComponent } from './components/apple-news/apple-news.component';
import { BussinessItemComponentComponent } from './components/bussiness-item-component/bussiness-item-component.component';
import { AppleItemComponentComponent } from './components/apple-item-component/apple-item-component.component';
import { TeslaItemComponentComponent } from './components/tesla-item-component/tesla-item-component.component';


const routes: Routes = [
  {
    path: '',
    component: ArticlesListComponentComponent,
  },
  {
    path: 'bussiness',
    component: BusinessNewsComponent,
  },
  {
    path: 'apple',
    component: AppleNewsComponent,
  },
  {
    path: 'tesla',
    component: TeslaNewsComponent,
  },
  {
    path: 'cosmos',
    component: ArticlesListComponentComponent,
  },
  {
    path: 'articleDetails/:id',
    component: ArticleItemDetailsComponent
  },
  {
    path: 'bussinessDetails/:id',
    component: BussinessItemComponentComponent
  },
  {
    path: 'teslaDetails/:id',
    component: TeslaItemComponentComponent
  },
  {
    path: 'appleDetails/:id',
    component: AppleItemComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
