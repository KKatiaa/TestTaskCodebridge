import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-item-component',
  templateUrl: './article-item-component.component.html',
  styleUrls: ['./article-item-component.component.scss']
})
export class ArticleItemComponentComponent {
  @Input() data;
  constructor(public router: Router) {}

  public routeToArticle(): void {
    this.router.navigate(['/articleDetails', this.data.value.id]);
  }
}
