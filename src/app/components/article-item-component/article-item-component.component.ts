import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-item-component',
  templateUrl: './article-item-component.component.html',
  styleUrls: ['./article-item-component.component.scss']
})
export class ArticleItemComponentComponent implements OnInit {
  @Input() data;
  isClicked: boolean = false;
  constructor(public router: Router) {}

  public routeToArticle(): void {
    this.router.navigate(['/articleDetails', this.data.id]);
  }

  public toggleClicked() {
    this.isClicked = !this.isClicked;
  }

  ngOnInit(): void {
      //console.log("Data: ", this.data);
  }
}
