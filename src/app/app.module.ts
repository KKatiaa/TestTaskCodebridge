import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleItemComponentComponent } from './components/article-item-component/article-item-component.component';
import { ItemServiceService } from './itemService/item-service.service';
import { ArticlesListComponentComponent } from './components/articles-list-component/articles-list-component.component';
import { DateSuffixPipe } from './pipe/datePipe/date-suffix.pipe';
import { TruncatePipe } from './pipe/truncatePipe/truncate.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleItemDetailsComponent } from './components/article-item-details/article-item-details.component';
import { HighlighterDirective } from './directive/highlighter.directive';
import { ThemesComponent } from './components/themes/themes.component';
import { BusinessNewsComponent } from './components/business-news/business-news.component';
import { BussinessNewsItemComponent } from './components/bussiness-news-item/bussiness-news-item.component';
import { TeslaNewsComponent } from './components/tesla-news/tesla-news.component';
import { TeslaNewsItemComponent } from './components/tesla-news-item/tesla-news-item.component';
import { AppleNewsComponent } from './components/apple-news/apple-news.component';
import { AppleNewsItemComponent } from './components/apple-news-item/apple-news-item.component';
import { TruncateDirective } from './directive/truncate-text.directive';
import { BussinessItemComponentComponent } from './components/bussiness-item-component/bussiness-item-component.component';
import { TeslaItemComponentComponent } from './components/tesla-item-component/tesla-item-component.component';
import { AppleItemComponentComponent } from './components/apple-item-component/apple-item-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponentComponent,
    ArticlesListComponentComponent,
    DateSuffixPipe,
    TruncatePipe,
    ArticleItemDetailsComponent,
    HighlighterDirective,
    ThemesComponent,
    BusinessNewsComponent,
    BussinessNewsItemComponent,
    TeslaNewsComponent,
    TeslaNewsItemComponent,
    AppleNewsComponent,
    AppleNewsItemComponent,
    TruncateDirective,
    BussinessItemComponentComponent,
    TeslaItemComponentComponent,
    AppleItemComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ItemServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
