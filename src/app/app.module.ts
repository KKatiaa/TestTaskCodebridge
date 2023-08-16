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

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponentComponent,
    ArticlesListComponentComponent,
    DateSuffixPipe,
    TruncatePipe,
    ArticleItemDetailsComponent,
    HighlighterDirective
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
