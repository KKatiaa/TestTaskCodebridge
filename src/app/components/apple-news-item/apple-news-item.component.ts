import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apple-news-item',
  templateUrl: './apple-news-item.component.html',
  styleUrls: ['./apple-news-item.component.scss']
})
export class AppleNewsItemComponent {
  @Input() data;
  description: string;
  isClicked: boolean = false;
  constructor(public router: Router) {}

  public routeToArticle(): void {
    this.router.navigate(['/appleDetails', this.data.id]);
  }

  public toggleClicked() {
    this.isClicked = !this.isClicked;
  }
}
